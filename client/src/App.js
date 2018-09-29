import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Films from "./components/Films/Films";
import "./App.css";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<header className="App-header">
						<h1 className="App-title">Welcome to Films library</h1>
					</header>
					<Router>
						<Route path="/films" component={Films} />
					</Router>
				</div>
			</Provider>
		);
	}
}

export default App;
