import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SignUp from '../../Containers/Modules/signUp';

function Header() {
    const [openSignup, setOpenSignUp] = useState(false);
    const openSignUpModal = ()=>{
        setOpenSignUp(true)
        console.log("open")
    }
  return (
    <>
    <SignUp 
    show={openSignup}
    hide={()=>setOpenSignUp(false)}
    />
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">BNDAR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Explore</Nav.Link>
            <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item>Login</NavDropdown.Item>
              <NavDropdown.Item  onClick={openSignUpModal}>
                Sign Up
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;