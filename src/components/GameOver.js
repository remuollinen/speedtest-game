import React from "react";

const GameOver = (props) => {
	return (
		<div className={`game-over-wrapper ${props.gameOver ? "active" : ""}`}>
			<div className="game-over-content">
				<div className="popup-header">
					<h3>Game Over 😩</h3>
					<button
						className="close-btn"
						onClick={() => window.location.reload()}
					>
						X
					</button>
				</div>
				<h3>
					Your score: <span>{props.score}</span>
				</h3>
			</div>
		</div>
	);
};

export default GameOver;
