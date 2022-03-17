import React from "react";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import Footer from "../../components/Footer/footer";

import image1 from "../img/ro.webp";

const ROMembrane = () => {
  return (
    <>
      <Helmet>
        <title>
          RO Membrane &amp; UV Bulbs Replacements - Glaser MFG Water Concepts
        </title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <InnerHero
        title="RO Membrane &amp; UV Bulbs Replacements"
        description="Granulated Activated Carbon (GAC) is universally recognized and widely used as an effective adsorbent for a wide variety of organic contaminants, industrial chemicals, and trihalomethanes (THMs)."
      />
      <Fade>
        <InnerContent>
          <section className="inner">
            <Container>
              {/* One */}
              <Row>
                <Col lg="12">
                  <p>
                    We carry a wide variety of replacement components of
                    Filters, Filter housings, Ultraviolet Sterilizers Bulbs and
                    sleeves, RO Membranes, Injection Pumps, Valves, fittings,
                    and other accessories. Call our order desk today for pricing
                    & availability.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <img
                    className="img-fluid"
                    src={image1}
                    alt="Carbon Filters"
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

export default ROMembrane;
