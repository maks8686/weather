import axios from "axios";

export const placesApi = axios.create({
  baseURL: "https://autocomplete.travelpayouts.com/",
});

export const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

