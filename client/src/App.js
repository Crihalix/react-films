import React, { Component } from "react";

import Films from "./components/Films/Films";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to Films library</h1>
				</header>
				<Films />
			</div>
		);
	}
}

export default App;
