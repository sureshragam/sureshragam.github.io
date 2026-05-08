import React from "react";

import { motion } from "framer-motion";

import classes from "./JarvisVision.module.css";

const JarvisVision = () => {
	return (
		<section id="jarvis" className={`${classes.jarvisSection} scrollSection`}>
			<motion.div
				className={classes.container}
				initial={{
					opacity: 0,
					y: 40,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				viewport={{
					once: true,
					amount: 0.25,
				}}
				transition={{
					duration: 0.7,
					ease: "easeOut",
				}}
			>
				{/* Glow */}
				<div className={classes.glow} />

				{/* Label */}
				<p className={classes.label}>FUTURE VISION</p>

				{/* Title */}
				<h2>
					Building My Own
					<span> Jarvis</span>
				</h2>

				{/* Description */}
				<p className={classes.description}>
					My long-term vision is to build a personal AI assistant ecosystem
					inspired by Jarvis from Iron Man — combining AI, automation, real-time
					systems, voice interaction, cloud infrastructure and futuristic
					interfaces into one intelligent platform.
				</p>

				{/* Tech Stack */}
				<div className={classes.techStack}>
					<span>React</span>
					<span>Java</span>
					<span>Spring Boot</span>
					<span>AWS</span>
					<span>AI</span>
					<span>Automation</span>
					<span>Voice Systems</span>
					<span>Microservices</span>
				</div>

				{/* Quote */}
				<div className={classes.quoteBox}>
					<p>“Technology should feel alive, intelligent and personal.”</p>
				</div>
			</motion.div>
		</section>
	);
};

export default React.memo(JarvisVision);
