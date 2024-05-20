import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const NavbarComponent = ({ loginState }) => {
    const navigate = useNavigate();
    const handleLogoutClick = () => {
        loginState.setLoggedIn(false);
        //Hard-coded cookie name. Make sure it is in sync with CookieUtil in backend.
        Cookies.remove("JWT");
        navigate('/login');
    }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/home">Variant</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/home"}>
                Home
              </Nav.Link>
            </Nav>
            <Nav className="pull-right">
              <button onClick={handleLogoutClick}>Logout</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;