import { RootState, store } from "../store";

export const currentWeatherSelector = (state: RootState) =>
  state.currentWeatherSlice.currentWeather;
