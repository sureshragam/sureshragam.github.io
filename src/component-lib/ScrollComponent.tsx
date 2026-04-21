import React from "react";
import classes from "./ScrollComponent.module.css";
import { IconType } from "react-icons";

// 👉 Import icon packs
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

// 👉 Merge icons
const Icons = {
	...FaIcons,
	...SiIcons,
};

interface SkillData {
	_id?: string; // Mongo id
	name?: string;
	icon?: string;
}

interface ScrollComponentProps {
	data: SkillData[];
	animationDuration: number;
}

const ScrollComponent: React.FC<ScrollComponentProps> = ({
	data,
	animationDuration,
}) => {
	// 👉 duplicate data for infinite loop
	const scrollData = [...data, ...data];

	return (
		<div className={classes.skillScroll}>
			<div
				className={classes.track}
				style={{ animationDuration: `${animationDuration}s` }}
			>
				{scrollData.map((eachSkill, index) => {
					const IconComponent = eachSkill.icon
						? (Icons as Record<string, IconType>)[eachSkill.icon]
						: null;

					return (
						<div key={eachSkill._id || index} className={classes.skill}>
							{IconComponent && <IconComponent size={20} />}
							<span>{eachSkill.name}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ScrollComponent;
