import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

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

api.interceptors.request.use((config) => {
  const lang = reduxStore?.getState()?.language?.lang || "ar";

  config.headers.lang = lang;

  return config;
});

export default api;

// import axios from "axios";

// const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// const api = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
// });

// const supportedLangs = ["ar", "en"];

// api.interceptors.request.use((config) => {
//   const pathLang = window.location.pathname.split("/")[1];

//   const lang = supportedLangs.includes(pathLang) ? pathLang : "ar";

//   config.headers.lang = lang;

//   return config;
// });

// export default api;
