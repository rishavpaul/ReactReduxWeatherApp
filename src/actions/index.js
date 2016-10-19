import axios from 'axios';

const API_KEY = 'e9c664534261e126f54fb206725909d5';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// after the promise is resolved, a new action is forwarded to all the
// reducers. This is the Redux-Promise workflow
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},in`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}