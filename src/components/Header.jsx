import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header({ onShowCart }) {
  const authCtx = useContext(AuthContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          My Store
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>

          <Nav.Link as={NavLink} to="/store">
            Store
          </Nav.Link>

          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>

          {!authCtx.isLoggedIn && (
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
          )}

          {authCtx.isLoggedIn && (
            <button
              onClick={authCtx.logout}
              className="btn btn-outline-light ms-2"
            >
              Logout
            </button>
          )}

          <button
            onClick={onShowCart}
            className="btn btn-primary ms-3"
          >
            Cart
          </button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;