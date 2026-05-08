// src/components/Testimonials/Testimonials.tsx

import React from "react";
import classes from "./Testimonials.module.css";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
	{
		name: "Team Collaboration",
		role: "Agile Team Experience",
		message:
			"Suresh consistently delivered clean and scalable frontend solutions while collaborating effectively with cross-functional teams.",
	},
	{
		name: "Frontend Development",
		role: "React Development",
		message:
			"Strong understanding of React architecture, reusable components and modern frontend engineering practices.",
	},
	{
		name: "Problem Solving",
		role: "Engineering Mindset",
		message:
			"Quick learner with excellent debugging skills and a strong focus on improving user experience and application performance.",
	},
];

const Testimonials = () => {
	return (
		<section
			id="testimonials"
			className={`${classes.testimonialSection} scrollSection`}
		>
			<div className={classes.container}>
				<motion.h2
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: false, amount: 0.2 }}
					className={classes.title}
				>
					Professional Highlights
				</motion.h2>

				<div className={classes.grid}>
					{testimonials.map((item, index) => {
						return (
							<motion.div
								key={item.name}
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
								<div className={classes.quote}>
									<FaQuoteLeft />
								</div>

								<p className={classes.message}>{item.message}</p>

								<div className={classes.footer}>
									<h3>{item.name}</h3>

									<span>{item.role}</span>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
