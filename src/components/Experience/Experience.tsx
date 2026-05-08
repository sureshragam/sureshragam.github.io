// src/components/Experience/Experience.tsx

import React from "react";
import classes from "./Experience.module.css";
import { motion } from "framer-motion";
import { experience } from "../../utils/dummyData";

const Experience = () => {
	return (
		<section
			id="experience"
			className={`${classes.experienceSection} scrollSection`}
		>
			<div className={classes.container}>
				<motion.h2
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: false, amount: 0.2 }}
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
									x: index % 2 === 0 ? -80 : 80,
								}}
								whileInView={{
									opacity: 1,
									x: 0,
								}}
								transition={{ duration: 0.7 }}
								viewport={{
									once: false,
									amount: 0.2,
								}}
							>
								<div className={classes.dot}></div>

								<div className={classes.card}>
									<p className={classes.period}>{item.period}</p>

									<h3>{item.company}</h3>

									<h4>{item.designation}</h4>

									<p className={classes.role}>{item.role}</p>

									<ul>
										<li>
											Built scalable React UI components and reusable modules.
										</li>

										<li>
											Worked on file upload, download and update features.
										</li>

										<li>
											Implemented notifications and portal functionalities.
										</li>

										<li>
											Collaborated in Agile teams and participated in sprint
											planning.
										</li>
									</ul>

									<div className={classes.techStack}>
										<span>React</span>
										<span>Redux</span>
										<span>JavaScript</span>
										<span>MUI</span>
										<span>Azure</span>
										<span>Git</span>
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

export default Experience;
