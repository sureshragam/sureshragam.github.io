import React, { useCallback, useEffect, useMemo, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import classes from "./CommandPalette.module.css";

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

	/* ---------- Platform Shortcut ---------- */

	const shortcutKey = useMemo(() => {
		if (typeof window === "undefined") return "Ctrl";

		const platform = window.navigator.platform || "";

		const userAgent = window.navigator.userAgent || "";

		const isMac =
			/Mac|iPhone|iPad|iPod/i.test(platform) ||
			/Mac|iPhone|iPad|iPod/i.test(userAgent);

		return isMac ? "⌘" : "Ctrl";
	}, []);

	/* ---------- Keyboard Shortcuts ---------- */

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			const isShortcut =
				(event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";

			if (isShortcut) {
				event.preventDefault();

				setOpen((prev) => !prev);
			}

			if (event.key === "Escape") {
				setOpen(false);
			}
		};

		window.addEventListener("keydown", handleKeyDown, {
			passive: true,
		});

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	/* ---------- Navigation ---------- */

	const handleNavigate = useCallback((id: string) => {
		const section = document.getElementById(id);

		if (section) {
			section.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}

		setOpen(false);
	}, []);

	return (
		<AnimatePresence mode="wait">
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
					transition={{
						duration: 0.18,
					}}
				>
					<motion.div
						className={classes.palette}
						initial={{
							opacity: 0,
							y: 16,
							scale: 0.96,
						}}
						animate={{
							opacity: 1,
							y: 0,
							scale: 1,
						}}
						exit={{
							opacity: 0,
							y: 16,
							scale: 0.96,
						}}
						transition={{
							duration: 0.22,
							ease: "easeOut",
						}}
					>
						{/* Header */}

						<div className={classes.header}>
							<span>Command Menu</span>

							<div className={classes.shortcut}>{shortcutKey} + K</div>
						</div>

						{/* Commands */}

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

						{/* Footer */}

						<p className={classes.footer}>
							{shortcutKey} + K to open • ESC to close
						</p>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default React.memo(CommandPalette);
