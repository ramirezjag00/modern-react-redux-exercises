import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_WEATHER:
		//ES6
		//best practice is not to modify state directly but to return a new object that will take the place of our existing state
		return [action.payload.data, ...state];
		//return state.concat([action.payload.data]);
	}
	return state;
}

