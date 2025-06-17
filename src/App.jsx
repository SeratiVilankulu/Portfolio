import React from "react";
import Navigation from "./components/navigation/navigation.jsx";
import Home from "./components/home/home.jsx";
import Experience from "./components/experience/experience.jsx";
import Projects from "./components/projects/projects.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
	return (
		<>
			<Navigation />
			<Home />
			<Experience />
			<Projects />
			<Footer />
		</>
	);
}

export default App;
