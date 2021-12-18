import React from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "reactstrap";
import { Link } from "gatsby";
import Button from "../Button/button";

import "../Footer/footer.scss";

const Footer = () => {
  return (
    <>
      <Fade>
        <footer>
          <Container>
            <Row>
              <Col lg="6">
                <h2>Contact Us Today</h2>
                <p id="subtitle">Contact us today for your free quote.</p>
              </Col>
              <Col lg="6" className="text-center">
                <Link to="/contact">
                  <Button>Connect With Us</Button>
                </Link>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col lg="3">
                <p>
                  #27 - 547 Main Street E.
                  <br />
                  Milton, Ontario
                  <br />
                  L9T 3J2
                </p>
              </Col>
              <Col lg="3">
                <p>
                  <a href="tel:1-905-876-4420">1-905-876-4420</a>
                </p>
              </Col>
              <Col lg="3">
                <a href="mailto:sales@glasermfg.ca">sales@glasermfg.ca</a>
              </Col>
              <Col lg="3">
                <p className="grey">
                  &copy; {new Date().getFullYear()} Glaser Manufacturing.
                  <br />
                  All Rights Reserved. <br />
                </p>
                <p class="infused">
                  <a href="https://infused.agency">Niagara web design</a> by
                  Infused.
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
      </Fade>
    </>
  );
};

export default Footer;
