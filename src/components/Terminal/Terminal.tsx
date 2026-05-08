import React, { useCallback, useMemo, useState } from "react";

import { motion } from "framer-motion";

import classes from "./Terminal.module.css";

type HistoryItem = {
	command: string;
	output: string;
};

const commandMap: Record<string, string> = {
	help: `
Available commands:

whoami
skills
experience
dream
clear
socials
`,

	whoami: "Suresh Ragam",

	skills: "React • TypeScript • Java • Spring Boot • AWS • Azure",

	experience: "3+ years as React Developer building scalable applications.",

	dream: "Building a Jarvis-like AI Assistant ecosystem.",

	socials:
		"GitHub: github.com/sureshragam | LinkedIn: linkedin.com/in/suresh-ragam",
};

const INITIAL_HISTORY: HistoryItem[] = [
	{
		command: "welcome",
		output: "Type 'help' to view available commands.",
	},
];

const Terminal = () => {
	const [input, setInput] = useState("");

	const [history, setHistory] = useState<HistoryItem[]>(INITIAL_HISTORY);

	const handleCommand = useCallback(
		(event: React.KeyboardEvent<HTMLInputElement>) => {
			if (event.key !== "Enter") return;

			const trimmedInput = input.trim().toLowerCase();

			if (!trimmedInput) return;

			if (trimmedInput === "clear") {
				setHistory(INITIAL_HISTORY);

				setInput("");

				return;
			}

			const output =
				commandMap[trimmedInput] || `Command not found: ${trimmedInput}`;

			setHistory((prev) => [
				...prev,
				{
					command: trimmedInput,
					output,
				},
			]);

			setInput("");
		},
		[input],
	);

	const renderedHistory = useMemo(() => {
		return history.map((item, index) => (
			<div key={`${item.command}-${index}`} className={classes.historyBlock}>
				<p className={classes.command}>
					<span>$</span> {item.command}
				</p>

				<pre className={classes.output}>{item.output}</pre>
			</div>
		));
	}, [history]);

	return (
		<section
			id="terminal"
			className={`${classes.terminalSection} scrollSection`}
		>
			<motion.div
				className={classes.terminal}
				initial={{
					opacity: 0,
					y: 40,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				viewport={{
					once: true,
					amount: 0.2,
				}}
				transition={{
					duration: 0.6,
					ease: "easeOut",
				}}
			>
				<div className={classes.topBar}>
					<div className={classes.circles}>
						<span></span>
						<span></span>
						<span></span>
					</div>

					<p>suresh@portfolio ~</p>
				</div>

				<div className={classes.body}>
					{renderedHistory}

					<div className={classes.inputLine}>
						<span>$</span>

						<input
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={handleCommand}
							className={classes.input}
							placeholder="Type a command..."
							spellCheck={false}
							autoComplete="off"
						/>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default React.memo(Terminal);
