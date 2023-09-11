// ScrollToTop.tsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0); // Rolando a página para o topo
	}, [pathname]);

	return null; // Este componente não renderiza nada na tela
};

export default ScrollToTop;
