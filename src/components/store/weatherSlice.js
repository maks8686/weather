import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  const localParams = JSON.parse(localStorage.getItem("weather"));
  if (!localParams) {
    return ({
      point: { pointName: "Москва", lat: 55.755826, lon: 37.6173 },
      status: "preload",
      autocomplete:[],
      weather:{}
    });
  }
  return localParams;
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    
    setCoord: (state, action) => {
      state.status = "get coord";
      state.point.pointName = action.payload.name;
      state.point.lat = action.payload.lat;
      state.point.lon = action.payload.lon;
      console.log(state);
    },
    setWeather:(state, action)=>{
      state.weather =action.payload.data
      state.status = "set weather"
      console.log(state);
    }
  },
});

export const { setCoord, setWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
