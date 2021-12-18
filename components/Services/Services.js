import React from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "reactstrap";
import ImageCard from "../ImageCard/ImageCard";

import res from "../../src/img/residential.jpg";
import comm from "../../src/img/commercial.jpg";

import "../../components/Services/services.scss";

const Services = () => {
  return (
    <>
      <Fade>
        <section className="services">
          <Container>
            <Row>
              <Col lg="4">
                <Fade delay={200}>
                  <ImageCard
                    bgImage={res}
                    btnText="Residential"
                    btnLink="/residential"
                  />
                </Fade>
              </Col>
              <Col lg="4">
                <Fade delay={400}>
                  <ImageCard
                    bgImage={comm}
                    btnText="Commercial"
                    btnLink="/commercial"
                  />
                </Fade>
              </Col>
              <Col lg="4">
                <Fade delay={600}>
                  <ImageCard
                    bgImage={res}
                    btnText="Glaser MFG"
                    btnLink="/glaser-mfg"
                  />
                </Fade>
              </Col>
            </Row>
          </Container>
        </section>
      </Fade>
    </>
  );
};

export default Services;
