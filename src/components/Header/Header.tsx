import React from "react";
import classes from "./Header.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/appStore";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
/// HashLink is used to create links with hash anchors (like /#section) inside a React Router app.
// It ensures smooth scrolling to specific sections on the same or different routes
// without reloading the page, unlike a normal <a href="#section"> link.

const Header = () => {
	const { data } = useSelector((state: RootState) => state.data);
	const staticData = data?.navigation;
	const isAdmin = data?.isAdmin === "true";

	return (
		<header className={classes.header}>
			<h1 className={classes.title}>
				Portfo<span>lio</span>
			</h1>
			<ul className={classes.navigation}>
				{staticData?.map((item: any) => (
					<li key={item.name} className={classes.navItem}>
						<HashLink smooth to={`/#${item.url}`} className={classes.navLink}>
							{item.name}
						</HashLink>
					</li>
				))}
				{isAdmin && (
					<li className={classes.navItem}>
						<Link to="/admin" className={classes.navLink}>
							{" "}
							Admin
						</Link>
					</li>
				)}
			</ul>
		</header>
	);
};

export default Header;
