import { Helmet } from "react-helmet-async";

const SEO = () => {
	return (
		<Helmet>
			<title>Suresh Ragam | Full Stack Developer</title>

			<meta
				name="description"
				content="Full Stack Developer with 4+ years of experience specializing in React.js, Spring Boot, modern UI systems, scalable applications and futuristic web experiences."
			/>

			<meta
				name="keywords"
				content="
				Suresh Ragam,
				Full Stack Developer,
				React Developer,
				Spring Boot Developer,
				Java Developer,
				Frontend Developer,
				React.js,
				Spring Boot,
				JavaScript,
				TypeScript,
				MySQL,
				UI Developer,
				Web Developer,
				Portfolio
				"
			/>

			{/* OPEN GRAPH */}
			<meta property="og:title" content="Suresh Ragam | Full Stack Developer" />

			<meta
				property="og:description"
				content="4+ years experienced Full Stack Developer specializing in React.js, Spring Boot, scalable applications and futuristic digital experiences."
			/>

			<meta property="og:type" content="website" />

			<meta property="og:image" content="/preview.webp" />

			<meta property="og:url" content="https://yourdomain.com" />

			{/* TWITTER */}
			<meta name="twitter:card" content="summary_large_image" />

			<meta
				name="twitter:title"
				content="Suresh Ragam | Full Stack Developer"
			/>

			<meta
				name="twitter:description"
				content="React.js + Spring Boot Full Stack Developer with 4+ years of experience building scalable modern applications."
			/>

			<meta name="twitter:image" content="/preview.webp" />

			{/* EXTRA */}
			<meta name="theme-color" content="#02ab82" />

			<link rel="canonical" href="https://yourdomain.com" />
		</Helmet>
	);
};

export default SEO;
