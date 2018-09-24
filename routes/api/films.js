const express = require("express");
const router = express.Router();
var request = require("request-promise");

const encodedValue = encodeURIComponent("da81ce5f4da27e5924f23ce7ef86df57");
var options = {
	method: "GET",
	uri: `https://api.themoviedb.org/3/search/keyword?api_key=${encodedValue}&query=Red&page=1`
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
			console.log(response);
			return res.send(response);
		})
		.catch(function(err) {
			// Error
			console.log(err);
		});
});

module.exports = router;
