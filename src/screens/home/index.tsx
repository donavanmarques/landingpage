import { Navbar } from "../../componets/navbar";
import FirstPic from "../../assets/first-image.svg";

import {
	Body,
	FirstContent,
	LeftSidefirstContent,
	RightSidefirstContent,
} from "./styles";
import { Button } from "../../componets/button";

export function Home() {
	return (
		<>
			<Body>
				<Navbar />
				<FirstContent>
					<LeftSidefirstContent>
						<h1>Sou, Donavan </h1>
						<p className="p3">
							A front-end engineer and UI/UX designer helping startups turn their
							visions into a digital reality. I specialize in designing and building
							modern mobile and web-based apps.
						</p>

						<Button color="#F3F3F3" text="Donavan" />
					</LeftSidefirstContent>
					<RightSidefirstContent>
						<img src={FirstPic} alt="" />
					</RightSidefirstContent>
				</FirstContent>
			</Body>
		</>
	);
}
