import classes from "./Footer.module.css";
import ScrollComponent from "../../component-lib/ScrollComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../store/appStore";

const Footer = () => {
	const skills = useSelector(
		(state: RootState) => state.data.data?.skills || [],
	);
	return (
		<footer className={`${classes.footer}`}>
			<ScrollComponent data={skills} animationDuration={30} />
		</footer>
	);
};

export default Footer;
