import React, { Component } from "react";
import "./App.css";
import Circle from "./components/Circle";
import { circles } from "./circles";

export default class App extends Component {
	state = {
		score: 0,
		current: 0,
	};

	clickHandler = (number) => {
		this.setState({
			score: this.state.score + 10,
		});
		console.log(number);
	};

	render() {
		return (
			<div className="App">
				<h1>Speedtest</h1>
				<h3>
					Your score: <span>{this.state.score}</span>
				</h3>
				<div className="circle-container">
					{circles.map((circle) => {
						return (
							<Circle
								key={circle.id}
								id={circle.id}
								color={circle.color}
								clickHandler={this.clickHandler}
							/>
						);
					})}
				</div>
				<button>Start</button>
				<button>Stop</button>
			</div>
		);
	}
}
