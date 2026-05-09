import "./App.css";

import { lazy, Suspense, useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { fetchData } from "./store/contentDataSlice";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Loader from "./components/Loader/Loader";
import SEO from "./components/SEO/SEO";

/* ---------- NORMAL IMPORTS ---------- */

import Metrics from "./components/Metrics/Metrics";
import Services from "./components/Services/Services";
import Certificates from "./components/Certificates/certificates";
import Testimonials from "./components/Testimonials/Testimonials";
import Availability from "./components/Availability/Availability";

import whatsappicon from "./assets/images/WhatsApp_icon.png";

import LazySection from "./LazySection/LazySection";

/* ---------- Lazy Components ---------- */

const BackgroundGrid = lazy(
	() => import("./components/BackgroundGrid/BackgroundGrid"),
);

const MouseGlow = lazy(() => import("./components/MouseGlow/MouseGlow"));

const ThemeSwitcher = lazy(
	() => import("./components/ThemeSwitcher/ThemeSwitcher"),
);

const CommandPalette = lazy(
	() => import("./components/CommandPalette/CommandPalette"),
);

const Terminal = lazy(() => import("./components/Terminal/Terminal"));

const JarvisVision = lazy(
	() => import("./components/JarvisVision/JarvisVision"),
);

const JarvisPanel = lazy(() => import("./components/JarvisPanel/JarvisPanel"));

const ScrollProgress = lazy(
	() => import("./components/ScrollProgress/ScrollProgress"),
);

const GithubStats = lazy(() => import("./components/GithubStats/GithubStats"));

const ResumePreview = lazy(() =>
	import("./components/ResumePreview/ResumePreview").then((module) => ({
		default: module.ResumePreview,
	})),
);

const Admin = lazy(() =>
	import("./components/Admin/Admin").then((module) => ({
		default: module.Admin,
	})),
);

function App() {
	const dispatch = useDispatch();

	const [showEffects, setShowEffects] = useState(false);

	const [isMobile, setIsMobile] = useState(false);

	const phoneNumber = process.env.REACT_APP_WHATSAPP_NUMBER;

	const whatsappMessage = encodeURIComponent(
		process.env.REACT_APP_WHATSAPP_MESSAGE ||
			"Hi Suresh, I visited your portfolio and would like to connect.",
	);

	/* ---------- Fetch Data ---------- */

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	/* ---------- Mobile Detection ---------- */

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();

		window.addEventListener("resize", checkMobile);

		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	/* ---------- Delayed Effects ---------- */

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowEffects(true);
		}, 300);

		return () => clearTimeout(timer);
	}, []);

	return (
		<Loader>
			<div className="App">
				<BrowserRouter>
					<SEO />

					{/* ---------- Delayed Effects ---------- */}

					{showEffects && !isMobile && (
						<Suspense fallback={<div style={{ minHeight: "100px" }} />}>
							<BackgroundGrid />

							<MouseGlow />

							<ThemeSwitcher />

							<CommandPalette />

							<ScrollProgress />
						</Suspense>
					)}

					{/* ---------- Header ---------- */}

					<Header />

					{/* ---------- Jarvis Panel ---------- */}

					<Suspense fallback={<div style={{ minHeight: "120px" }} />}>
						<JarvisPanel />
					</Suspense>

					<Routes>
						{/* ---------- Admin ---------- */}

						<Route
							path="/admin"
							element={
								<Suspense fallback={<div style={{ minHeight: "300px" }} />}>
									<Admin />
								</Suspense>
							}
						/>

						{/* ---------- Resume Preview ---------- */}

						<Route
							path="/resume_preview"
							element={
								<Suspense fallback={<div style={{ minHeight: "300px" }} />}>
									<ResumePreview />
								</Suspense>
							}
						/>

						{/* ---------- Main Portfolio ---------- */}

						<Route
							path="/*"
							element={
								<div className="content">
									{/* ---------- Immediate Sections ---------- */}

									<Home />

									<About />

									<Experience />

									<TechStack />

									<Projects />

									<Contact />

									<Metrics />

									<Services />

									<Certificates />

									<Testimonials />

									<Availability />

									{/* ---------- Heavy Lazy Sections ---------- */}

									<LazySection>
										<Suspense
											fallback={
												<div
													style={{
														minHeight: "300px",
													}}
												/>
											}
										>
											<Terminal />
										</Suspense>
									</LazySection>

									<LazySection>
										<Suspense
											fallback={
												<div
													style={{
														minHeight: "300px",
													}}
												/>
											}
										>
											<JarvisVision />
										</Suspense>
									</LazySection>

									<LazySection>
										<Suspense
											fallback={
												<div
													style={{
														minHeight: "300px",
													}}
												/>
											}
										>
											<GithubStats />
										</Suspense>
									</LazySection>

									{/* ---------- WhatsApp ---------- */}

									<a
										href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
										target="_blank"
										rel="noopener noreferrer"
										className="whatsapp-float"
									>
										<img src={whatsappicon} alt="WhatsApp" loading="lazy" />
									</a>
								</div>
							}
						/>
					</Routes>
				</BrowserRouter>
			</div>
		</Loader>
	);
}

export default App;
