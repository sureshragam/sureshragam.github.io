import React from "react";
import aboutImage from "../../assets/images/about_cartoon.webp";
import classes from "./About.module.css";
import DOMPurify from "dompurify";
import { useSelector } from "react-redux";
import { RootState } from "../../store/appStore";
import { motion } from "framer-motion";

const About = () => {
	const { data } = useSelector((state: RootState) => state.data);
	const staticData = data?.about;

	return (
		<div id="about" className={`${classes.aboutContainer} scrollSection`}>
			{/* LEFT IMAGE SECTION */}
			<motion.div
				className={classes.col1}
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{
					duration: 0.8,
					ease: "easeOut",
				}}
				viewport={{ once: false, amount: 0.3 }}
			>
				<img src={aboutImage} alt="About Suresh Ragam" />
			</motion.div>

			{/* RIGHT TEXT SECTION */}
			<motion.div
				className={classes.col2}
				initial={{ opacity: 0, x: 100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{
					duration: 0.8,
					delay: 0.2,
					ease: "easeOut",
				}}
				viewport={{ once: false, amount: 0.3 }}
			>
				<h2>{staticData?.title}</h2>

				<p
					dangerouslySetInnerHTML={{
						__html: DOMPurify.sanitize(
							staticData?.description.replaceAll(/\n/g, "<br/>"),
						),
					}}
				></p>
			</motion.div>
		</div>
	);
};

export default About;
