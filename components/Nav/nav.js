import React, { useState } from "react";
import { Link } from "gatsby";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import "../Nav/nav.scss";
import logo from "../../src/img/logo.png";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar id="nav" expand="lg" className="fixed-top">
        <NavbarBrand href="/">
          <Link to="/" className="logo">
            <img className="img-fluid logo" src={logo} alt="glaser mfg" />
          </Link>
        </NavbarBrand>
        <NavbarToggler className="custom-toggler" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/residential" className="nav-link">
                Residential
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/commercial" className="nav-link">
                Commercial
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/glaser-mfg" className="nav-link">
                Glaser MFG
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
