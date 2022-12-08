import { api } from "../axios";
import { CurrentWeatherResponseType } from "../store/types/types";

export class WeatherService {
  static getCurrentWeather(city: string) {
    return api.get<CurrentWeatherResponseType>(`weather?q=${city}`);
  }
}
export const getIconUrl = (code: string) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;
