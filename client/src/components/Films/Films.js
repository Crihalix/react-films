import React, { Component } from "react";
import axios from "axios";

class Films extends Component {
	constructor() {
		super();

		this.state = { title: "Films list", films: null };
	}

	componentDidMount() {
		axios
			.get("/api/films")
			.then(res => {
				console.log(res.data.results);
				this.setState({ films: res.data.results });
			})
			.catch(err => console.log(err.data));
	}

	render() {
		let postContent;
		if (!this.state.films) {
			postContent = "epty";
		} else {
			postContent = this.state.films.map(item => (
				<li className="film" key={item.id}>
					{item.name}
				</li>
			));
		}

		return (
			<div className="feed">
				<div className="container">
					<div className="row">
						<h1>{this.state.title}</h1>
						<ul>{postContent}</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Films;
