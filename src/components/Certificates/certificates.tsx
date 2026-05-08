import React from "react";
import classes from "./certificates.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/appStore";
import { motion } from "framer-motion";

const Certificates: React.FC = () => {
	const { data } = useSelector((state: RootState) => state.data);
	const staticData = data?.certificates;

	return (
		<motion.div
			id="certificates"
			className={`${classes.certificatesContainer} scrollSection`}
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			viewport={{ amount: 0.2 }}
		>
			<h2 className={classes.title}>{staticData?.title}</h2>

			<ul className={classes.certificates}>
				{staticData?.certificates.map((eachCertificate, index) => {
					return (
						<motion.li
							key={eachCertificate.name}
							className={classes.certificate}
							initial={{ opacity: 0, y: 60 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.6,
								delay: index * 0.2,
							}}
							viewport={{ amount: 0.2 }}
							whileHover={{
								y: -10,
								scale: 1.03,
							}}
						>
							<img src={eachCertificate.url} alt={eachCertificate.alt} />
						</motion.li>
					);
				})}
			</ul>
		</motion.div>
	);
};

export default Certificates;
