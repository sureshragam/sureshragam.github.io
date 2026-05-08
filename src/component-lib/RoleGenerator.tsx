import React from "react";
import { TypeAnimation } from "react-type-animation";

interface RoleGeneratorProps {
	roles?: string[];
}

const RoleGenerator: React.FC<RoleGeneratorProps> = ({ roles = [] }) => {
	const sequence: (string | number)[] = [];

	roles.forEach((role) => {
		sequence.push(role);
		sequence.push(2000);
	});

	// fallback if roles empty
	if (sequence.length === 0) {
		sequence.push("React Developer");
		sequence.push(2000);
	}

	return (
		<div
			style={{
				fontSize: "2rem",
				fontWeight: 600,
				color: "var(--primaryColor)",
				textShadow: "0 0 12px rgba(2,171,130,0.5)",
				minHeight: "50px",
			}}
		>
			<TypeAnimation
				sequence={sequence}
				speed={40}
				repeat={Infinity}
				wrapper="span"
				cursor={true}
			/>
		</div>
	);
};

export default RoleGenerator;
