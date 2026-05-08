// src/components/BackgroundGrid/BackgroundGrid.tsx

import React from "react";
import classes from "./BackgroundGrid.module.css";

const BackgroundGrid = () => {
	return (
		<div className={classes.gridContainer}>
			<div className={classes.grid}></div>
		</div>
	);
};

export default BackgroundGrid;
