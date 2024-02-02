import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../media/logo.png';
import NavRight from './NavRight';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NetflixNavbar() {
  return (
    <Navbar
      expand="lg"
      data-bs-theme="dark"
      className="align-content-center"
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo Netflix" style={{ width: '100px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tvshows">Tv Shows</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#recent">Recently Added</Nav.Link>
            <Nav.Link href="#mylist">My List</Nav.Link>
            <NavDropdown title="Sort By" id="nav-dropdown">
              <NavDropdown.Item href="#genre">Genre</NavDropdown.Item>
              <NavDropdown.Item href="#mostwatched">
                Most Watched
              </NavDropdown.Item>
              <NavDropdown.Item href="#recent">Most Recent</NavDropdown.Item>
              <NavDropdown.Item href="#picks">Our Picks</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <NavRight />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NetflixNavbar;
