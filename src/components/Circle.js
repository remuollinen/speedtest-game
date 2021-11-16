import React from "react";

const Circle = (props) => {
	return (
		<div
			style={{ pointerEvents: props.disabled ? "auto" : "none" }}
			className={`circle ${props.color} needle-cursor ${
				props.active ? "active-circle" : ""
			}`}
			onClick={props.clickHandler}
		></div>
	);
};

export default Circle;
