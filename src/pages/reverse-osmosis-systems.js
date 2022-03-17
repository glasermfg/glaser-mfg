import React from "react";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import Footer from "../../components/Footer/footer";

import image1 from "../img/reverse-osmosis.jpg";

const ReverseOsmosisSystems = () => {
  return (
    <>
      <Helmet>
        <title>Reverse Osmosis Systems - Glaser MFG Water Concepts</title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <InnerHero
        title="Reverse Osmosis Systems"
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
                    Reverse osmosis (RO) membranes are commonly used as a
                    filtration method to remove many types of dissolved solids
                    from solutions by applying pressure to the solution when it
                    is on one side of a selective membrane. The result is that
                    the solute is retained on the pressurized side of the
                    membrane and the pure solvent is allowed to pass to the
                    other side.
                  </p>
                  <p>
                    We offer custom made RO systems for industrial Pretreatment
                    and Process water. Our high efficiency RO systems can
                    produce at 85% efficiency. The RO system will remove
                    pollutants, improve taste, odor and appearance for high
                    quality purified water. Our high efficiency RO units can
                    also replace the need for a water softener in some
                    applications and eliminate the need to ever buy salt again.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <img
                    className="img-fluid"
                    src={image1}
                    alt="Reverse Osmosis Systems"
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

export default ReverseOsmosisSystems;
