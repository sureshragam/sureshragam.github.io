import Header from "./components/Header/Header.tsx";
import "./App.css";
import Home from "./components/Home/Home.tsx";
import About from "./components/About/About.tsx";
import Certificates from "./components/Certificates/certificates.tsx";
import Contact from "./components/Contact/Contact.tsx";
import MobileAlert from "./component-lib/MobileAlert.tsx";
import Projects from "./components/Projects/Projects.tsx";
import whatsappicon from "./assets/images/WhatsApp_icon.png";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./store/contentDataSlice.ts";

function App() {
	const phoneNumber = process.env.REACT_APP_WHATSAPP_NUMBER;
	const whatsappMessage = encodeURIComponent(
		process.env.REACT_APP_WHATSAPP_MESSAGE || "Hi! Let's chat!"
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	return (
		<div className="App">
			<MobileAlert />
			<Header />
			<Home />
			<About />
			<Projects />
			<Certificates />
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
	);
}

export default App;
