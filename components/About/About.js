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
                  Whether you are an industrial facility looking for treatment
                  options for a Cooling Tower, Steam boiler, Closed Loop system,
                  pre treatment or are a residential customer looking to improve
                  your drinking water quality we can help.
                </p>
                <br />
                <p>
                  We tailor all of our water treatment solutions to help
                  optimize the efﬁciency and performance of your system to help
                  save you time, money and most importantly of all improve your
                  water quality.
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
