import React, { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa";

import classes from "./GithubStats.module.css";

type Repo = {
	stargazers_count: number;
	language: string;
};

const GithubStats = () => {
	const [repos, setRepos] = useState<Repo[]>([]);

	useEffect(() => {
		const fetchRepos = async () => {
			try {
				const response = await fetch(
					"https://api.github.com/users/sureshragam/repos?per_page=100",
				);

				const data = await response.json();

				setRepos(data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchRepos();
	}, []);

	const stats = useMemo(() => {
		const totalRepos = repos.length;

		const languages = new Set(
			repos.map((repo) => repo.language).filter(Boolean),
		);

		return [
			{
				label: "Repositories",
				value: totalRepos,
			},
			{
				label: "Languages",
				value: languages.size,
			},
			{
				label: "Projects",
				value: "10+",
			},
			{
				label: "Experience",
				value: "3+ Years",
			},
		];
	}, [repos]);

	return (
		<section id="github" className={`${classes.githubSection} scrollSection`}>
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
					GitHub Activity
				</motion.h2>

				<motion.div
					className={classes.card}
					initial={{
						opacity: 0,
						y: 40,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						duration: 0.6,
					}}
					viewport={{
						once: true,
						amount: 0.2,
					}}
				>
					<div className={classes.top}>
						<FaGithub className={classes.icon} />

						<div>
							<h3>Suresh Ragam</h3>

							<p>Frontend Developer • React • Java • AWS</p>
						</div>
					</div>

					<div className={classes.statsGrid}>
						{stats.map((stat, index) => (
							<div key={index}>
								<h2>{stat.value}</h2>

								<p>{stat.label}</p>
							</div>
						))}
					</div>

					<div className={classes.graphContainer}>
						<img
							src="https://ghchart.rshah.org/02ab82/sureshragam"
							alt="GitHub Contributions"
							loading="lazy"
							decoding="async"
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

export default React.memo(GithubStats);
