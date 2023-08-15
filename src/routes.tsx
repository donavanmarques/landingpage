import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/home";
import { Contact } from "./screens/contact";

// COMPONENTS

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
