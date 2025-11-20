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
		<>
			<h2 style={{ marginBottom: "10px" }}>Resume Preview</h2>
			<div
				style={{
					display: "flex",
					gap: "20px",
					alignItems: "center",
					marginBlock: "20px",
				}}
			>
				<div
					style={{
						flexBasis: "50%",
						minHeight: "500px",
						borderRadius: "8px",
						boxShadow: "0 0 12px rgba(0,0,0,0.1)",
						overflow: "hidden",
					}}
				>
					<embed
						src="https://sragamimages.s3.ap-south-1.amazonaws.com/portfolio/resume.pdf"
						type="application/pdf"
						width="100%"
						height="100%"
					/>

					{/* Fallback for browsers that cannot render PDF */}
					<p style={{ padding: "10px", textAlign: "center" }}>
						Your browser does not support PDF preview.
						<br />
						Please use the download button on the right →
					</p>
				</div>
				<div
					style={{
						flexBasis: "40%",
						minHeight: "500px",
						borderRadius: "8px",
						boxShadow: "0 0 12px rgba(0,0,0,0.1)",
						overflow: "hidden",
						border: "1px solid green",
					}}
				>
					<p style={{ marginBottom: "10px", color: "#666" }}>
						View or download my latest resume.
					</p>
					<button onClick={handleDownloadResume}>Download</button>
				</div>
			</div>
		</>
	);
};
