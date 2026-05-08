import Header from "./components/Header/Header";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Certificates from "./components/Certificates/certificates";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import whatsappicon from "./assets/images/WhatsApp_icon.png";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./store/contentDataSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Admin } from "./components/Admin/Admin";
import { ResumePreview } from "./components/ResumePreview/ResumePreview";
import Experience from "./components/Experience/Experience";
import TechStack from "./components/TechStack/TechStack";
import Metrics from "./components/Metrics/Metrics";
import Loader from "./components/Loader/Loader";
import MouseGlow from "./components/MouseGlow/MouseGlow";
import BackgroundGrid from "./components/BackgroundGrid/BackgroundGrid";
import GithubStats from "./components/GithubStats/GithubStats";
import Testimonials from "./components/Testimonials/Testimonials";
import Services from "./components/Services/Services";
import Availability from "./components/Availability/Availability";
import CommandPalette from "./components/CommandPalette/CommandPalette";
import Terminal from "./components/Terminal/Terminal";
import JarvisVision from "./components/JarvisVision/JarvisVision";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import JarvisPanel from "./components/JarvisPanel/JarvisPanel";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import SEO from "./components/SEO/SEO";

function App() {
	const phoneNumber = process.env.REACT_APP_WHATSAPP_NUMBER;
	const whatsappMessage = encodeURIComponent(
		process.env.REACT_APP_WHATSAPP_MESSAGE || "Hi! Let's chat!",
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);
	return (
		<Loader>
			<div className="App">
				<BackgroundGrid />
				<MouseGlow />
				<ThemeSwitcher />

				<CommandPalette />
				<BrowserRouter>
					<SEO />
					<ScrollProgress />
					<Header />
					<JarvisPanel />
					<Routes>
						<Route path="/admin" element={<Admin />} />

						<Route
							path="/*"
							element={
								<div className="content">
									<Home />

									<Terminal />

									<JarvisVision />

									<About />

									<Metrics />

									<Services />

									<Experience />

									<TechStack />

									<GithubStats />

									<Projects />

									<Certificates />

									<Testimonials />

									<Availability />

									<Contact />

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

						<Route path="/resume_preview" element={<ResumePreview />} />
					</Routes>
				</BrowserRouter>
			</div>
		</Loader>
	);
}

export default App;
