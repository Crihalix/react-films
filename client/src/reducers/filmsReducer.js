import { GET_FILMS } from "../actions/types";

const initialState = {
	films: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_FILMS:
			return {
				...state,
				films: action.payload
			};
		default:
			return state;
	}
}
