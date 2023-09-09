import { Button } from "../../componets/button";
import { Navbar } from "../../componets/navbar";
import { Fade } from "react-awesome-reveal";
import { Footer } from "../../componets/footer";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import api from "../../services/api";

import Discord from "../../assets/discord-contact.svg";
import Linkedin from "../../assets/linkedin-contact.svg";
import Github from "../../assets/Github-icon.svg";
import Email from "../../assets/email-contact.svg";

import * as Style from "./styles";

interface IContactData {
	email: string;
	name: string;
	subject: string;
	message: string;
}

const contactSchema = z.object({
	email: z.string().nonempty("Campo obrigatório*").email("E-mail inválido"),
	name: z.string().nonempty("Campo obrigatório*"),
	subject: z.string().nonempty("Campo obrigatório*"),
	message: z.string().nonempty("Campo obrigatório*"),
});

export function Contact() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IContactData>({
		resolver: zodResolver(contactSchema),
	});

	async function sendEmail(data: IContactData) {
		const obj = {
			email: data.email,
			name: data.name,
			subject: data.subject,
			message: data.message,
		};

		try {
			await api.post(`/enviar_formulario`, obj).then((res) => {
				console.log(res.data);
				alert("e-mail enviado");
			});
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Style.Container>
			<Navbar />

			<Style.Body>
				<Style.FirstContent>
					<Fade>
						<h1>Entre em contato</h1>
						<p className="p3">Vamos construir algo incrível.</p>
					</Fade>
				</Style.FirstContent>

				<Style.SecondContent>
					<Style.CardEmail onSubmit={handleSubmit(sendEmail)}>
						<Fade>
							<Style.CardTitle>
								<p className="t2">Novo e-mail</p>
							</Style.CardTitle>
							<Style.CardContent>
								<Style.CardRow>
									<p className="t2">E-mail:</p>
									<input
										placeholder="Insira seu endereço de e-mail"
										type="text"
										{...register("email")}
									/>
								</Style.CardRow>
								{errors.email && <span>{errors.email.message}</span>}
								<Style.CardRow>
									<p className="t2">Nome:</p>
									<input
										placeholder="Insira seu nome"
										type="text"
										{...register("name")}
									/>
								</Style.CardRow>
								{errors.name && <span>{errors.name.message}</span>}
								<Style.CardRow>
									<p className="t2">Assunto:</p>
									<input
										placeholder="Informe o assunto"
										type="text"
										{...register("subject")}
									/>
								</Style.CardRow>
								{errors.subject && <span>{errors.subject.message}</span>}
								<Style.MessageBox
									placeholder="Escreva sua mensagem aqui "
									{...register("message")}
								/>
								{errors.message && <span>{errors.message.message}</span>}
								<Button color="#181818" text="Enviar" textColor="#fff" />
							</Style.CardContent>
						</Fade>
					</Style.CardEmail>
				</Style.SecondContent>

				<Style.ThirdContent>
					<img className="icon" src={Linkedin} alt="" />
					<img className="icon" src={Github} alt="" />
					<img className="icon" src={Discord} alt="" />
					<img className="icon" src={Email} alt="" />
				</Style.ThirdContent>
			</Style.Body>

			<Footer />
		</Style.Container>
	);
}
