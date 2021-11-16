import React, { Component } from "react";
import "./App.css";
import Circle from "./components/Circle";
import { circles } from "./circles";
import GameOver from "./components/GameOver";

import gameMusic from "./assets/sounds/gameMusic.wav";
import gameOverSound from "./assets/sounds/GameOver.wav";
import clickSound from "./assets/sounds/click.wav";

let gameSounds = new Audio(gameMusic); // declare variables to store audio
let gameover = new Audio(gameOverSound); // declare variables to store audio
let click = new Audio(clickSound); // declare variables to store audio

const getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default class App extends Component {
	state = {
		score: 0,
		current: 0,
		showGameOver: false,
		pace: 1500,
		rounds: 0,
		gameStarted: false,
	};

	timer = undefined;

	clickHandler = (id) => {
		click.play();
		if (this.state.current !== id) {
			this.stopHandler();
			return;
		}

		this.setState({
			score: this.state.score + 10,
			rounds: 0,
		});
	};

	nextCircle = () => {
		if (this.state.rounds >= 5) {
			this.stopHandler();

			return;
		}

		let nextActive;

		do {
			nextActive = getRandomInt(1, 4);
		} while (nextActive === this.state.current);

		this.setState({
			current: nextActive,
			pace: this.state.pace * 0.95,
			rounds: this.state.rounds + 1,
		});
		this.timer = setTimeout(this.nextCircle, this.state.pace);
		console.log("round number", this.state.rounds);
	};

	startHandler = () => {
		gameSounds.play();
		this.nextCircle();
		this.setState({
			gameStarted: true,
		});
	};

	stopHandler = () => {
		gameSounds.pause();
		gameover.play();
		clearTimeout(this.timer);
		this.setState({
			showGameOver: true,
			current: 0,
			gameStarted: false,
		});
	};

	closeHandler = () => {
		this.setState({
			score: 0,
			showGameOver: false,
			pace: 1500,
			rounds: 0,
		});
	};

	render() {
		return (
			<div>
				<h1>Kill the Virus!</h1>
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
								disabled={this.state.gameStarted}
							/>
						);
					})}
				</div>
				<button disabled={this.state.gameStarted} onClick={this.startHandler}>
					Start
				</button>
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
