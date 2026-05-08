// src/components/ProjectDetailsModal/ProjectDetailsModal.tsx

import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

type ProjectDetailsModalProps = {
	open: boolean;
	handleClose: () => void;
	project: any;
};

const ProjectDetailsModal = ({
	open,
	handleClose,
	project,
}: ProjectDetailsModalProps) => {
	if (!project) return null;

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			maxWidth="md"
			fullWidth
			PaperProps={{
				component: motion.div,
				initial: { opacity: 0, scale: 0.9, y: 40 },
				animate: { opacity: 1, scale: 1, y: 0 },
				transition: { duration: 0.4 },
				sx: {
					background: "rgba(10,10,10,0.82)",
					backdropFilter: "blur(18px)",
					WebkitBackdropFilter: "blur(18px)",
					border: "1px solid rgba(255,255,255,0.08)",
					borderRadius: "28px",
					color: "white",
					overflow: "hidden",
				},
			}}
		>
			<DialogContent
				sx={{
					padding: "2rem",
					position: "relative",
				}}
			>
				<IconButton
					onClick={handleClose}
					sx={{
						position: "absolute",
						top: 14,
						right: 14,
						color: "white",
					}}
				>
					<IoClose />
				</IconButton>

				<img
					src={project.image}
					alt={project.name}
					style={{
						width: "100%",
						borderRadius: "18px",
						marginBottom: "24px",
						maxHeight: "350px",
						objectFit: "cover",
					}}
				/>

				<h2
					style={{
						fontSize: "2.3rem",
						marginBottom: "12px",
					}}
				>
					{project.name}
				</h2>

				<p
					style={{
						color: "rgba(255,255,255,0.75)",
						lineHeight: "2rem",
						marginBottom: "24px",
					}}
				>
					{project.description}
				</p>

				<h3>Key Features</h3>

				<ul
					style={{
						lineHeight: "2rem",
						color: "rgba(255,255,255,0.8)",
					}}
				>
					<li>Responsive modern UI design</li>
					<li>Reusable React components</li>
					<li>Optimized layouts and animations</li>
					<li>Smooth user interactions</li>
				</ul>

				<h3 style={{ marginTop: "24px" }}>Tech Stack</h3>

				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: "12px",
						marginTop: "16px",
					}}
				>
					{["React", "CSS Modules", "JavaScript", "MUI"].map((tech) => {
						return (
							<span
								key={tech}
								style={{
									padding: "10px 16px",

									borderRadius: "999px",

									background: "rgba(2,171,130,0.12)",

									border: "1px solid rgba(2,171,130,0.18)",
								}}
							>
								{tech}
							</span>
						);
					})}
				</div>

				<div
					style={{
						display: "flex",
						gap: "16px",
						marginTop: "32px",
					}}
				>
					<button onClick={() => window.open(project.url, "_blank")}>
						Live Demo
					</button>

					<button>GitHub</button>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default ProjectDetailsModal;
