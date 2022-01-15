import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects'
import { setCityData } from './action';
import { setCoord, setWeather } from './weatherSlice';



function* getCoordWorker(action){
try{
   const place=yield axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=c0c767d0dbd4142401b9bca74616fa02`)
   const {name}=place.data
   const {lat,lon}=place.data.coord
   console.log(name,lat,lon)
   const cityData={name,lat,lon}
   yield put(setCoord(cityData))

   const weather =yield axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&units=metric&appid=c0c767d0dbd4142401b9bca74616fa02`)
   console.log(weather)
   yield put(setWeather(weather))
   
}catch(err){
  console.log('error');
}}

export default function* watcherSaga() {
  yield takeEvery(setCityData, getCoordWorker );
}