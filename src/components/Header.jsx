import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";

function Header(){
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">My Store</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#">Store</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;