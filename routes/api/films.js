const express = require("express");
const router = express.Router();
const request = require("request-promise");
const { apiKey } = require("../../config/keys");

const options = {
	method: "GET",
	uri: `https://api.themoviedb.org/3/search/keyword?api_key=${apiKey}&query=Red&page=1`
};

// @route   GET api/films/test
// @desc    Tests work route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Films" }));

// @route   GET api/films
// @desc    Get films
// @access  Public
router.get("/", (req, res) => {
	request(options)
		.then(function(response) {
			// Success
			return res.send(response);
		})
		.catch(function(err) {
			// Error
			console.log(err);
		});
});

module.exports = router;
