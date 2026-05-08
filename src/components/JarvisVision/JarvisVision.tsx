// src/components/JarvisVision/JarvisVision.tsx

import React from "react";
import classes from "./JarvisVision.module.css";
import { motion } from "framer-motion";

const JarvisVision = () => {
	return (
		<section id="jarvis" className={`${classes.jarvisSection} scrollSection`}>
			<motion.div
				className={classes.container}
				initial={{
					opacity: 0,
					scale: 0.92,
				}}
				whileInView={{
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 0.7,
				}}
				viewport={{
					once: false,
					amount: 0.2,
				}}
			>
				{/* GLOW */}
				<div className={classes.glow}></div>

				{/* SMALL LABEL */}
				<p className={classes.label}>FUTURE VISION</p>

				{/* TITLE */}
				<h2>
					Building My Own
					<span> Jarvis</span>
				</h2>

				{/* DESCRIPTION */}
				<p className={classes.description}>
					My long-term vision is to build a personal AI assistant ecosystem
					inspired by Jarvis from Iron Man — combining AI, automation, real-time
					systems, voice interaction, cloud infrastructure and futuristic
					interfaces into one intelligent platform.
				</p>

				{/* TECH PILLS */}
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

				{/* QUOTE */}
				<div className={classes.quoteBox}>
					<p>“Technology should feel alive, intelligent and personal.”</p>
				</div>
			</motion.div>
		</section>
	);
};

export default JarvisVision;
