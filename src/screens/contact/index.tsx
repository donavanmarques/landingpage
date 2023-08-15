import { Button } from "../../componets/button";
import { Navbar } from "../../componets/navbar";

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
  FirstContent,
  MessageBox,
  SecondContent,
  ThirdContent,
} from "./styles";
import { Footer } from "../../componets/footer";

export function Contact() {
  return (
    <>
      <Body>
        <Navbar />
        <FirstContent>
          <h1>Entre em contato</h1>
          <p className="p3">Vamos construir algo incrível.</p>
        </FirstContent>
        <SecondContent>
          <CardEmail>
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
          </CardEmail>
        </SecondContent>
        <ThirdContent>
          <img src={Linkedin} alt="" />
          <img src={Github} alt="" />
          <img src={Discord} alt="" />
          <img src={Email} alt="" />
        </ThirdContent>
        <Footer />
      </Body>
    </>
  );
}
