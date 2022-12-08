import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

api.interceptors.request.use((config) => {
  config.url =
    config.url + `&appid=bc4db972c639040e56fa0e1981a1c33f&lang=ru&units=metric`;
  return config;
});
