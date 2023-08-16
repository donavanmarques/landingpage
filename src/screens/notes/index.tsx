import { Footer } from "../../componets/footer";
import { Navbar } from "../../componets/navbar";
import { Body, Container } from "./styles";

export function Notes() {
  return (
    <>
      <Container>
        <Navbar />
        <Body>
          <h1>Artigos</h1>
        </Body>
        <Footer />
      </Container>
    </>
  );
}
