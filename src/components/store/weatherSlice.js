import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  const localParams = JSON.parse(localStorage.getItem("weather"));
  if (!localParams) {
    return {
      point: { pointName: "", lat: null, lon: null },
      status: "preload",
      autocomplete: [],
      weather: {},
    };
  }
  return localParams;
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCityNameState: (state, action) => {
      state.point.pointName = action.payload;
    },

    setCoord: (state, action) => {
      state.status = "get coord";
      state.point.pointName = action.payload.name;
      state.point.lat = action.payload.lat;
      state.point.lon = action.payload.lon;
    },
    setWeather: (state, action) => {
      state.weather = action.payload.data;
      state.status = "set weather";
    },
    setAutocompleteArr: (state, action) => {
      state.autocomplete = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const {
  setCoord,
  setWeather,
  setAutocompleteArr,
  setCityNameState,
  setShowAutoComplete,
  setStatus
} = weatherSlice.actions;

export default weatherSlice.reducer;
