import React from "react";
import { Container, Row, Col } from "reactstrap";
import ImageCard from "../ImageCard/ImageCard";

import res from "../../src/img/residential.jpg";
import comm from "../../src/img/commercial.jpg";

const Services = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg="4">
            <ImageCard
              bgImage={res}
              btnText="Residential"
              btnLink="/residential"
            />
          </Col>
          <Col lg="4">
            <ImageCard
              bgImage={comm}
              btnText="Commercial"
              btnLink="/commercial"
            />
          </Col>
          <Col lg="4">
            <ImageCard
              bgImage={res}
              btnText="Glaser MFG"
              btnLink="/glaser-mfg"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
