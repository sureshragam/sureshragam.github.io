// src/components/GithubStats/GithubStats.tsx

import React from "react";
import classes from "./GithubStats.module.css";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const GithubStats = () => {
	return (
		<section id="github" className={`${classes.githubSection} scrollSection`}>
			<div className={classes.container}>
				<motion.h2
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: false, amount: 0.2 }}
					className={classes.title}
				>
					GitHub Activity
				</motion.h2>

				<motion.div
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
						duration: 0.7,
					}}
					viewport={{
						once: false,
						amount: 0.2,
					}}
				>
					<div className={classes.top}>
						<FaGithub className={classes.icon} />

						<div>
							<h3>Suresh Ragam</h3>

							<p>Frontend Developer • React • Spring Boot</p>
						</div>
					</div>

					<div className={classes.statsGrid}>
						<div>
							<h2>50+</h2>
							<p>Repositories</p>
						</div>

						<div>
							<h2>500+</h2>
							<p>Commits</p>
						</div>

						<div>
							<h2>10+</h2>
							<p>Projects</p>
						</div>

						<div>
							<h2>AWS</h2>
							<p>Certified</p>
						</div>
					</div>

					<div className={classes.graphContainer}>
						<img
							src="https://ghchart.rshah.org/02ab82/sureshragam"
							alt="GitHub Contributions"
						/>
					</div>

					<a
						href="https://github.com/sureshragam"
						target="_blank"
						rel="noreferrer"
						className={classes.button}
					>
						View GitHub Profile
					</a>
				</motion.div>
			</div>
		</section>
	);
};

export default GithubStats;
