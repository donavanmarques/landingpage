import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Navbar } from "../../componets/navbar";
import { Button } from "../../componets/button";
import { Footer } from "../../componets/footer";
import { CardProjects } from "../../componets/cardProject";
import Pdf from "../../assets/pdf.svg";
import FirstPic from "../../assets/first-image.svg";
import SecondPic from "../../assets/second-image.svg";
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
import Banana from "../../assets/banana-logo.svg";
import Darwin from "../../assets/darwin-logo.svg";
import Jugasa from "../../assets/jugasa-logo.svg";

import {
	AboutBar,
	AboutText,
	Body,
	BottomSixtContent,
	BottomThirdContent,
	Container,
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

interface IProjects {
	title: string;
	description: string;
	tags: string[];
	image: string;
	color1: string;
	color2: string;
}

export function Home() {
	const [projects] = useState<IProjects[]>([
		{
			title: "CLUBE JUGASA",
			description:
				"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			tags: ["REACT", "REACT NATIVE", "TYPESCRIPT"],
			image: Jugasa,
			color1: "#0C3966",
			color2: "#226AB2",
		},
		{
			title: "BANANA HUB",
			description:
				"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			tags: ["REACT", "REACT NATIVE", "TYPESCRIPT"],
			image: Banana,
			color1: "#2C334F",
			color2: "#3B53B5",
		},
		{
			title: "DARWIN SAÚDE",
			description:
				"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			tags: ["REACT", "REACT NATIVE", "TYPESCRIPT"],
			image: Darwin,
			color1: "#0C918B",
			color2: "#03A775",
		},
	]);
	return (
		<Container>
			<Navbar />
			<Body>
				<FirstContent>
					<Fade>
						<LeftSidefirstContent>
							<h1>
								<span>Sou</span> Donavan,
							</h1>
							<p className="p3">
								tenho 25 anos e sou formado em análise e desenvolvimento de sistemas.
								Possuo dois anos de experiência direta com a área de desenvolvimento de
								softwares, sendo o primeiro ano como desenvolvedor, e o segundo como
								analista de requisitos.
							</p>

							<Button
								link="/contact"
								textColor="#181818"
								color="#F3F3F3"
								text="Entrar em contato"
							/>
						</LeftSidefirstContent>
						<RightSidefirstContent>
							<img src={FirstPic} alt="" />
						</RightSidefirstContent>
					</Fade>
				</FirstContent>
				<Fade>
					<SecondContent>
						<img className="jello-horizontal" src={Pdf} alt="" />
						<AboutBar />
						<AboutText>
							<p className="p2">
								Meus objetivos profissionais direcionam-se à busca de especialização na
								área de análise de sistemas, ao mesmo tempo em que almejo desenvolver
								uma base sólida de experiência no desenvolvimento de software.
							</p>
						</AboutText>
					</SecondContent>
				</Fade>
				<ThirdContent>
					<TopThirdContent>
						<h4>Projetos</h4>
					</TopThirdContent>
					<Projects>
						{projects.map((element: IProjects) => {
							return (
								<CardProjects
									color1={element?.color1}
									color2={element?.color2}
									image={element.image}
									description={element.description}
									title={element.title}
									tags={element.tags}
								/>
							);
						})}
					</Projects>
					<BottomThirdContent>
						<Button
							textColor="#fff"
							color="#FFB800"
							text="Todos os projetos"
							link="/projects"
						/>
					</BottomThirdContent>
				</ThirdContent>
				<FourthContent>
					<FourthContentTop>
						<h4>Skills</h4>
					</FourthContentTop>
					<SkillsCard>
						<img className="vibrate-1" src={JavaScript} alt="" />
						<img className="vibrate-1" src={TypeScript} alt="" />
						<img className="vibrate-1" src={Mongo} alt="" />
						<img className="vibrate-1" src={React} alt="" />
						<img className="vibrate-1" src={Native} alt="" />
						<img className="vibrate-1" src={Jest} alt="" />
						<img className="vibrate-1" src={Postgres} alt="" />
						<img className="vibrate-1" src={Docker} alt="" />
						<img className="vibrate-1" src={Styled} alt="" />
					</SkillsCard>
				</FourthContent>
				<FifthContent>
					<Slide>
						<LeftSideFifthContent>
							<h2>Vamos trabalhar juntos</h2>
							<p className="p3">
								Deseja discutir a oportunidade de desenvolver algo legal? Eu estou
								pronto quando você estiver.
							</p>
							<Button
								link="/contact"
								color="#1A1A1A"
								text="Entrar em contato"
								textColor="#ffff"
							/>
						</LeftSideFifthContent>
						<RightSideFifthContent>
							<img src={SecondPic} alt="" />
						</RightSideFifthContent>
					</Slide>
				</FifthContent>
				<Fade>
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
				</Fade>
			</Body>
			<Footer />
		</Container>
	);
}
