// Header.tsx

import React, { useEffect, useState } from "react";

import classes from "./Header.module.css";

import { useSelector } from "react-redux";

import { RootState } from "../../store/appStore";

import { Link } from "react-router-dom";

import { HashLink } from "react-router-hash-link";

import { motion } from "framer-motion";

const Header = () => {
	const { data } = useSelector((state: RootState) => state.data);

	const staticData = data?.navigation;

	const isAdmin = data?.isAdmin === "true";

	const [activeSection, setActiveSection] = useState("home");

	/* ACTIVE SECTION */
	useEffect(() => {
		const sections = document.querySelectorAll("section[id], div[id]");

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				threshold: 0.4,
			},
		);

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	}, []);

	return (
		<motion.header
			className={classes.header}
			initial={{
				y: -80,
				opacity: 0,
			}}
			animate={{
				y: 0,
				opacity: 1,
			}}
			transition={{
				duration: 0.8,
			}}
		>
			{/* LOGO */}
			<h1 className={classes.title}>
				Portfo
				<span>lio</span>
			</h1>

			{/* NAVIGATION */}
			<ul className={classes.navigation}>
				{staticData?.map((item: any) => (
					<li key={item.name} className={classes.navItem}>
						<HashLink
							smooth
							to={`/#${item.url}`}
							className={`${classes.navLink} ${
								activeSection === item.url ? classes.active : ""
							}`}
						>
							{item.name}
						</HashLink>
					</li>
				))}

				{/* ADMIN */}
				{isAdmin && (
					<li className={classes.navItem}>
						<Link to="/admin" className={classes.navLink}>
							Admin
						</Link>
					</li>
				)}
			</ul>

			{/* COMMAND HINT */}
			<div className={classes.commandHint}>
				{navigator.userAgent.includes("Mac") ? "⌘ + K" : "Ctrl + K"}
			</div>
		</motion.header>
	);
};

export default Header;
