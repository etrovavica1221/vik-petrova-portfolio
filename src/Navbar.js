import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';
import './styles/Navbar.css';

function NavBar() {
    return (
      <Navbar id="navbar" expand="lg">
        <Link id="logo-container" to="/">
          <img id="logo" src={require("./styles/logo.png")} alt="logo" width="70" />   
        </Link>
        <Nav id="navbar-links" className="mr-auto" navbar>
          <Link to="/">
            <NavItem className="nav-item">
                About
            </NavItem>
          </Link>
          <Link to="/projects">
            <NavItem className="nav-item">
                Projects
            </NavItem>
          </Link>
          <Link to="/contact">
            <NavItem className="nav-item">
                Contact
            </NavItem>
          </Link>
        </Nav>
      </Navbar>  
    );
}
  
export default NavBar;