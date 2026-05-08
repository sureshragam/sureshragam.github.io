import { useEffect, useState } from "react";

import classes from "./ScrollProgress.module.css";

const ScrollProgress = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const content = document.querySelector(".content");

		if (!content) return;

		const handleScroll = () => {
			const scrollTop = content.scrollTop;

			const scrollHeight = content.scrollHeight - content.clientHeight;

			const progressValue = (scrollTop / scrollHeight) * 100;

			setProgress(progressValue);
		};

		content.addEventListener("scroll", handleScroll);

		return () => {
			content.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className={classes.progressContainer}>
			<div
				className={classes.progressBar}
				style={{
					width: `${progress}%`,
				}}
			></div>
		</div>
	);
};

export default ScrollProgress;
