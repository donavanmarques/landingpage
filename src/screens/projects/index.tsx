import { Footer } from "../../componets/footer";
import { Navbar } from "../../componets/navbar";
import { Body, Container } from "./styles";

export function Projects() {
  return (
    <>
      <Container>
        <Navbar />
        <Body>
          <h1>Projetos</h1>
        </Body>
        <Footer />
      </Container>
    </>
  );
}
