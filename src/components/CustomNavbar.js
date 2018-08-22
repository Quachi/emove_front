import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  NavDropdown,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';

class CustomNavbar extends Component {

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Logo eMove</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavDropdown eventKey={3} title="Louez un vehicule" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} href="rent-scoot">Scooter</MenuItem>
            <MenuItem eventKey={3.2} href="rent-car">Voiture</MenuItem>s
          </NavDropdown>
          <NavItem eventKey={2} href="register">
            Inscription
          </NavItem>
          <NavItem eventKey={3} href="login">
            connexion
          </NavItem>
          <NavItem eventKey={4} href="agencies">
            Agence
          </NavItem>
        </Nav>
      </Navbar >
    );
  }
}

export default CustomNavbar;
