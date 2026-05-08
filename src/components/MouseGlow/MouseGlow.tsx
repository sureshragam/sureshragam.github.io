// src/components/MouseGlow/MouseGlow.tsx

import React, { useEffect, useState } from "react";
import classes from "./MouseGlow.module.css";

const MouseGlow = () => {
	const [position, setPosition] = useState({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setPosition({
				x: event.clientX,
				y: event.clientY,
			});
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div
			className={classes.glow}
			style={{
				left: `${position.x}px`,
				top: `${position.y}px`,
			}}
		/>
	);
};

export default MouseGlow;
