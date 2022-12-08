import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL.PROD,
});

api.interceptors.request.use((config) => {
  config.url =
    config.url +
    `&appid=${import.meta.env.VITE_APP_API_KEY.PROD}&lang=ru&units=metric`;
  return config;
});
