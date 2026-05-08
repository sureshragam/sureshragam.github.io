// src/components/Services/Services.tsx

import React from "react";
import classes from "./Services.module.css";
import { motion } from "framer-motion";

import { FaReact, FaServer, FaCloud, FaMobileAlt } from "react-icons/fa";

const servicesData = [
	{
		title: "Frontend Development",
		description:
			"Building scalable, responsive and modern React applications with premium UI/UX experiences.",
		icon: <FaReact />,
	},
	{
		title: "Backend Development",
		description:
			"Creating secure REST APIs and backend services using Java, Spring Boot and Node.js.",
		icon: <FaServer />,
	},
	{
		title: "Cloud & Deployment",
		description:
			"Deploying scalable applications using AWS, Azure and modern DevOps workflows.",
		icon: <FaCloud />,
	},
	{
		title: "Mobile App Development",
		description:
			"Developing cross-platform mobile applications using React Native.",
		icon: <FaMobileAlt />,
	},
];

const Services = () => {
	return (
		<section
			id="services"
			className={`${classes.servicesSection} scrollSection`}
		>
			<div className={classes.container}>
				<motion.h2
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: false, amount: 0.2 }}
					className={classes.title}
				>
					What I Do
				</motion.h2>

				<div className={classes.grid}>
					{servicesData.map((service, index) => {
						return (
							<motion.div
								key={service.title}
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
								<div className={classes.icon}>{service.icon}</div>

								<h3>{service.title}</h3>

								<p>{service.description}</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Services;
