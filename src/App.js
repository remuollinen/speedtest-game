import React, { Component } from "react";
import "./App.css";
import Circle from "./components/Circle";
import { circles } from "./circles";
import GameOver from "./components/GameOver";

const getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default class App extends Component {
	state = {
		score: 0,
		current: 0,
		showGameOver: false,
		pace: 1500,
	};

	timer = undefined;

	clickHandler = (id) => {
		if (this.state.current !== id) {
			this.stopHandler();
			return;
		}

		this.setState({
			score: this.state.score + 10,
		});
	};

	nextCircle = () => {
		let nextActive;

		do {
			nextActive = getRandomInt(1, 4);
		} while (nextActive === this.state.current);

		this.setState({
			current: nextActive,
			pace: this.state.pace * 0.95,
		});
		this.timer = setTimeout(this.nextCircle, this.state.pace);
	};

	startHandler = () => {
		this.nextCircle();
	};

	stopHandler = () => {
		clearTimeout(this.timer);
		this.setState({ showGameOver: true, current: 0 });
	};

	closeHandler = () => {
		this.setState({ score: 0, showGameOver: false, pace: 1500 });
	};

	render() {
		return (
			<div>
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
								clickHandler={() => this.clickHandler(circle.id)}
								active={this.state.current === circle.id}
							/>
						);
					})}
				</div>
				<button onClick={this.startHandler}>Start</button>
				<button onClick={this.stopHandler}>Stop</button>
				{this.state.showGameOver && (
					<GameOver
						score={this.state.score}
						gameOver={this.state.showGameOver}
						close={this.closeHandler}
					/>
				)}
			</div>
		);
	}
}
