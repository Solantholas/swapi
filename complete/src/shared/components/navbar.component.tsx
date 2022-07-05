import { Container, Navbar as BootstrapNavbar, Nav } from "react-bootstrap";

function Navbar() {
  return (
    <BootstrapNavbar bg="light">
      <Container>
        <BootstrapNavbar.Brand href="/">React SWAPI</BootstrapNavbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Films/Table">Films</Nav.Link>
          <Nav.Link href="/People/Table">People</Nav.Link>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;