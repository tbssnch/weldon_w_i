import React, { Component } from 'react';
import logo from './assets/logo.png';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
import './Navigation.css';


class Navigation extends Component {


  render() {
    return (
      <div className="Navigation">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
            <Image className="nav-img" src={logo}/>
            </Navbar.Brand>
          </Navbar.Header>
            <Nav>
              <NavDropdown eventKey={3} title="Menu" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1} href="#about">About</MenuItem>
                <MenuItem eventKey={3.2} href="#work">Work</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3} href="#contact">Contact</MenuItem>
              </NavDropdown>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
