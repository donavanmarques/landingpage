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
							<p className="p2">About</p>
							<p className="p2">Work</p>
							<p className="p2">Tech Stack</p>
							<p className="p2">Contact</p>
						</Links>
						<Links>
							<p className="t2">Elsewhere</p>
							<p className="p2">Email</p>
							<p className="p2">LinkedIn</p>
							<p className="p2">GitHub</p>
							<p className="p2">Twitter</p>
							<p className="p2">Discord</p>
						</Links>
					</RightSide>
				</ContentFooter>
			</ContainerFooter>
		</>
	);
}
