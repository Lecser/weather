import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCurrentWeather } from "../thunks/fetchCurrentWeather";
import { weatherType } from "../types/types";

type InitialStateType = {
  currentWeather: {
    cityName: string;
    feelsLikeTemp: number;
    temp: number;
    windSpeed: number;
    weather: weatherType;
  };
  loading: boolean;
  errorMessage?: string;
  search: string;
};

const initialState = {
  currentWeather: {
    cityName: "",
    feelsLikeTemp: 0,
    temp: 0,
    windSpeed: 0,
    weather: { description: "", icon: "01d" },
  },
  loading: false,
  errorMessage: "",
} as InitialStateType;

export const currentWeatherSlice = createSlice({
  name: "currentWeather",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCurrentWeather.fulfilled, (state, action) => {
        state.currentWeather = {
          cityName: action.payload.name,
          feelsLikeTemp: action.payload.main.feels_like,
          temp: action.payload.main.temp,
          windSpeed: action.payload.wind.speed,
          weather: action.payload.weather[0],
        };
        state.loading = false;
      })
      .addCase(fetchCurrentWeather.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message;
      });
  },
});

export const { setSearch } = currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;
