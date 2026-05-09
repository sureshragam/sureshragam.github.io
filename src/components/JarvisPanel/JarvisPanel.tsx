// JarvisPanel.tsx

import { useEffect, useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import {
	HiOutlineDocumentText,
	HiOutlineMail,
	HiOutlineX,
} from "react-icons/hi";
import { HiMiniMicrophone } from "react-icons/hi2";

import { useNavigate } from "react-router-dom";

import classes from "./JarvisPanel.module.css";

const messages = [
	"Initializing Jarvis Core...",
	"Neural Systems Online.",
	"Awaiting Command.",
];

const knowledgeBase = [
	{
		keywords: ["about", "yourself", "who are you"],

		response:
			"Suresh is a React developer with 3 years of experience building modern web applications and futuristic UI systems.",
	},

	{
		keywords: ["skills", "tech", "stack", "technology"],

		response:
			"Suresh primarily works with React, TypeScript, JavaScript, Redux, MUI, Java, Spring Boot and cloud technologies.",
	},

	{
		keywords: ["experience", "career", "work"],

		response:
			"Suresh has worked on enterprise applications involving file management systems, notifications and scalable frontend architecture.",
	},

	{
		keywords: ["projects", "portfolio"],

		response:
			"Suresh is building modern portfolio systems, AI assistant interfaces and full stack applications.",
	},

	{
		keywords: ["jarvis", "assistant", "ai"],

		response:
			"This Jarvis system is the foundation for Suresh's future AI assistant dream project inspired by Iron Man.",
	},
];

const JarvisPanel = () => {
	const [open, setOpen] = useState(false);

	const [displayedText, setDisplayedText] = useState("");

	const [messageIndex, setMessageIndex] = useState(0);

	const [charIndex, setCharIndex] = useState(0);

	const [command, setCommand] = useState("");

	const [thinking, setThinking] = useState(false);

	const [listening, setListening] = useState(false);

	const [chatHistory, setChatHistory] = useState<
		{
			type: "user" | "jarvis";

			message: string;
		}[]
	>([]);

	const chatEndRef = useRef<HTMLDivElement | null>(null);
	const recognitionRef = useRef<any>(null);

	const navigate = useNavigate();

	/* TERMINAL TYPING */
	useEffect(() => {
		if (!open) return;

		if (messageIndex >= messages.length) return;

		const currentMessage = messages[messageIndex];

		if (charIndex < currentMessage.length) {
			const timeout = setTimeout(() => {
				setDisplayedText((prev) => prev + currentMessage[charIndex]);

				setCharIndex((prev) => prev + 1);
			}, 40);

			return () => clearTimeout(timeout);
		}

		const nextTimeout = setTimeout(() => {
			setDisplayedText((prev) => prev + "\n");

			setMessageIndex((prev) => prev + 1);

			setCharIndex(0);
		}, 700);

		return () => clearTimeout(nextTimeout);
	}, [charIndex, messageIndex, open]);

	/* AUTO SCROLL */
	useEffect(() => {
		chatEndRef.current?.scrollIntoView({
			behavior: "smooth",
		});
	}, [chatHistory, thinking]);

	/* OPEN PANEL */
	const handleOpen = () => {
		setOpen(true);

		setDisplayedText("");

		setMessageIndex(0);

		setCharIndex(0);

		setChatHistory([]);
	};

	/* STREAM RESPONSE */
	const streamResponse = (text: string) => {
		let currentText = "";

		/* EMPTY MESSAGE */
		setChatHistory((prev) => [
			...prev,
			{
				type: "jarvis",

				message: "",
			},
		]);

		text.split("").forEach((char, index) => {
			setTimeout(() => {
				currentText += char;

				setChatHistory((prev) => {
					const updated = [...prev];

					updated[updated.length - 1] = {
						type: "jarvis",

						message: currentText,
					};

					return updated;
				});
			}, index * 18);
		});
	};

	/* VOICE COMMAND */
	const handleVoiceCommand = () => {
		const SpeechRecognition =
			(window as any).SpeechRecognition ||
			(window as any).webkitSpeechRecognition;

		if (!SpeechRecognition) {
			streamResponse("Voice recognition is not supported in this browser.");

			return;
		}

		const recognition = new SpeechRecognition();

		recognitionRef.current = recognition;

		recognition.lang = "en-US";

		recognition.interimResults = false;

		recognition.maxAlternatives = 1;

		setListening(true);

		recognition.start();

		recognition.onresult = (event: any) => {
			const transcript = event.results[0][0].transcript;

			setCommand(transcript);

			setListening(false);

			setTimeout(() => {
				const fakeEvent = {
					key: "Enter",
				} as React.KeyboardEvent<HTMLInputElement>;

				handleCommand(fakeEvent);
			}, 400);
		};

		recognition.onerror = () => {
			setListening(false);

			streamResponse("Voice recognition failed.");
		};

		recognition.onend = () => {
			setListening(false);
		};
	};

	/* COMMANDS */
	const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key !== "Enter") return;

		const value = command.toLowerCase().trim();

		if (!value) return;

		/* USER MESSAGE */
		setChatHistory((prev) => [
			...prev,
			{
				type: "user",

				message: value,
			},
		]);

		setThinking(true);

		setCommand("");

		setTimeout(() => {
			setThinking(false);

			/* PROJECTS */
			if (value.includes("project")) {
				streamResponse("Opening projects section...");

				setTimeout(() => {
					setOpen(false);

					document.getElementById("projects")?.scrollIntoView({
						behavior: "smooth",
					});
				}, 1500);
			} else if (value.includes("contact")) {
				/* CONTACT */
				streamResponse("Opening contact section...");

				setTimeout(() => {
					setOpen(false);

					document.getElementById("contact")?.scrollIntoView({
						behavior: "smooth",
					});
				}, 1500);
			} else if (value.includes("resume")) {
				/* RESUME */
				streamResponse("Opening resume...");

				setTimeout(() => {
					setOpen(false);

					navigate("/resume_preview");
				}, 1500);
			} else {
				/* AI RESPONSES */
				const matched = knowledgeBase.find((item) =>
					item.keywords.some((keyword) => value.includes(keyword)),
				);

				if (matched) {
					streamResponse(matched.response);
				} else {
					streamResponse(
						"I am still learning. Try asking about skills, experience, projects or Jarvis.",
					);
				}
			}
		}, 1000);
	};

	return (
		<>
			{/* CORE BUTTON */}
			<div className={classes.wrapper}>
				<button className={classes.core} onClick={handleOpen}>
					<div className={classes.dot}></div>

					<span>JARVIS ONLINE</span>
				</button>
			</div>

			{/* OVERLAY */}
			<div className={`${classes.overlay} ${open ? classes.show : ""}`}>
				<div className={classes.panel}>
					{/* HEADER */}
					<div className={classes.header}>
						<div>
							<p className={classes.label}>AI ASSISTANT</p>

							<h2>Jarvis Core</h2>
						</div>

						<button className={classes.closeBtn} onClick={() => setOpen(false)}>
							<HiOutlineX />
						</button>
					</div>

					{/* TERMINAL */}
					<div className={classes.terminal}>
						<pre>
							{displayedText}

							<span className={classes.cursor}>|</span>
						</pre>
					</div>

					{/* COMMAND INPUT */}
					<div className={classes.commandBox}>
						<p className={classes.commandLabel}>Command Interface</p>

						<div className={classes.inputWrapper}>
							<span>&gt;</span>

							<input
								type="text"
								placeholder="Ask Jarvis something..."
								value={command}
								onChange={(e) => setCommand(e.target.value)}
								onKeyDown={handleCommand}
							/>
							<button
								className={`${classes.micButton} ${
									listening ? classes.micActive : ""
								}`}
								onClick={handleVoiceCommand}
							>
								<HiMiniMicrophone />
							</button>
						</div>
					</div>

					{/* CHAT HISTORY */}
					<div className={classes.chatHistory}>
						{chatHistory.map((chat, index) => (
							<div
								key={index}
								className={`${classes.chatBubble} ${
									chat.type === "user"
										? classes.userBubble
										: classes.jarvisBubble
								}`}
							>
								<p>{chat.message}</p>
							</div>
						))}

						{thinking && (
							<div className={`${classes.chatBubble} ${classes.jarvisBubble}`}>
								<p className={classes.typing}>Jarvis is thinking...</p>
							</div>
						)}

						<div ref={chatEndRef}></div>
					</div>

					{/* ACTIONS */}
					<div
						className={`${classes.actions} ${
							messageIndex >= messages.length ? classes.actionsShow : ""
						}`}
					>
						<HashLink
							smooth
							to="/resume_preview"
							onClick={() => {
								setOpen(false);
							}}
						>
							<HiOutlineDocumentText />

							<span>Resume</span>
						</HashLink>

						<HashLink
							smooth
							to="/#contact"
							onClick={() => {
								setOpen(false);
							}}
						>
							<HiOutlineMail />
							<span>Contact</span>
						</HashLink>
					</div>
				</div>
			</div>
		</>
	);
};

export default JarvisPanel;
