import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link className="navbar-brand" to="/">
            WeatherWise
          </Link>
          <Nav className="me-auto">
            <Link className="nav-link" href="#home">
              Home
            </Link>
            <Nav.Link href="#features" disabled>
              Work in Progress
            </Nav.Link>
            <Nav.Link href="#pricing" disabled>
              Work in progress
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
