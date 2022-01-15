
import { useSelector } from "react-redux";

export const TodayWeather = () => {
  const todayWeather = useSelector((state) => state.point);
  const stat = useSelector((state) => state);
  console.log(stat);

  if (stat.status === "set weather") {
    console.log(stat)
    return <div>{todayWeather.pointName}</div>;
  } else {
    return null;
  }
};
