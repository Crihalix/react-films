import axios from "axios";

import { GET_FILMS } from "./types";

export const getFilms = () => dispatch => {
	axios
		.get("/api/films")
		.then(1)
		.then(res => {
			res.data.results.movie = "xxx";
			return res;
		})
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
