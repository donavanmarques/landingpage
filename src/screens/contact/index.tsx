import { Button } from "../../componets/button";
import { Navbar } from "../../componets/navbar";
import { Fade } from "react-awesome-reveal";

import Discord from "../../assets/discord-contact.svg";
import Linkedin from "../../assets/linkedin-contact.svg";
import Github from "../../assets/Github-icon.svg";
import Email from "../../assets/email-contact.svg";
import {
	Body,
	CardContent,
	CardEmail,
	CardRow,
	CardTitle,
	Container,
	FirstContent,
	MessageBox,
	SecondContent,
	ThirdContent,
} from "./styles";
import { Footer } from "../../componets/footer";

export function Contact() {
	return (
		<Container>
			<Navbar />

			<Body>
				<FirstContent>
					<Fade>
						<h1>Entre em contato</h1>
						<p className="p3">Vamos construir algo incrível.</p>
					</Fade>
				</FirstContent>

				<SecondContent>
					<CardEmail>
						<Fade>
							<CardTitle>
								<p className="t1">Novo e-mail</p>
							</CardTitle>
							<CardContent>
								<CardRow>
									<p className="t1">E-mail:</p>
									<p className="p1">Insira seu endereço de e-mail</p>
								</CardRow>
								<CardRow>
									<p className="t1">Nome:</p>
									<p className="p1">Insira seu nome</p>
								</CardRow>
								<CardRow>
									<p className="t1">Assunto</p>
									<p className="p1">Informe o assunto</p>
								</CardRow>
								<MessageBox placeholder="Escreva sua mensagem aqui" />
								<Button color="#181818" text="Enviar" textColor="#fff" />
							</CardContent>
						</Fade>
					</CardEmail>
				</SecondContent>

				<ThirdContent>
					<img className="icon" src={Linkedin} alt="" />
					<img className="icon" src={Github} alt="" />
					<img className="icon" src={Discord} alt="" />
					<img className="icon" src={Email} alt="" />
				</ThirdContent>
			</Body>

			<Footer />
		</Container>
	);
}
