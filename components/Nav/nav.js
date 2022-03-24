import React, { useState } from "react";
import { Link } from "gatsby";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
              <Link to="/about" className="nav-link">
                About
              </Link>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Industrial Water Treatment
              </DropdownToggle>
              <DropdownMenu right>
                <Link to="/industrial-water-treatment">
                  <DropdownItem>Industrial Water Treatment</DropdownItem>
                </Link>
                <Link to="/steam-boilers">
                  <DropdownItem>Steam Boilers</DropdownItem>
                </Link>
                <Link to="/closed-loop">
                  <DropdownItem>
                    Closed Loop System Heating and Cooling
                  </DropdownItem>
                </Link>
                <Link to="/cooling-towers">
                  <DropdownItem>Cooling Towers Glycol Systems</DropdownItem>
                </Link>
                <Link to="/water-softener-systems">
                  <DropdownItem>Water Softener Systems</DropdownItem>
                </Link>
                <Link to="/reverse-osmosis-systems">
                  <DropdownItem>Reverse Osmosis Systems</DropdownItem>
                </Link>
                <Link to="/iron-filtration-water-treatment">
                  <DropdownItem>
                    Iron Filtration and Water Treatment Services
                  </DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Residential Water Treatment
              </DropdownToggle>
              <DropdownMenu right>
                <Link to="/residential-water-treatment">
                  <DropdownItem>Residential Water Treatment</DropdownItem>
                </Link>
                <Link to="/water-softener-systems">
                  <DropdownItem>Water Softener Systems</DropdownItem>
                </Link>
                <Link to="/reverse-osmosis-systems">
                  <DropdownItem>Reverse Osmosis Systems</DropdownItem>
                </Link>
                <Link to="/ultraviolet-sterilizer">
                  <DropdownItem>
                    Ultraviolet Sterilizer (UV system)
                  </DropdownItem>
                </Link>
                <Link to="/iron-filtration-sulfur-systems">
                  <DropdownItem>
                    Iron Filtration and Sulfur Systems
                  </DropdownItem>
                </Link>
                <Link to="/carbon-filters">
                  <DropdownItem>Carbon Filters</DropdownItem>
                </Link>
                <Link to="/ro-membrane-uv-bulbs">
                  <DropdownItem>
                    RO Membrane and UV Bulbs Replacements
                  </DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link to="/service-maintenance-plans" className="nav-link">
                Service & Maintenance
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" className="nav-link">
                Request A Quote
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
