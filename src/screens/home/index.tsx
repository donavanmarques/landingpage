import { Navbar } from "../../componets/navbar";
import FirstPic from "../../assets/first-image.svg";
import JavaScript from "../../assets/javascript.svg";
import TypeScript from "../../assets/typescript.svg";
import Mongo from "../../assets/mongodb.svg";
import React from "../../assets/reactjs.svg";
import Native from "../../assets/reactnative.svg";
import Styled from "../../assets/styled.svg";
import Jest from "../../assets/jest.svg";
import Postgres from "../../assets/postgrest.svg";
import Docker from "../../assets/docker.svg";

import {
	AboutBar,
	AboutText,
	Body,
	BottomThirdContent,
	CardProject,
	FirstContent,
	FourthContent,
	FourthContentTop,
	LeftSidefirstContent,
	Projects,
	RightSidefirstContent,
	SecondContent,
	SkillsCard,
	ThirdContent,
	TopThirdContent,
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

						<Button textColor="#181818" color="#F3F3F3" text="Entre em contato" />
					</LeftSidefirstContent>
					<RightSidefirstContent>
						<img src={FirstPic} alt="" />
					</RightSidefirstContent>
				</FirstContent>
				<SecondContent>
					<AboutBar />
					<AboutText>
						<p className="p3">
							A front-end engineer and UI/UX designer helping startups turn their
							visions into a digital reality. I specialize in designing and building
							modern mobile and web-based apps.
						</p>
					</AboutText>
				</SecondContent>
				<ThirdContent>
					<TopThirdContent>
						<p className="p3">Projetos</p>
					</TopThirdContent>
					<Projects>
						<CardProject></CardProject>
						<CardProject></CardProject>
					</Projects>
					<BottomThirdContent>
						<Button textColor="#fff" color="#FFB800" text="Todos os projetos" />
					</BottomThirdContent>
				</ThirdContent>
				<FourthContent>
					<FourthContentTop>
						<p className="p3">Skills</p>
					</FourthContentTop>
					<SkillsCard>
						<img src={JavaScript} alt="" />
						<img src={TypeScript} alt="" />
						<img src={Mongo} alt="" />
						<img src={React} alt="" />
						<img src={Native} alt="" />
						<img src={Jest} alt="" />
						<img src={Postgres} alt="" />
						<img src={Docker} alt="" />
						<img src={Styled} alt="" />
					</SkillsCard>
				</FourthContent>
			</Body>
		</>
	);
}
