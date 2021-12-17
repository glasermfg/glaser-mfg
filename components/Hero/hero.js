import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "gatsby";
import Button from "../Button/button";

import "../Hero/hero.scss";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <div className="bg">
                <h1>Industrial Products</h1>
                <p>That exceed industry standards</p>
                <Link to="/contact">
                  <Button>Get Started</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
