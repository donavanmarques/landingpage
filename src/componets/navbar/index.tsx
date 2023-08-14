import {
	ContainerNav,
	GradientBottom,
	GradientDiv,
	GradientDivMid,
} from "./styles";

export function Navbar() {
	return (
		<>
			<GradientDiv />
			<GradientDivMid />
			<GradientBottom />
			<ContainerNav>
				<p className="p2">Home</p>
				<p className="p2">Projetos</p>
				<p className="p2">Artigos</p>
				<p className="p2">Contato</p>
				<p className="p2">Mais</p>
			</ContainerNav>
		</>
	);
}
