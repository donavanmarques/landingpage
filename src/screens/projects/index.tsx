import { useState } from "react";
import { CardProjects } from "../../componets/cardProject";
import { Footer } from "../../componets/footer";
import { Navbar } from "../../componets/navbar";
import { Body, Container, ProjectsDiv, TitleProjects } from "./styles";

import Banana from "../../assets/banana-logo.svg";
import Darwin from "../../assets/darwin-logo.svg";
import Imbraforte from "../../assets/imbraforte-logo.svg";
import SulOxidos from "../../assets/sul-logo.svg";
import Triangulo from "../../assets/triangulo-logo.svg";
import Jugasa from "../../assets/jugasa-logo.svg";
import Drin from "../../assets/drin-logo.svg";
import Centercamp from "../../assets/centercamp-logo.svg";

interface IProjects {
	title: string;
	description: string;
	tags: string[];
	image: string;
	color1: string;
	color2: string;
}

export function Projects() {
	const [projects] = useState<IProjects[]>([
		{
			title: "CLUBE JUGASA",
			description:
				"Programa de pontos desenvolvido no modelo mobile, conta com integrações com o ERP para a quantificação de pontos, acompanhamento de serviços, e outras funcionalidades oferecidas no aplicativo.",
			tags: ["REACT", "REACT NATIVE", "TYPESCRIPT"],
			image: Jugasa,
			color1: "#0C3966",
			color2: "#226AB2",
		},
		{
			title: "SUL ÓXIDOS",
			description:
				"O projeto engloba uma plataforma de gestão laboratorial interna, configurações de ensaios e equações laboratoriais, controle de estoque, apontamentos de produção e controle de expedição.",
			tags: ["REACT", "REACT NATIVE", "TYPESCRIPT"],
			image: SulOxidos,
			color1: "#fff",
			color2: "#fff",
		},
		{
			title: "IMBRAFORTE",
			description:
				"Aplicação para as soluções de IOT dos equipamentos Imbraforte,conta com gestão de planos, integração com aparelhos Alexa.",
			tags: ["REACT", "REACT NATIVE", "TYPESCRIPT"],
			image: Imbraforte,
			color1: "#FEB400",
			color2: "#FAD37B",
		},
		{
			title: "DARWIN SAÚDE",
			description:
				"Software para clínicas e consultórios com base integrada, conta com agenda inteligente, prontuário eletrônico, prescrições, resultados de exames, evoluções e anamneses etc.",
			tags: ["REACT", "REACT NATIVE", "TYPESCRIPT"],
			image: Darwin,
			color1: "#0C918B",
			color2: "#03A775",
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
			title: "CENTERCAMP",
			description:
				"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			tags: ["REACT", "REACT NATIVE", "TYPESCRIPT"],
			image: Centercamp,
			color1: "#fff",
			color2: "#fff",
		},

		{
			title: "VIGILANCIA TRIÂNGULO",
			description:
				"Aplicação mobile para realização de rondas, check-in de pontos de fiscalização e apontamentos de inconsistências. Conta também com uma plataforma web destinada a gestão e monitoramento de rondas.",
			tags: ["REACT", "REACT NATIVE", "TYPESCRIPT"],
			image: Triangulo,
			color1: "#FFCA51",
			color2: "#FAD37B",
		},

		{
			title: "DRIN ACADEMY",
			description: "Plataforma de educação para empresas",
			tags: ["REACT", "REACT NATIVE", "TYPESCRIPT"],
			image: Drin,
			color1: "#FFF",
			color2: "#FFF",
		},
	]);
	return (
		<Container>
			<Navbar />
			<Body>
				<TitleProjects>
					<h1>Projetos</h1>
					<p className="p3">Projetos em que já trabalhei</p>
				</TitleProjects>

				<ProjectsDiv>
					{projects.map((element) => {
						return (
							<CardProjects
								color1={element.color1}
								color2={element.color2}
								description={element.description}
								image={element.image}
								tags={element.tags}
								title={element.title}
							/>
						);
					})}
				</ProjectsDiv>
			</Body>

			<Footer />
		</Container>
	);
}
