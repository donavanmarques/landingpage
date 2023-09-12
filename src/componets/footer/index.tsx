import {
	ContainerFooter,
	ContentFooter,
	GradientBottom,
	GradientDiv,
	GradientDivMid,
	LeftSide,
	Links,
	RightSide,
} from "./styles";

import Donavan from "../../assets/donavan.svg";

export function Footer() {
	return (
		<>
			<ContainerFooter>
				<GradientBottom />
				<GradientDivMid />
				<GradientDiv />

				<ContentFooter>
					<LeftSide>
						<img src={Donavan} alt="" />
					</LeftSide>
					<RightSide>
						<Links>
							<p className="t2">Links</p>
							<a href="http://localhost:5173/" className="p2">
								Home
							</a>
							<a href="http://localhost:5173/projects" className="p2">
								Projetos
							</a>
							<a href="http://localhost:5173/contact" className="p2">
								Contato
							</a>
						</Links>
						<Links>
							<p className="t2">Outros lugares</p>
							<a
								href="https://www.linkedin.com/in/donavan-marques-008032163/"
								target="_blank"
								className="p2"
							>
								LinkedIn
							</a>
							<a
								href="https://github.com/donavanmarques"
								target="_blank"
								className="p2"
							>
								Github
							</a>
							<a
								href="https://www.instagram.com/donavanmarques/"
								target="_blank"
								className="p2"
							>
								Instagram
							</a>
						</Links>
					</RightSide>
				</ContentFooter>
			</ContainerFooter>
		</>
	);
}
