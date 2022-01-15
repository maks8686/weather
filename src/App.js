
import { StyledApp } from "./App.styled";
import { Input } from "./components/input/input";
import { TodayWeather } from "./components/todayWeather/todayWeather";

function App() {

  console.log("апп компонент рендерится");
  return (
    <StyledApp>
      <Input />
      <TodayWeather />
    </StyledApp>
  );
  
}

export default App;
