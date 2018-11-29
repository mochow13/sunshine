import axios from 'axios';
const API_KEY = '30d380ee412f2896aa1c09bfd8f6f5e4';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}q=${city},us&appid=${API_KEY}`;
    const request = axios.get(url);

    // console.log('here');
    // console.log('Request:', request);
    // request contains a promise, promise has the returned data in
    // PromiseVal as 'data'.

    return {
        type: FETCH_WEATHER,
        payload: request,
    }; 
}