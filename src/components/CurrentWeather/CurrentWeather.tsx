import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import { setSearch } from "../../store/slices/currentWeatherSlice";
import earthIcon from "../../assets/earth-Icon.svg";
import { EditableSpan } from "../EditableSpan/EditableSpan";
import { ruDate } from "../../utils/ruDate";
import { currentWeatherSelector } from "../../store/Selectors/currentWeatherSelectors";
import { getIconUrl } from "../../services/WeatherService";
import loadingSvg from "../../assets/loading-icon.svg";

export const CurrentWeather = () => {
  const dispatch = useAppDispatch();
  const { weather, temp, cityName, feelsLikeTemp, windSpeed } = useAppSelector(
    currentWeatherSelector
  );
  const loading = useAppSelector((state) => state.currentWeatherSlice.loading);
  useEffect(() => {
    dispatch(fetchCurrentWeather("Москва"));
  }, []);

  const changeCityName = (value: string) => {
    dispatch(setSearch(value));
    dispatch(fetchCurrentWeather(value));
  };
  const roundedValue = (value: number) => Math.round(value);

  return (
    <div
      className={
        "h-[500px] w-96 rounded-3xl bg-white to-pink-500 p-6 drop-shadow-lg"
      }
    >
      {loading ? (
        <div className={"flex h-full items-center justify-center"}>
          <img
            className={"mx-auto items-center justify-center"}
            src={loadingSvg}
            alt=""
          />
        </div>
      ) : (
        <div className={"flex-col"}>
          <div className={"h-28 w-full font-medium opacity-75"}>
            <div className={"flex"}>
              <img className={"w-7"} src={earthIcon} alt="earthIcon" />
              <div className={"text-md flex items-center pl-2"}>
                <EditableSpan
                  value={"Поиск города"}
                  onChange={(newValue) => {
                    changeCityName(newValue);
                  }}
                />
              </div>
            </div>
            <span className={"text-5xl"}>{cityName}</span>
          </div>
          <span className={"text-lg"}>{ruDate()}</span>
          <div className={"h-28 text-4xl font-extrabold opacity-75"}>
            Сейчас {weather.description}
          </div>
          <div className={"flex items-center"}>
            <img src={getIconUrl(weather.icon)} alt="weatherIcon" />
            <div className={"text-7xl font-extrabold opacity-75"}>
              {roundedValue(temp)}°
            </div>
          </div>
          <div className={"text-3xl font-medium opacity-75 "}>
            <span> Ощущается как {roundedValue(feelsLikeTemp)}</span>
            <span> Скорость ветра {roundedValue(windSpeed)} М/c</span>
          </div>
        </div>
      )}
    </div>
  );
};
