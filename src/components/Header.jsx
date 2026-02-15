import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header(props) {
  const authCtx = useContext(AuthContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>My Store</Navbar.Brand>

        <Nav className="ms-auto">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/store" className="nav-link">
            Store
          </NavLink>

          <NavLink to="/about" className="nav-link">
            About
          </NavLink>

          {!authCtx.isLoggedIn && (
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
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
            onClick={props.onShowCart}
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
