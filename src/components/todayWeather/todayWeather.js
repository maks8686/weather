import { useSelector } from "react-redux";
import { formatDate } from "../../utils";
import { Loader } from "./../loader/loader";
import {
  BigTempFont,
  Descript,
  Details,
  StyledTodayWeather,
} from "./todayWeather.styled";

export const TodayWeather = () => {
  const todayWeather = useSelector((state) => state.weather);
  const stat = useSelector((state) => state);

  if (stat.weather.status === "set weather") {
    const { dt, pressure, temp, humidity, feels_like, wind_speed } =
      todayWeather.weather.current;
    const { description, icon } = todayWeather.weather.current.weather[0];
    return (
      <StyledTodayWeather>
        <div>{todayWeather.point.pointName}</div>
        {formatDate(dt)}
        <BigTempFont>
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt=""
          />
          {Math.round(temp)}°C
        </BigTempFont>{" "}
        <Descript>{description}</Descript>
        <Details>
          <div>
            ощущается как: {Math.round(feels_like)}
            °C
          </div>
          <div>влажность: {Math.round(humidity)}%</div>
        </Details>
        <Details>
          <div>
            давление: {Math.round(pressure * 0.75)}
            мм.рт.ст
          </div>
          <div>ветер: {Math.round(wind_speed)}м/c</div>
        </Details>
      </StyledTodayWeather>
    );
  } else if (stat.weather.status === "load") {
    return <Loader />;
  } else if (stat.weather.status === "error") {
    return <h1>Ошибка загрузки...Что-то пошло не так.</h1>;
  } else {
    return null;
  }
};
