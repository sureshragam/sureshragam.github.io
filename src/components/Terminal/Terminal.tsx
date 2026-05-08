// src/components/Terminal/Terminal.tsx

import React, { useState } from "react";
import classes from "./Terminal.module.css";
import { motion } from "framer-motion";

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

const Terminal = () => {
	const [input, setInput] = useState("");

	const [history, setHistory] = useState<{ command: string; output: string }[]>(
		[
			{
				command: "welcome",
				output: "Type 'help' to view available commands.",
			},
		],
	);

	const handleCommand = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key !== "Enter") return;

		const trimmedInput = input.trim().toLowerCase();

		if (trimmedInput === "clear") {
			setHistory([]);

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
	};

	return (
		<section
			id="terminal"
			className={`${classes.terminalSection} scrollSection`}
		>
			<motion.div
				className={classes.terminal}
				initial={{
					opacity: 0,
					y: 60,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 0.7,
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
					{history.map((item, index) => (
						<div key={index} className={classes.historyBlock}>
							<p className={classes.command}>
								<span>$</span> {item.command}
							</p>

							<pre className={classes.output}>{item.output}</pre>
						</div>
					))}

					<div className={classes.inputLine}>
						<span>$</span>

						<input
							autoFocus
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={handleCommand}
							className={classes.input}
							placeholder="Type a command..."
						/>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Terminal;
