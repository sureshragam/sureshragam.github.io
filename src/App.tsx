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

const Metrics = lazy(() => import("./components/Metrics/Metrics"));

const GithubStats = lazy(() => import("./components/GithubStats/GithubStats"));

const Testimonials = lazy(
	() => import("./components/Testimonials/Testimonials"),
);

const Services = lazy(() => import("./components/Services/Services"));

const Availability = lazy(
	() => import("./components/Availability/Availability"),
);

const Certificates = lazy(
	() => import("./components/Certificates/certificates"),
);

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
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	return (
		<Loader>
			<div className="App">
				<BrowserRouter>
					<SEO />

					{/* ---------- Delayed Effects ---------- */}

					{showEffects && !isMobile && (
						<Suspense fallback={null}>
							<BackgroundGrid />
							<MouseGlow />
							<ThemeSwitcher />
							<CommandPalette />
							<ScrollProgress />
						</Suspense>
					)}

					{/* ---------- Header ---------- */}

					<Header />

					{/* ---------- Lazy Jarvis Panel ---------- */}

					<LazySection>
						<Suspense fallback={null}>
							<JarvisPanel />
						</Suspense>
					</LazySection>

					<Routes>
						<Route
							path="/admin"
							element={
								<Suspense fallback={null}>
									<Admin />
								</Suspense>
							}
						/>

						<Route
							path="/resume_preview"
							element={
								<Suspense fallback={null}>
									<ResumePreview />
								</Suspense>
							}
						/>

						<Route
							path="/*"
							element={
								<div className="content">
									{/* ---------- Immediate ---------- */}

									<Home />

									<About />

									<Experience />

									<TechStack />

									<Projects />

									<Contact />

									{/* ---------- Lazy Sections ---------- */}

									<LazySection>
										<Suspense fallback={null}>
											<Terminal />
										</Suspense>
									</LazySection>

									<LazySection>
										<Suspense fallback={null}>
											<JarvisVision />
										</Suspense>
									</LazySection>

									<LazySection>
										<Suspense fallback={null}>
											<Metrics />
										</Suspense>
									</LazySection>

									<LazySection>
										<Suspense fallback={null}>
											<Services />
										</Suspense>
									</LazySection>

									<LazySection>
										<Suspense fallback={null}>
											<GithubStats />
										</Suspense>
									</LazySection>

									<LazySection>
										<Suspense fallback={null}>
											<Certificates />
										</Suspense>
									</LazySection>

									<LazySection>
										<Suspense fallback={null}>
											<Testimonials />
										</Suspense>
									</LazySection>

									<LazySection>
										<Suspense fallback={null}>
											<Availability />
										</Suspense>
									</LazySection>

									{/* ---------- WhatsApp ---------- */}

									<a
										href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
										target="_blank"
										rel="noopener noreferrer"
										className="whatsapp-float"
									>
										<img src={whatsappicon} alt="WhatsApp" />
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
