import React from "react";
import "./Circle.css";

const Circle = (props) => {
	return (
		<div
			className={`circle ${props.color}`}
			onClick={() => props.clickHandler(props.id)}
		>
			{props.id}
		</div>
	);
};

export default Circle;
