
import { put, takeEvery,call } from "redux-saga/effects";
import { AppStatus } from "./appStatusConst";
import { setCityData, setAutocomplArr } from "./action";
import { placesApi, weatherApi } from "../services/api/placesApi";
import {
  setCoord,
  setWeather,
  setAutocompleteArr,
  setStatus,
} from "./weatherSlice";

function* getCoordWorker(action) {
  
  try {
    yield put(setStatus(AppStatus.LOAD));
    const place = yield call(
      weatherApi.get,`weather?q=${action.payload}&appid=${process.env.REACT_APP_API_KEY}`
    );
    const { name } = place.data;
    const { lat, lon } = place.data.coord;
    const cityData = { name, lat, lon };
    yield put(setCoord(cityData));

    const weather = yield call(
      weatherApi.get,`onecall?lat=${lat}&lon=${lon}&exclude={part}&units=metric&lang=ru&appid=${process.env.REACT_APP_API_KEY}`
    );
    

    yield put(setWeather(weather));
  } catch (err) {
    yield put(setStatus(AppStatus.ERROR));
  }
}

function* getAutocompArr(action) {
  try {
    const {data} = yield call(placesApi.get,
      `places2?term=${action.payload}&locale=ru&types[]=city`
    );
    
    yield put(setAutocompleteArr(data));
  } catch (err) {}
}
export default function* watcherSaga() {
  yield takeEvery(setCityData, getCoordWorker);
  yield takeEvery(setAutocomplArr, getAutocompArr);
}
