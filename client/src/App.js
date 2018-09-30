import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Films from "./components/Films/Films";
import Navbar from "./components/Layout/Navbar";
import MainPage from "./components/Layout/MainPage";
import FilmDetailed from "./components/Films/FilmDetailed";
import "./App.css";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<header className="App-header">
							<Navbar />
						</header>
						<Route exact path="/" component={MainPage} />
						<Route exact path="/films" component={Films} />
						<Route exact path="/films/:id" component={FilmDetailed} />
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
