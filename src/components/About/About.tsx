import React, { useMemo } from "react";
import aboutImage from "../../assets/images/about_cartoon.webp";
import classes from "./About.module.css";
import DOMPurify from "dompurify";
import { useSelector } from "react-redux";
import { RootState } from "../../store/appStore";
import { motion } from "framer-motion";

const About = () => {
	const aboutData = useSelector((state: RootState) => state.data.data?.about);

	const sanitizedDescription = useMemo(() => {
		if (!aboutData?.description) return "";

		return DOMPurify.sanitize(aboutData.description.replace(/\n/g, "<br />"));
	}, [aboutData?.description]);

	return (
		<section id="about" className={`${classes.aboutContainer} scrollSection`}>
			{/* LEFT IMAGE SECTION */}
			<motion.div
				className={classes.col1}
				initial={{ opacity: 0, x: -80 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{
					duration: 0.8,
					ease: "easeOut",
				}}
				viewport={{ once: true, amount: 0.3 }}
			>
				<img
					src={aboutImage}
					alt="Illustration representing Suresh Ragam"
					loading="lazy"
				/>
			</motion.div>

			{/* RIGHT TEXT SECTION */}
			<motion.div
				className={classes.col2}
				initial={{ opacity: 0, x: 80 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{
					duration: 0.8,
					delay: 0.2,
					ease: "easeOut",
				}}
				viewport={{ once: true, amount: 0.3 }}
			>
				<div className={classes.glassCard}>
					<h2>{aboutData?.title}</h2>

					<p
						dangerouslySetInnerHTML={{
							__html: sanitizedDescription,
						}}
					/>

					<div className={classes.techStack}>
						{["React", "TypeScript", "Redux", "MUI", "JavaScript", "CSS"].map(
							(tech, index) => (
								<motion.span
									key={tech}
									className={classes.techPill}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										delay: index * 0.1,
										duration: 0.4,
									}}
									viewport={{ once: true }}
								>
									{tech}
								</motion.span>
							),
						)}
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default React.memo(About);
