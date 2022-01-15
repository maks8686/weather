import { useSelector } from "react-redux";
import { formatDate } from "../../utils";
import { DateAndTemp, StyledForecast, StyledForecastCard } from "./forecastweather.styled";




export const ForecastWeather=()=>{
  const forecastWeather = useSelector((state) => state.weather.weather.daily);
  const stat = useSelector((state) => state);
  console.log(forecastWeather)

  if (stat.weather.status === "set weather") {
    return(
   <StyledForecast>
  {forecastWeather.slice(1,7).map(item=>{
    return(
      <StyledForecastCard key={item.dt}>
      <DateAndTemp>
      <div>{formatDate(item.dt)}</div>
      {Math.round(item.temp.day)}°C
      {Math.round(item.temp.night)}°C
      </DateAndTemp>
      <img
            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt="weatherImage"
          />
      {item.weather[0].description}
      
     </StyledForecastCard>
      )})}
      </StyledForecast>
    )}else{
    return null
  }

}