import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const SIGNATURE_SECRET =
  import.meta.env.VITE_SIGNATURE_SECRET || "2026-0101-0303-tec0-twm6";
const VERIFY_RESPONSE_SIGNATURE =
  import.meta.env.VITE_VERIFY_RESPONSE_SIGNATURE !== "false";

let reduxStore;

export const injectStore = (store) => {
  reduxStore = store;
};

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const encoder = new TextEncoder();

const toHex = (buffer) =>
  [...new Uint8Array(buffer)].map((b) => b.toString(16).padStart(2, "0")).join("");

const getCairoDateTime = () => {
  const now = new Date();
  const formatted = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Africa/Cairo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(now);

  // "2026-03-26 14:08:39"
  return formatted.replace(",", "");
};

const getDatePart = (dateTimeString) => dateTimeString.slice(0, 10);

const generateNonce = () => {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return toHex(bytes.buffer);
};

const normalizeRequestBody = (config) => {
  if (config.data == null) return "";
  if (typeof config.data === "string") return config.data;
  if (config.data instanceof FormData) return "";
  if (config.data instanceof URLSearchParams) return config.data.toString();

  const json = JSON.stringify(config.data);
  config.data = json;
  return json;
};

const importHmacKey = async () =>
  crypto.subtle.importKey(
    "raw",
    encoder.encode(SIGNATURE_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

const signPayload = async (payload) => {
  const key = await importHmacKey();
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return toHex(signature);
};

const secureCompare = (a = "", b = "") => {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
};

api.interceptors.request.use(async (config) => {
  const lang = reduxStore?.getState()?.language?.lang || "ar";
  const method = (config.method || "GET").toUpperCase();
  const nonce = generateNonce();
  const dateTime = getCairoDateTime();
  const datePart = getDatePart(dateTime);
  const body = normalizeRequestBody(config);

  const payload = nonce + datePart + method + body;
  const signature = await signPayload(payload);

  config.headers.lang = lang;
  config.headers["X-Nonce"] = nonce;
  config.headers["X-Date"] = dateTime;
  config.headers["X-Signature"] = signature;

  return config;
});

api.interceptors.response.use(async (response) => {
  if (!VERIFY_RESPONSE_SIGNATURE || response.status === 204) return response;

  const nonce = response.headers["x-nonce"];
  const signature = response.headers["x-signature"];
  const dateTime = response.headers["x-date"];

  if (!nonce || !signature || !dateTime) return response;

  const method = (response.config?.method || "GET").toUpperCase();
  const rawBody = response.request?.responseText ?? "";
  const payload = nonce + dateTime + method + rawBody;
  const expected = await signPayload(payload);

  if (!secureCompare(expected, signature)) {
    return Promise.reject(new Error("Invalid response signature."));
  }

  return response;
});

export default api;
