// src/components/Availability/Availability.tsx

import React from "react";
import classes from "./Availability.module.css";
import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

const Availability = () => {
	return (
		<section
			id="availability"
			className={`${classes.availabilitySection} scrollSection`}
		>
			<motion.div
				className={classes.card}
				initial={{
					opacity: 0,
					scale: 0.9,
				}}
				whileInView={{
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 0.6,
				}}
				viewport={{
					once: false,
					amount: 0.2,
				}}
			>
				<div className={classes.status}>
					<FaCircle />

					<span>Available for opportunities</span>
				</div>

				<h2>Let’s Build Something Amazing</h2>

				<p>
					I’m currently open to frontend, full stack and cloud-based
					opportunities where I can build scalable and impactful digital
					experiences.
				</p>

				<div className={classes.actions}>
					<a role="button" href="#contact">
						Contact Me
					</a>

					<a role="button" href="/resume_preview">
						View Resume
					</a>
				</div>
			</motion.div>
		</section>
	);
};

export default Availability;
