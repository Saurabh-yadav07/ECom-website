import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header({ onShowCart }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          My Store
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/">
            Store
          </Nav.Link>

          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>

          <Nav.Link as={NavLink} to="/contact">
            Contact
          </Nav.Link>

          <Nav.Link onClick={onShowCart}>
            Cart
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
