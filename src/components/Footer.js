import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="bottom">
      <Container>
        <Navbar.Text style={{ margin: "auto" }}>
          @2023 FOODY FOLKS : Created by{" "}
          <a
            target="_blank"
            href="https://github.com/AditiyaS-cloud/ReactLearningCurve"
          >
            Aditiya Srivastava
          </a>{" "}
          with ❤️ INDIA@2023
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;
