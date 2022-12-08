export type CurrentWeatherResponseType = {
  name: string;
  main: {
    feels_like: number;
    temp: number;
  };
  wind: {
    speed: number;
  };
  weather: weatherType[];
};

export type weatherType = {
  description: string;
  icon: string;
};
