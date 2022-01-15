import { useEffect } from "react";
import { useSelector } from "react-redux";
import { StyledApp } from "./App.styled";
import { ForecastWeather } from "./components/forecastWeather/forecastWeather";
import { Input } from "./components/input/input";
import { TodayWeather } from "./components/todayWeather/todayWeather";

function App() {
  const weather = useSelector(state=>state.weather);
  useEffect(() => localStorage.setItem("weather", JSON.stringify(weather)));
  console.log("апп компонент рендерится");
  return (
    <StyledApp>
      <Input />
      <TodayWeather />
      <ForecastWeather/>
    </StyledApp>
  );
}

export default App;
