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
            <a href="home">Logo eMove</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavDropdown eventKey={3} title="Louez un vehicule" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Scooter</MenuItem>
            <MenuItem eventKey={3.2}>Voiture</MenuItem>
            {/* <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem> */}
          </NavDropdown>
          <NavItem eventKey={2} href="#">
            Inscription
          </NavItem>

          <NavDropdown eventKey={3} title="Connection" id="login">
            <Navbar.Form >
              <FormGroup>
                <FormControl type="text" placeholder="Email" />
                <FormControl type="password" placeholder="Password" />
              </FormGroup>{' '}
              <Button type="submit">Connection</Button>
            </Navbar.Form>
          </NavDropdown>
          
        </Nav>
      </Navbar >
    );
  }
}

export default CustomNavbar;
