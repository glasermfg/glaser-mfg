import React from "react";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import Footer from "../../components/Footer/footer";

import image1 from "../img/cooling-tower.jpg";
import image2 from "../img/cooling-tower-2.jpg";

const CoolingTowers = () => {
  return (
    <>
      <Helmet>
        <title>Cooling Towers Glycol Systems - Glaser MFG Water Concepts</title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <InnerHero
        title="Cooling Towers Glycol Systems"
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
                    Cooling towers work by using heat exchange. Water is
                    constantly circulated through the system, and, when it
                    enters the cooling tower heated due to industrial processes,
                    it is exposed to the air, resulting in evaporation. This
                    reduces the temperature of the water enough that it can be
                    recirculated and used for cooling. This cycle of evaporation
                    requires the supply of water to be continuously replenished.
                    However, the water that is fed into the cooling system is
                    typically rife with contaminants, which can cause scale and
                    corrosion. The chemicals that water treatment companies use
                    are designed to address and prevent these issues. The cost
                    of your water management program represents approximately
                    2–4% of the overall operating costs to run your steam
                    system. Just 1/8” of scale can increase fuel consumption by
                    12%. That’s why it’s important to invest in a well-executed
                    program that delivers results over the asset life cycle.
                  </p>
                  <p>
                    The right combination of chemicals to use in your facility
                    depends on a range of factors, including what type of
                    cooling tower you have and the quality of the water being
                    fed into the system. Typically water treatment for cooling
                    towers involves the use of:
                  </p>
                  <p>
                    Scale and corrosion inhibitor – This chemical is designed to
                    control the build up of scale in the cooling towers using
                    all-organic corrosion inhibitors. Supplemental dispersants
                    will be required as the hardness, alkalinity, pH, cycles,
                    and heat load severity are increased. Biocides – This
                    chemical treatment is used to control the development of
                    potentially harmful microorganisms and Legionella.
                  </p>
                  <p>
                    Organic dispersants – In cooling towers that have some
                    fouling, scale build up or the accumulation of biofilms a
                    supplemental dispersant may be required.{" "}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <img
                    className="img-fluid"
                    src={image1}
                    alt="cooling towers"
                  />
                </Col>
                <Col lg="6">
                  <img
                    className="img-fluid pd-t-10-mb"
                    src={image2}
                    alt="cooling towers 2"
                  />
                </Col>
              </Row>
            </Container>
          </section>
        </InnerContent>
        <Footer />
      </Fade>
    </>
  );
};

export default CoolingTowers;
