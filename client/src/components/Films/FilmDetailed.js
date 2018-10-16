import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFilm } from "../../actions/filmsActions";

class FilmDetailed extends Component {
	componentDidMount() {
		if (this.props.match.params.id) {
			this.props.getFilm(this.props.match.params.id);
		}
	}

	render() {
		const { film } = this.props.film;
		let filmContent;
		console.log(film);
		if (film) {
			filmContent = (
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<img
								className="img-fluid"
								src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
								alt={film.title}
							/>
						</div>
						<div className="col-md-6 text-left">
							<h1>{film.title}</h1>
							<div className="release small">{film.release_date}</div>
						</div>
					</div>
				</div>
			);
		} else {
			filmContent = <h1>Ooops, looks like we have some error!</h1>;
		}
		return <div className="film-detalied">{filmContent}</div>;
	}
}

FilmDetailed.propTypes = {
	getFilm: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	film: state.film
});

export default connect(
	mapStateToProps,
	{ getFilm }
)(FilmDetailed);
