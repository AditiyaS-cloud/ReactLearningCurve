import { useState } from "react";
import logo from "../assets/images/Logo.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <div className="title">
      <img className="logo" src={logo}></img>
    </div>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <Title />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link>Cart - {cartItems.length}</Nav.Link>
            </LinkContainer>
            {isLoggedIn ? (
              <Nav.Link onClick={() => setIsLoggedIn(false)}>Logout</Nav.Link>
            ) : (
              <Nav.Link onClick={() => setIsLoggedIn(true)}>Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
