import { useState } from "react";
import { CardProjects } from "../../componets/cardProject";
import { Footer } from "../../componets/footer";
import { Navbar } from "../../componets/navbar";

import Banana from "../../assets/banana-logo.svg";
import Darwin from "../../assets/darwin-logo.svg";
import Imbraforte from "../../assets/imbraforte-logo.svg";
import SulOxidos from "../../assets/sul-logo.svg";
import Triangulo from "../../assets/triangulo-logo.svg";
import Jugasa from "../../assets/jugasa-logo.svg";
import Drin from "../../assets/drin-logo.svg";
import Centercamp from "../../assets/centercamp-logo.svg";
import Livros from "../../assets/livros-logo.svg";

import * as Style from "./styles";

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
			tags: ["REACT", "TYPESCRIPT"],
			image: SulOxidos,
			color1: "#fff",
			color2: "#fff",
		},
		{
			title: "IMBRAFORTE",
			description:
				"Aplicação de gestão para soluções IOT dos dispositivos de segurança Imbraforte. Conta com recursos de monitoramento e controle para os usuários através de um app.",
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
				"Hub de gestão multicontas para vendedores do mercado livre. Conta com recursos de notificações, perguntas, reclamações, mensagens, análise de concorrentes, criação de anúncios e etc.",
			tags: ["REACT", "REACT NATIVE", "TYPESCRIPT"],
			image: Banana,
			color1: "#2C334F",
			color2: "#3B53B5",
		},
		{
			title: "CENTERCAMP",
			description:
				"Plataforma de e-commerce para a venda de cursos digitais. Conta com acesso aos cursos adquiridos em formato de vídeo ou pdf, realização de avaliações, geração de certificado e etc.",
			tags: ["REACT", "TYPESCRIPT"],
			image: Centercamp,
			color1: "#fff",
			color2: "#fff",
		},

		{
			title: "VIGILANCIA TRIÂNGULO",
			description:
				"Aplicação mobile para realização de rondas, check-in de pontos de fiscalização e apontamentos de inconsistências. Conta também com uma plataforma web destinada a gestão e monitoramento de rondas.",
			tags: ["REACT NATIVE", "TYPESCRIPT"],
			image: Triangulo,
			color1: "#FFCA51",
			color2: "#FAD37B",
		},

		{
			title: "DRIN ACADEMY",
			description:
				"Plataforma de educação e desenvolvimento de pessoas para empresas, conta com gestão de usuários e acesso aos cursos no formato de vídeo e pdf.",
			tags: ["REACT", "TYPESCRIPT"],
			image: Drin,
			color1: "#FFF",
			color2: "#FFF",
		},
		{
			title: "LIVROS ESCOLARES",
			description:
				"Aplicativo de e-commerce integrado a plataforma Wake/tray. Conta com home, integração de banners, navegação por produtos, categorias, carrinho e etc.",
			tags: ["REACT", "REACT NATIVE", "TYPESCRIPT"],
			image: Livros,
			color1: "#12141C",
			color2: "#293c85",
		},
	]);
	return (
		<Style.Container>
			<Navbar />
			<Style.Body>
				<Style.TitleProjects>
					<h1>Projetos</h1>
					<p className="p3">Projetos em que já trabalhei</p>
				</Style.TitleProjects>

				<Style.ProjectsDiv>
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
				</Style.ProjectsDiv>
			</Style.Body>

			<Footer />
		</Style.Container>
	);
}
