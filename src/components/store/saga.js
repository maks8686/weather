import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { setCityData, setAutocomplArr } from "./action";
import {
  setCoord,
  setWeather,
  setAutocompleteArr,
  setStatus,
} from "./weatherSlice";

function* getCoordWorker(action) {
  const apiKey = "c0c767d0dbd4142401b9bca74616fa02";
  try {
    yield put(setStatus("load"));
    const place = yield axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=${apiKey}`
    );
    const { name } = place.data;
    const { lat, lon } = place.data.coord;
    const cityData = { name, lat, lon };
    yield put(setCoord(cityData));

    const weather = yield axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&units=metric&lang=ru&appid=${apiKey}`
    );

    yield put(setWeather(weather));
  } catch (err) {
    yield put(setStatus("error"));
  }
}

function* getAutocompArr(action) {
  try {
    const cityArr = yield axios.get(
      `https://autocomplete.travelpayouts.com/places2?term=${action.payload}&locale=ru&types[]=city`
    );
    const data = cityArr.data;
    yield put(setAutocompleteArr(data));
  } catch (err) {}
}
export default function* watcherSaga() {
  yield takeEvery(setCityData, getCoordWorker);
  yield takeEvery(setAutocomplArr, getAutocompArr);
}
