import { useSelector } from "react-redux";
import { formatDate } from "../../utils";
import { BigTempFont, Descript, Details, StyledTodayWeather } from "./todayWeather.styled";

export const TodayWeather = () => {
  const todayWeather = useSelector((state) => state.weather);
  const stat = useSelector((state) => state);
  console.log(stat);

  if (stat.weather.status === "set weather") {
    console.log("иф тудей везер отработал");
    return (
      <StyledTodayWeather>
        <div>{todayWeather.point.pointName}</div>
        {formatDate(todayWeather.weather.current.dt)}

        <BigTempFont>
        
          <img
            src={`http://openweathermap.org/img/wn/${todayWeather.weather.current.weather[0].icon}@2x.png`}
            alt="weatherImage"
          />
          
          {Math.round(todayWeather.weather.current.temp)}°C
         
        </BigTempFont> <Descript >
          {todayWeather.weather.current.weather[0].description}
        </Descript>
        <Details>
         <div>
          ощущается как: {Math.round(todayWeather.weather.current.feels_like)}°C
          </div>
          <div>
          влажность: {Math.round(todayWeather.weather.current.humidity)}%
          </div>
          </Details>
          <Details>
          <div>
          давление: {Math.round((todayWeather.weather.current.pressure)*0.75)}мм.рт.ст
          </div>
          <div>
          ветер: {Math.round(todayWeather.weather.current.wind_speed)}м/c
          </div>
        </Details>
      </StyledTodayWeather>
    );
  } else {
    return null;
  }
};
