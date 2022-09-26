import React from "react";
import { Container, Nav, Navbar, Image,NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {useDispatch,useSelector} from 'react-redux';
import {userLogout} from '../Actions/userAction'


export const Header = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state)=>state.CartReducer)
  const userState = useSelector((state)=>state.userLoginReducer);
  const currentLoggedInUser = userState;
  const handleLogOut =()=>{
    dispatch(userLogout())
  }
  console.log(currentLoggedInUser,userState,"state")
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
              {currentLoggedInUser.name ? (<LinkContainer to="/">
                <NavDropdown
              id="nav-dropdown-light-example"
              title={currentLoggedInUser.name}
              menuVariant="light"
            >
              <NavDropdown.Item href="#action/3.1">Order</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogOut}>
                Logout 
              </NavDropdown.Item>
            </NavDropdown>
              </LinkContainer >) : ( <><LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register">
                <Nav.Link>Register</Nav.Link>
              </LinkContainer></>)
              }
             
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
