import axios from 'axios';
//register and get API from https://openweathermap.org/forecast5
const API_KEY = '045132d768adaf464ec792c8fe7a5d48';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//constant action to specify the action type
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;

	//we used redux-promise while using axios
	//we use axios to make ajax request
	//redux-promise is important as it detected that we used payload
	//it took the data coming from the request, stuck it on the payload property and sent on the action on all of the reducers on our application
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};

}