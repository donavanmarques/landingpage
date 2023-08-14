import {
	ContainerNav,
	GradientBottom,
	GradientDiv,
	GradientDivMid,
	LeftSide,
	RightSide,
} from "./styles";

import Logo from "../../assets/logo.svg";
import Linkedin from "../../assets/LinkedIn-icon.svg";
import Github from "../../assets/Github-icon.svg";
import Divider from "../../assets/divider.svg";
// import Theme from "../../assets/theme.svg";

export function Navbar() {
	return (
		<>
			<GradientDiv />
			<GradientDivMid />
			<GradientBottom />
			<ContainerNav>
				<LeftSide>
					<img className="rotate-center" src={Logo} alt="" />
					<p className="p2">Home</p>
					<p className="p2">Projetos</p>
					<p className="p2">Artigos</p>
					<p className="p2">Contato</p>
					<p className="p2">Mais</p>
				</LeftSide>
				<RightSide>
					<img className="icon" src={Linkedin} alt="" />
					<img src={Divider} alt="" />
					<img className="icon" src={Github} alt="" />
					{/* <img className="icon" src={Theme} alt="" /> */}
				</RightSide>
			</ContainerNav>
		</>
	);
}
