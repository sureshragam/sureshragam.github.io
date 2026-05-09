// src/components/Metrics/Metrics.tsx
import classes from "./Metrics.module.css";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const metricsData = [
	{
		number: 4,
		suffix: "+",
		label: "Years Experience",
	},
	{
		number: 10,
		suffix: "+",
		label: "Projects Built",
	},
	{
		number: 1000,
		suffix: "/1000",
		label: "AWS Score",
	},
	{
		number: 100,
		suffix: "%",
		label: "React Expertise",
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
									y: 30,
								}}
								whileInView={{
									opacity: 1,
									y: 0,
								}}
								transition={{
									duration: 0.6,
									delay: index * 0.08,
								}}
								viewport={{
									once: true,
									amount: 0.2,
								}}
							>
								<h2>
									<CountUp
										end={item.number}
										duration={2}
										enableScrollSpy
										scrollSpyOnce
									/>

									{item.suffix}
								</h2>

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
