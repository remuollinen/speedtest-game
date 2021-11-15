import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Speedtest</h1>
				<h3>
					Your score <span>0</span>
				</h3>
				<button>Start</button>
				<button>Stop</button>
			</div>
		);
	}
}
