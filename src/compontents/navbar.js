import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll'; 

function NavbarComponent() {
  return (
    <Navbar sticky='top' bg="dark" data-bs-theme="dark" expand="sm" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src='./assets/img2.png' alt="logo" className="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="intro" 
      spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500}
      className='navbarname'  href="#home">Home</Link>
            <Link to="skills" 
      spy={true} 
      smooth={true} 
      offset={-70} 
      duration={500} className='navbarname' href="#skils">Skills</Link>
            <Link to="projects" 
      spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500} className='navbarname' href="# projectsData">Projects</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComponent;
