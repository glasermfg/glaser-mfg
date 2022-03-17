import React from "react";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import Footer from "../../components/Footer/footer";

import image1 from "../img/carbon-filters.jpg";

const CarbonFilters = () => {
  return (
    <>
      <Helmet>
        <title>Carbon Filters - Glaser MFG Water Concepts</title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <InnerHero
        title="Carbon Filters"
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
                    Granulated Activated Carbon (GAC) is universally recognized
                    and widely used as an effective adsorbent for a wide variety
                    of organic contaminants, industrial chemicals, and
                    trihalomethanes (THMs). Carbon is extremely porous and
                    provides a large surface area for contaminants to collect,
                    such as sediment and rust. It will absorb chlorine and other
                    odors and tastes. It is widely used to treat heavily
                    chlorinated municipalities, removing harmful chlorine.
                  </p>
                  <p>Some of the Benefits of a GAC Filter include:</p>
                  <ul>
                    <li>
                      Removal of sediment, bad tastes, stains, color, and odors.
                    </li>
                    <li>
                      Removes sediment and turbidity as small as 20 microns
                    </li>
                    <li>
                      User-Friendly LCD display shows time of day, regeneration
                      cycle in progress and remaining capacity
                    </li>
                    <li>48-hour memory back up</li>
                  </ul>
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

export default CarbonFilters;
