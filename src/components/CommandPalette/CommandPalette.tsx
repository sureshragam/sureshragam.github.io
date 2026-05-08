// src/components/CommandPalette/CommandPalette.tsx

import React, { useEffect, useMemo, useState } from "react";

import classes from "./CommandPalette.module.css";

import { motion, AnimatePresence } from "framer-motion";

const commands = [
	{
		label: "Go to Home",
		id: "home",
	},
	{
		label: "Go to About",
		id: "about",
	},
	{
		label: "Go to Experience",
		id: "experience",
	},
	{
		label: "Go to Tech Stack",
		id: "techstack",
	},
	{
		label: "Go to Projects",
		id: "projects",
	},
	{
		label: "Go to Contact",
		id: "contact",
	},
];

const CommandPalette = () => {
	const [open, setOpen] = useState(false);

	/* PLATFORM SHORTCUT */
	const shortcutKey = useMemo(() => {
		if (typeof window === "undefined") return "Ctrl";

		const platform = window.navigator.platform || "";

		const userAgent = window.navigator.userAgent || "";

		const isMac =
			/Mac|iPhone|iPad|iPod/i.test(platform) ||
			/Mac|iPhone|iPad|iPod/i.test(userAgent);

		return isMac ? "⌘" : "Ctrl";
	}, []);

	/* KEYBOARD SHORTCUTS */
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
				event.preventDefault();

				setOpen((prev) => !prev);
			}

			if (event.key === "Escape") {
				setOpen(false);
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	/* NAVIGATION */
	const handleNavigate = (id: string) => {
		const section = document.getElementById(id);

		if (section) {
			section.scrollIntoView({
				behavior: "smooth",
			});
		}

		setOpen(false);
	};

	return (
		<AnimatePresence>
			{open && (
				<motion.div
					className={classes.overlay}
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					exit={{
						opacity: 0,
					}}
				>
					<motion.div
						className={classes.palette}
						initial={{
							opacity: 0,

							scale: 0.9,

							y: 20,
						}}
						animate={{
							opacity: 1,

							scale: 1,

							y: 0,
						}}
						exit={{
							opacity: 0,

							scale: 0.9,

							y: 20,
						}}
						transition={{
							duration: 0.25,
						}}
					>
						{/* HEADER */}
						<div className={classes.header}>
							<span>Command Menu</span>

							<div className={classes.shortcut}>{shortcutKey} + K</div>
						</div>

						{/* COMMANDS */}
						<div className={classes.commands}>
							{commands.map((command) => (
								<button
									key={command.id}
									className={classes.command}
									onClick={() => handleNavigate(command.id)}
								>
									{command.label}
								</button>
							))}
						</div>

						{/* FOOTER */}
						<p className={classes.footer}>
							{shortcutKey} + K to open • ESC to close
						</p>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default CommandPalette;
