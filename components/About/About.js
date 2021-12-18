import React from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "reactstrap";

import "../About/about.scss";

const About = () => {
  return (
    <>
      <Fade delay={500}>
        <section className="about">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2>About Glaser MFG Concepts</h2>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus imperdiet nunc sit amet laoreet consequat. Nam
                  fermentum, felis sit amet lacinia sollicitudin, odio leo
                  sagittis metus, eu molestie erat leo in massa. Cras quis
                  feugiat lacus. Suspendisse a eros consequat, consectetur neque
                  eget.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </Fade>
    </>
  );
};

export default About;
