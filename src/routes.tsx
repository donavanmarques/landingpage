import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/home";
import { Contact } from "./screens/contact";
import { Projects } from "./screens/projects";
import { Notes } from "./screens/notes";
import ScrollToTop from "./componets/scrollToTop";

// COMPONENTS

const AppRoutes = () => (
	<BrowserRouter>
		<ScrollToTop />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/notes" element={<Notes />} />
		</Routes>
	</BrowserRouter>
);

export default AppRoutes;
