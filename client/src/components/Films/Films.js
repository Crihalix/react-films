import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFilms } from "../../actions/filmsActions";

class Films extends Component {
	componentDidMount() {
		this.props.getFilms();
	}

	render() {
		// @TODO: Why here films put into propery films?
		const { films } = this.props.films;
		console.log(this.props);
		let filmsList;
		console.warn(films);
		if (films) {
			filmsList = films.map(item => (
				<li className="film" key={item.id}>
					{item.name}
				</li>
			));
		} else {
			filmsList = "epty";
		}

		return (
			<div className="feed">
				<div className="container">
					<div className="row">
						{/* <h1>{this.state.title}</h1> */}
						<ul>{filmsList}</ul>
					</div>
				</div>
			</div>
		);
	}
}

Films.propTypes = {
	getFilms: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	films: state.films
});

export default connect(
	mapStateToProps,
	{ getFilms }
)(Films);
