// src/components/Loader/Loader.tsx

import React, { useEffect, useState } from "react";
import classes from "./Loader.module.css";
import { motion, AnimatePresence } from "framer-motion";

type LoaderProps = {
	children: React.ReactNode;
};

const Loader = ({ children }: LoaderProps) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2200);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<AnimatePresence>
				{loading && (
					<motion.div
						className={classes.loaderContainer}
						initial={{ opacity: 1 }}
						exit={{
							opacity: 0,
							scale: 1.05,
						}}
						transition={{
							duration: 0.6,
						}}
					>
						<motion.div
							initial={{
								scale: 0.8,
								opacity: 0,
							}}
							animate={{
								scale: 1,
								opacity: 1,
							}}
							transition={{
								duration: 0.8,
							}}
							className={classes.logoContainer}
						>
							<h1 className={classes.logo}>
								S<span>R</span>
							</h1>

							<div className={classes.line}></div>

							<p>Building modern web experiences</p>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{!loading && children}
		</>
	);
};

export default Loader;
