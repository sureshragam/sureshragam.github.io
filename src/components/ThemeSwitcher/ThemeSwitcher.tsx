// src/components/ThemeSwitcher/ThemeSwitcher.tsx

import React, { useEffect, useState } from "react";
import classes from "./ThemeSwitcher.module.css";
import { FaMoon, FaPalette } from "react-icons/fa";

const themes = {
	default: {
		"--primaryColor": "rgb(2 171 130)",
		"--backgroundColor": "#050505",
		"--textColor": "#ffffff",
	},

	blue: {
		"--primaryColor": "#4da3ff",
		"--backgroundColor": "#050816",
		"--textColor": "#ffffff",
	},

	purple: {
		"--primaryColor": "#9b5cff",
		"--backgroundColor": "#0b0613",
		"--textColor": "#ffffff",
	},

	red: {
		"--primaryColor": "#ff4d6d",
		"--backgroundColor": "#120509",
		"--textColor": "#ffffff",
	},
};

const ThemeSwitcher = () => {
	const [open, setOpen] = useState(false);

	const applyTheme = (theme: keyof typeof themes) => {
		const root = document.documentElement;

		const selectedTheme = themes[theme];

		Object.entries(selectedTheme).forEach(([key, value]) => {
			root.style.setProperty(key, value);
		});

		localStorage.setItem("portfolio-theme", theme);
	};

	useEffect(() => {
		const savedTheme = localStorage.getItem(
			"portfolio-theme",
		) as keyof typeof themes;

		if (savedTheme && themes[savedTheme]) {
			applyTheme(savedTheme);
		}
	}, []);

	return (
		<div className={classes.wrapper}>
			<button
				className={classes.toggleButton}
				onClick={() => setOpen((prev) => !prev)}
			>
				<FaPalette />
			</button>

			<div className={`${classes.panel} ${open ? classes.open : ""}`}>
				<button onClick={() => applyTheme("default")}>
					<FaMoon />
					Cyber Green
				</button>

				<button
					onClick={() => {
						applyTheme("blue");
						setOpen(false);
					}}
				>
					Blue Neon
				</button>

				<button
					onClick={() => {
						applyTheme("purple");
						setOpen(false);
					}}
				>
					Purple Future
				</button>

				<button
					onClick={() => {
						applyTheme("red");
						setOpen(false);
					}}
				>
					Red Energy
				</button>
			</div>
		</div>
	);
};

export default ThemeSwitcher;
