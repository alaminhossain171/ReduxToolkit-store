import React from "react";
import { useSelector } from "react-redux";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavbarMenu = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Redux-toolkit-store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" style={{ textDecoration: "none" }}>
                <Nav.Link href="/">Home</Nav.Link>
              </Link>
              <Link to="/cart" style={{ textDecoration: "none" }}>
                <Nav.Link href="/cart">Cart</Nav.Link>
              </Link>
              <Nav.Link style={{ fontWeight: "bold" }}>
                Cart Items:{items.length}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavbarMenu;
