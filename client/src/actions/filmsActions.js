import axios from "axios";

import { GET_FILMS, GET_FILM } from "./types";

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

export const getFilm = id => dispatch => {
	axios
		.get(`/api/films/${id}`)
		.then(res => {
			console.log(res.data);
			dispatch({
				type: GET_FILM,
				payload: res.data
			});
		})
		.catch(err => {
			console.log(err.data);
			dispatch({
				type: GET_FILM,
				payload: {}
			});
		});
};
