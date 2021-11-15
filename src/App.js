import React, { Component } from "react";
import "./App.css";
import Circle from "./components/Circle";

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Speedtest</h1>
				<h3>
					Your score: <span>0</span>
				</h3>
				<div className="circle-container">
					<Circle />
					<Circle />
					<Circle />
					<Circle />
				</div>
				<button>Start</button>
				<button>Stop</button>
			</div>
		);
	}
}
