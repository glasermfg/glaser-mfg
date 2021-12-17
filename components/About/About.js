import React from "react";
import { Container, Row, Col } from "reactstrap";

import "../Hero/hero.scss";

const About = () => {
  return (
    <>
      <section className="about">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>About Glaser MFG Concepts</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                imperdiet nunc sit amet laoreet consequat. Nam fermentum, felis
                sit amet lacinia sollicitudin, odio leo sagittis metus, eu
                molestie erat leo in massa. Cras quis feugiat lacus. Suspendisse
                a eros consequat, consectetur neque eget.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
