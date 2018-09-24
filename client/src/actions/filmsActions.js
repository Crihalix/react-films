import axios from "axios";

import { GET_FILMS } from "./types";

export const getFilms = () => dispatch => {
	axios
		.get("/api/films")
		.then(res => {
			console.log(res.data.results);
			dispatch({
				type: GET_FILMS,
				payload: res.data.results
			});
		})
		.catch(err => {
			console.log(err.data);
			dispatch({
				type: GET_FILMS,
				payload: {}
			});
		});
};
