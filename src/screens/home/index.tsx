import { Navbar } from "../../componets/navbar";
import { Button } from "../../componets/button";
import { Footer } from "../../componets/footer";
import { Fade, Slide } from "react-awesome-reveal";
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

import {
	AboutBar,
	AboutText,
	Body,
	BottomCardProject,
	BottomSixtContent,
	BottomThirdContent,
	CardProject,
	Container,
	ContainerTag,
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
	Tag,
	ThirdContent,
	TopCardProject,
	TopSixtContent,
	TopThirdContent,
} from "./styles";

export function Home() {
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
								Embora desempenhe atualmente o papel de Analista, não pretendo me
								distanciar do código. Meus objetivos profissionais direcionam-se à busca
								de especialização na área de análise de sistemas, ao mesmo tempo em que
								almejo desenvolver uma base sólida de experiência no desenvolvimento de
								software.
							</p>
						</AboutText>
					</SecondContent>
				</Fade>
				<ThirdContent>
					<TopThirdContent>
						<h4>Projetos</h4>
					</TopThirdContent>
					<Projects>
						<Fade>
							<CardProject className="card">
								<TopCardProject></TopCardProject>
								<BottomCardProject>
									<p className="t2">BANANA HUB</p>
									<ContainerTag>
										<Tag>
											<p className="t1">JAVASCRIPT</p>
										</Tag>
										<Tag>
											<p className="t1">JAVASCRIPT</p>
										</Tag>
										<Tag>
											<p className="t1">JAVASCRIPT</p>
										</Tag>
									</ContainerTag>
									<p className="p1">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
										provident reiciendis, quia ipsa iure qui magnam labore voluptates.
										Commodi voluptatibus eius nihil hic molestiae velit esse odit harum
										rem fugit!
									</p>
								</BottomCardProject>
							</CardProject>
							<CardProject className="card">
								<TopCardProject></TopCardProject>
								<BottomCardProject>
									<p className="t2">BANANA HUB</p>
									<ContainerTag>
										<Tag>
											<p className="t1">JAVASCRIPT</p>
										</Tag>
										<Tag>
											<p className="t1">JAVASCRIPT</p>
										</Tag>
										<Tag>
											<p className="t1">JAVASCRIPT</p>
										</Tag>
									</ContainerTag>
									<p className="p1">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
										provident reiciendis, quia ipsa iure qui magnam labore voluptates.
										Commodi voluptatibus eius nihil hic molestiae velit esse odit harum
										rem fugit!
									</p>
								</BottomCardProject>
							</CardProject>
							<CardProject className="card">
								<TopCardProject></TopCardProject>
								<BottomCardProject>
									<p className="t2">BANANA HUB</p>
									<ContainerTag>
										<Tag>
											<p className="t1">JAVASCRIPT</p>
										</Tag>
										<Tag>
											<p className="t1">JAVASCRIPT</p>
										</Tag>
										<Tag>
											<p className="t1">JAVASCRIPT</p>
										</Tag>
									</ContainerTag>
									<p className="p1">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
										provident reiciendis, quia ipsa iure qui magnam labore voluptates.
										Commodi voluptatibus eius nihil hic molestiae velit esse odit harum
										rem fugit!
									</p>
								</BottomCardProject>
							</CardProject>
						</Fade>
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
