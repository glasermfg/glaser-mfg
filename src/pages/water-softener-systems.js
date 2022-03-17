import React from "react";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import Footer from "../../components/Footer/footer";

import image1 from "../img/water-softener.webp";

const WaterSoftenerSystems = () => {
  return (
    <>
      <Helmet>
        <title>Water Softener Systems - Glaser MFG Water Concepts</title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <InnerHero
        title="Water Softener Systems"
        description="Cooling towers work by using heat exchange. Water is constantly circulated through the system, and, when it enters the cooling tower heated due to industrial processes."
      />
      <Fade>
        <InnerContent>
          <section className="inner">
            <Container>
              {/* One */}
              <Row>
                <Col lg="12">
                  <p>
                    When hardness minerals are combined with heat, it forms a
                    build up of scale in your Boiler, Cooling Tower and
                    plumbing. We have a wide selection of softeners, and all of
                    our products can be customized to provide the ultimate water
                    solution. You'll enjoy fast, friendly & knowledgeable
                    service & competitive prices.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <img
                    className="img-fluid"
                    src={image1}
                    alt="Water Pre Treatment & Filtration"
                  />
                </Col>
                <Col lg="6">&nbsp;</Col>
              </Row>
            </Container>
          </section>
        </InnerContent>
        <Footer />
      </Fade>
    </>
  );
};

export default WaterSoftenerSystems;
