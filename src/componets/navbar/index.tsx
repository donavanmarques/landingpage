import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Linkedin from "../../assets/LinkedIn-icon.svg";
import Github from "../../assets/Github-icon.svg";
import Divider from "../../assets/divider.svg";
import Home from "../../assets/icone-home.svg";
import Projects from "../../assets/icone-projetos.svg";
import Contact from "../../assets/icone-contato.svg";

import {
	ContentNav,
	GradientBottom,
	GradientDiv,
	GradientDivMid,
	LeftSide,
	MobileMenu,
	RightSide,
} from "./styles";

export function Navbar() {
	const navigate = useNavigate();
	return (
		<>
			<GradientDiv />
			<GradientDivMid />
			<GradientBottom />
			<ContentNav>
				<LeftSide>
					<img className="bounce-top" src={Logo} alt="" />
					<p
						className="p2"
						onClick={() => {
							navigate("/");
						}}
					>
						Home
					</p>
					<p
						className="p2"
						onClick={() => {
							navigate("/projects");
						}}
					>
						Projetos
					</p>

					<p
						className="p2"
						onClick={() => {
							navigate("/contact");
						}}
					>
						Contato
					</p>
				</LeftSide>
				<MobileMenu>
					<img
						src={Home}
						onClick={() => {
							navigate("/");
						}}
						alt=""
					/>
					<img
						src={Projects}
						onClick={() => {
							navigate("/projects");
						}}
						alt=""
					/>
					<img
						src={Contact}
						onClick={() => {
							navigate("/contact");
						}}
						alt=""
					/>
				</MobileMenu>
				<RightSide>
					<a target="_blank" href="https://github.com/donavanmarques">
						<img className="icon github" src={Github} alt="" />
					</a>
					<img src={Divider} alt="" />
					<a
						target="_blank"
						href="https://www.linkedin.com/in/donavan-marques-008032163/"
					>
						<img className="icon" src={Linkedin} alt="" />
					</a>
				</RightSide>
			</ContentNav>
		</>
	);
}
