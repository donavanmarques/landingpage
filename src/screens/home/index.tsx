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
import Gmail from "../../assets/gmail.svg";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";

import {
	AboutBar,
	AboutText,
	Body,
	BottomSixtContent,
	BottomThirdContent,
	CardProject,
	FifthContent,
	FirstContent,
	FourthContent,
	FourthContentTop,
	LeftSideFifthContent,
	LeftSidefirstContent,
	MidSixtContent,
	Projects,
	RightSideFifthContent,
	RightSidefirstContent,
	SecondContent,
	SixtContent,
	SkillsCard,
	ThirdContent,
	TopSixtContent,
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
						<h4>Projetos</h4>
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
						<h4>Skills</h4>
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
				<FifthContent>
					<LeftSideFifthContent>
						<h2>Vamos trabalhar juntos</h2>
						<p className="p3">
							Deseja discutir a oportunidade de desenvolver algo legal? Eu estou pronto
							quando você estiver.
						</p>
					</LeftSideFifthContent>
					<RightSideFifthContent>
						<Button color="#1A1A1A" text="Entrar em contato" textColor="#ffff" />
					</RightSideFifthContent>
				</FifthContent>
				<SixtContent>
					<TopSixtContent>
						<img src={Gmail} alt="" />
						<img src={Linkedin} alt="" />
						<img src={Github} alt="" />
					</TopSixtContent>
					<MidSixtContent>
						<p className="p2">Projetos</p>
						<p className="p2">Contato</p>
					</MidSixtContent>
					<BottomSixtContent></BottomSixtContent>
				</SixtContent>
			</Body>
		</>
	);
}
