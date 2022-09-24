import React from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {useDispatch,useSelector} from 'react-redux';


export const Header = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state)=>state.CartReducer)

  console.log(cartState,"state")
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Image src="/images/logo.png" style={{width:'200px'}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register">
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
