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
            <MenuItem eventKey={3.1} href="/scooters">Scooter</MenuItem>
            <MenuItem eventKey={3.2} href="/rent-car">Voiture</MenuItem>
            {/* <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem> */}
          </NavDropdown>
          <NavItem eventKey={2} href="/register">
            Inscription
          </NavItem>
          <MenuItem eventKey={4} href="/login">Connection</MenuItem>

          <NavItem eventKey={4} href="/agencies">
            Agences
          </NavItem>
          
        </Nav>
      </Navbar >
    );
  }
}

export default CustomNavbar;
