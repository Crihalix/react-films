import { GET_FILMS, GET_FILM } from "../actions/types";

const initialState = {
	films: null,
	film: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_FILMS:
			return {
				...state,
				films: action.payload
			};
		case GET_FILM:
			console.log(state, action.payload);
			return {
				...state,
				film: action.payload
			};
		default:
			return state;
	}
}
