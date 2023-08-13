import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/home";

// COMPONENTS

const AppRoutes = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	</BrowserRouter>
);

export default AppRoutes;
