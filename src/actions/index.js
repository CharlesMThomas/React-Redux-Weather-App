import axios from 'axios';

const API_KEY = '2d2b2f6dbf2fc546b187848c26cc4d27';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
      type: FETCH_WEATHER,
      payload: request
    };
}