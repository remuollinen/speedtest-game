import React from "react";

const Circle = (props) => {
	return (
		<div
			className={`circle ${props.color} needle-cursor ${
				props.active ? "active-circle" : ""
			}`}
			onClick={() => props.clickHandler(props.id)}
		>
			{props.id}
		</div>
	);
};

export default Circle;
