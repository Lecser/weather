import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

api.interceptors.request.use((config) => {
  config.url =
    config.url +
    `&appid=${import.meta.env.VITE_APP_API_KEY}&lang=ru&units=metric`;
  return config;
});
