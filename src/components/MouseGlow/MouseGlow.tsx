import React, { useEffect, useRef } from "react";

import classes from "./MouseGlow.module.css";

const MouseGlow = () => {
	const glowRef = useRef<HTMLDivElement | null>(null);

	const frameRef = useRef<number | null>(null);

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			if (frameRef.current) return;

			frameRef.current = requestAnimationFrame(() => {
				if (glowRef.current) {
					glowRef.current.style.transform = `
							translate3d(
								${event.clientX - 150}px,
								${event.clientY - 150}px,
								0
							)
						`;
				}

				frameRef.current = null;
			});
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);

			if (frameRef.current) {
				cancelAnimationFrame(frameRef.current);
			}
		};
	}, []);

	return <div ref={glowRef} className={classes.glow} />;
};

export default React.memo(MouseGlow);
