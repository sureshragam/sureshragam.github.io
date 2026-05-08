// src/components/Experience/Experience.tsx

import React from "react";

import { motion } from "framer-motion";

import classes from "./Experience.module.css";

import { experience } from "../../utils/dummyData";

const Experience = () => {
	return (
		<section
			id="experience"
			className={`${classes.experienceSection} scrollSection`}
		>
			<div className={classes.container}>
				<motion.h2
					initial={{
						opacity: 0,
						y: 30,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						duration: 0.5,
					}}
					viewport={{
						once: true,
						amount: 0.2,
					}}
					className={classes.title}
				>
					Experience
				</motion.h2>

				<div className={classes.timeline}>
					{experience.map((item, index) => {
						return (
							<motion.div
								key={item.id}
								className={classes.timelineItem}
								initial={{
									opacity: 0,

									x: index % 2 === 0 ? -40 : 40,
								}}
								whileInView={{
									opacity: 1,
									x: 0,
								}}
								transition={{
									duration: 0.55,

									delay: index * 0.08,

									ease: "easeOut",
								}}
								viewport={{
									once: true,
									amount: 0.2,
								}}
							>
								<div className={classes.dot}></div>

								<div className={classes.card}>
									<p className={classes.period}>{item.period}</p>

									<h3>{item.company}</h3>

									<h4>{item.designation}</h4>

									<p className={classes.role}>{item.role}</p>

									{/* RESPONSIBILITIES */}

									<ul>
										{item.responsibilities.map((point: string) => (
											<li key={point}>{point}</li>
										))}
									</ul>

									{/* TECH STACK */}

									<div className={classes.techStack}>
										{item.techStack.map((tech: string) => (
											<span key={tech}>{tech}</span>
										))}
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default React.memo(Experience);
