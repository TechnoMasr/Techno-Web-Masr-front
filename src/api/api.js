import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// ✅ إنشاء instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const lang = localStorage.getItem("lang") || "ar";
    config.headers.lang = lang;

    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
