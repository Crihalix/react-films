import React, { Component } from "react";
import { Link } from "react-router-dom";
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
				<li className="col-md-3 film mb-3" key={item.id}>
					<div className="card">
						<Link to={`films/${item.id}`}>
							<img
								className="card-img-top"
								src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
								alt={item.title}
							/>
						</Link>
						<h3 className="card-title">
							<Link to={`films/${item.id}`}>{item.title}</Link>
						</h3>
						<p className="card-text text-truncate">{item.overview}</p>
					</div>
				</li>
			));
		} else {
			filmsList = "epty";
		}

		return (
			<div className="film">
				<div className="container">
					<h1 className="film-title">Films List</h1>
					<ul className="film-list list-unstyled row">{filmsList}</ul>
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
