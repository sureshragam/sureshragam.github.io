import React from "react";
import home from "../../assets/images/portfolio_home.png";
import background from "../../assets/images/portfolio_background.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import classes from "./Home.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/appStore";
import RoleGenerator from "../../component-lib/RoleGenerator.tsx";
import { getLinkFromLinks } from "../../utils/helperFunctions.ts";
import { Link } from "react-router-dom";

const Home = () => {
	const { data } = useSelector((state: RootState) => state.data);
	const staticData = data?.home;
	const links = data?.externalLinks;
	const buttonStaticData = data?.buttons;

	const handleContact = () => {
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			event: "contact_click",
			event_category: "engagement",
			event_label: "Contact Button",
		});
	};

	return (
		<div id="home" className={`${classes.homeContainer} scrollSection`}>
			<div className={classes.col1}>
				<p>{staticData?.miniTitle}</p>
				<p style={{ fontSize: "clamp(1rem, 4rem, 10vw)" }}>
					{staticData?.title.split(" ")[0]}
					<span style={{ color: "var(--primaryColor)" }}>
						{" "}
						{staticData?.title.split(" ")[1]}
					</span>
				</p>
				<RoleGenerator roles={staticData?.roles} />
				<div className={classes.iconsContainer}>
					<a
						aria-label={`Naviagte to - ${links ? links[1]?.name : "Github"}`}
						href={getLinkFromLinks(links, links ? links[1]?.name : "")}
						target="_blank"
						rel="noreferrer"
					>
						<FaGithub className={classes.icon} />
					</a>
					<a
						aria-label={`Naviagte to - ${links ? links[0]?.name : "LinkedIn"}`}
						href={getLinkFromLinks(links, links ? links[0]?.name : "")}
						target="_blank"
						rel="noreferrer"
					>
						<FaLinkedin className={classes.icon} />
					</a>
				</div>
				<div className={classes.homeButtonContainer}>
					<Link role="button" id="resume" to="/resume_preview">
						{buttonStaticData?.resumeBtn}
					</Link>
					<a role="button" href="#contact" onClick={handleContact}>
						{buttonStaticData?.contactBtn}
					</a>
				</div>
			</div>
			<div className={classes.col2}>
				<img src={background} alt="background solid" />
				<img src={home} alt="profile" />
			</div>
		</div>
	);
};

export default Home;
