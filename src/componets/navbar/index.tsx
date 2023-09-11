import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Linkedin from "../../assets/LinkedIn-icon.svg";
import Github from "../../assets/Github-icon.svg";
import Divider from "../../assets/divider.svg";

import {
	ContentNav,
	GradientBottom,
	GradientDiv,
	GradientDivMid,
	LeftSide,
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
				<RightSide>
					<a
						target="_blank"
						href="https://www.linkedin.com/in/donavan-marques-008032163/"
					>
						<img className="icon" src={Linkedin} alt="" />
					</a>
					<img src={Divider} alt="" />
					<a target="_blank" href="https://github.com/donavanmarques">
						<img className="icon" src={Github} alt="" />
					</a>
					{/* <img className="icon" src={Theme} alt="" /> */}
				</RightSide>
			</ContentNav>
		</>
	);
}
