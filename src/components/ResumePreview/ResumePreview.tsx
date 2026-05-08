import { motion } from "framer-motion";

declare global {
	interface Window {
		dataLayer?: Array<Record<string, unknown>>;
	}
}

export const ResumePreview = () => {
	const handleDownloadResume = () => {
		window.dataLayer = window.dataLayer || [];

		window.dataLayer.push({
			event: "resume_click",
			event_category: "engagement",
			event_label: "Resume Button",
		});

		const link = document.createElement("a");

		link.href =
			"https://sragamimages.s3.ap-south-1.amazonaws.com/portfolio/resume.pdf";

		link.download = "resume.pdf";

		document.body.appendChild(link);

		link.click();

		document.body.removeChild(link);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 60 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7 }}
			style={{
				padding: "40px 20px",
				minHeight: "100vh",
			}}
		>
			<h1
				style={{
					fontSize: "3rem",
					marginBottom: "10px",
					textAlign: "center",
				}}
			>
				Resume Preview
			</h1>

			<p
				style={{
					textAlign: "center",
					color: "rgba(255,255,255,0.7)",
					marginBottom: "40px",
				}}
			>
				View or download my latest professional resume.
			</p>

			<div
				style={{
					display: "flex",
					gap: "30px",
					alignItems: "stretch",
					flexWrap: "wrap",
					justifyContent: "center",
				}}
			>
				{/* PDF PREVIEW */}
				<motion.div
					initial={{ opacity: 0, x: -80 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7 }}
					style={{
						flex: "1 1 700px",
						minHeight: "750px",

						borderRadius: "24px",

						overflow: "hidden",

						background: "rgba(255,255,255,0.03)",

						backdropFilter: "blur(14px)",
						WebkitBackdropFilter: "blur(14px)",

						border: "1px solid rgba(255,255,255,0.08)",

						boxShadow: "0 0 24px rgba(0,0,0,0.25)",
					}}
				>
					<embed
						src="https://sragamimages.s3.ap-south-1.amazonaws.com/portfolio/resume.pdf"
						type="application/pdf"
						width="100%"
						height="100%"
					/>

					<p
						style={{
							padding: "16px",
							textAlign: "center",
							color: "rgba(255,255,255,0.7)",
						}}
					>
						Your browser does not support PDF preview.
					</p>
				</motion.div>

				{/* SIDE PANEL */}
				<motion.div
					initial={{ opacity: 0, x: 80 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, delay: 0.2 }}
					style={{
						flex: "0 1 350px",

						minHeight: "750px",

						borderRadius: "24px",

						padding: "32px",

						display: "flex",
						flexDirection: "column",
						justifyContent: "center",

						background: "rgba(255,255,255,0.03)",

						backdropFilter: "blur(14px)",
						WebkitBackdropFilter: "blur(14px)",

						border: "1px solid rgba(255,255,255,0.08)",

						boxShadow: "0 0 24px rgba(0,0,0,0.25)",

						position: "relative",
						overflow: "hidden",
					}}
				>
					{/* GLOW EFFECT */}
					<div
						style={{
							position: "absolute",

							width: "220px",
							height: "220px",

							background: "rgba(2,171,130,0.08)",

							filter: "blur(90px)",

							top: "-60px",
							right: "-60px",
						}}
					/>

					<div style={{ position: "relative", zIndex: 1 }}>
						<h2
							style={{
								fontSize: "2rem",
								marginBottom: "16px",
							}}
						>
							Suresh Ragam
						</h2>

						<p
							style={{
								color: "rgba(255,255,255,0.75)",
								lineHeight: "2rem",
								marginBottom: "30px",
							}}
						>
							Frontend Developer with experience in React, Redux, JavaScript,
							and modern UI development. Passionate about building scalable and
							polished web applications.
						</p>

						<button
							onClick={handleDownloadResume}
							style={{
								width: "100%",
							}}
						>
							Download Resume
						</button>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};
