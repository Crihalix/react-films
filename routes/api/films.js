const express = require("express");
const router = express.Router();
const request = require("request-promise");
const { apiKey } = require("../../config/keys");

const optionsGetFilms = {
	method: "GET",
	uri: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=Red&page=1`
};

const optionsGetFilm = function(movie_id) {
	return {
		method: "GET",
		uri: `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=en-US`
	};
};

// @route   GET api/films/test
// @desc    Tests work route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Films" }));

// @route   GET api/films
// @desc    Get films
// @access  Public
router.get("/", (req, res) => {
	request(optionsGetFilms)
		.then(function(response) {
			// Success
			return res.send(response);
		})
		.catch(function(err) {
			// Error
			console.log(err);
		});
});

// @route   GET api/films/:id
// @desc    Get films
// @access  Public
router.get("/:id", (req, res) => {
	request(optionsGetFilm(req.params.id))
		.then(function(response) {
			console.log(12, response);
			return res.send(response);
		})
		.catch(function(err) {
			console.log(err);
		});
});

module.exports = router;
