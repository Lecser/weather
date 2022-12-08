import { createAsyncThunk } from "@reduxjs/toolkit";
import { WeatherService } from "../../services/WeatherService";

export const fetchCurrentWeather = createAsyncThunk(
  "currentWeather/fetchCurrentWeather",
  async (city: string) => {
    const { data } = await WeatherService.getCurrentWeather(city);
    return data;
  }
);
