// src/components/Metrics/Metrics.tsx

import React from "react";
import classes from "./Metrics.module.css";
import { motion } from "framer-motion";

const metricsData = [
	{
		number: "3+",
		label: "Years Experience",
	},
	{
		number: "10+",
		label: "Projects Built",
	},
	{
		number: "1000/1000",
		label: "AWS Score",
	},
	{
		number: "Frontend",
		label: "Specialist",
	},
];

const Metrics = () => {
	return (
		<section id="metrics" className={`${classes.metricsSection} scrollSection`}>
			<div className={classes.container}>
				<div className={classes.grid}>
					{metricsData.map((item, index) => {
						return (
							<motion.div
								key={item.label}
								className={classes.card}
								initial={{
									opacity: 0,
									y: 60,
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
								<h2>{item.number}</h2>

								<p>{item.label}</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Metrics;
