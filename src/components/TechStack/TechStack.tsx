// src/components/TechStack/TechStack.tsx

import React from "react";
import classes from "./TechStack.module.css";
import { motion } from "framer-motion";

const techData = [
	{
		title: "Frontend",
		technologies: [
			"React",
			"Redux Toolkit",
			"JavaScript",
			"TypeScript",
			"HTML",
			"CSS",
			"MUI",
		],
	},
	{
		title: "Backend",
		technologies: ["Java", "Spring Boot", "Node.js", "MongoDB", "MySQL"],
	},
	{
		title: "Cloud & Tools",
		technologies: ["AWS", "Azure", "Git", "GitHub", "Docker", "Postman"],
	},
	{
		title: "Currently Learning",
		technologies: [
			"System Design",
			"Microservices",
			"AI Assistant Architecture",
			"DSA",
		],
	},
];

const TechStack = () => {
	return (
		<section id="techstack" className={`${classes.techSection} scrollSection`}>
			<div className={classes.container}>
				<motion.h2
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: false, amount: 0.2 }}
					className={classes.title}
				>
					Tech Stack
				</motion.h2>

				<div className={classes.grid}>
					{techData.map((section, index) => {
						return (
							<motion.div
								key={section.title}
								className={classes.card}
								initial={{
									opacity: 0,
									y: 50,
								}}
								whileInView={{
									opacity: 1,
									y: 0,
								}}
								transition={{
									duration: 0.6,
									delay: index * 0.15,
								}}
								viewport={{
									once: false,
									amount: 0.2,
								}}
							>
								<h3>{section.title}</h3>

								<div className={classes.tags}>
									{section.technologies.map((tech) => {
										return <span key={tech}>{tech}</span>;
									})}
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default TechStack;
