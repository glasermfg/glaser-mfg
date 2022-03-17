import React from "react";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import Footer from "../../components/Footer/footer";

import image1 from "../img/steam-boiler.jpg";
import image2 from "../img/steam-boiler-2.jpg";

const SteamBoilers = () => {
  return (
    <>
      <Helmet>
        <title>Steam Boilers - Glaser MFG Water Concepts</title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <InnerHero
        title="Steam Boilers"
        description="Our Steam Boiler Treatment Program is designed to provide the optimum scale and corrosion protection to help prolonging the life of the boiler system."
      />
      <Fade>
        <InnerContent>
          <section className="inner">
            <Container>
              {/* One */}
              <Row>
                <Col lg="12">
                  <p>
                    Our Steam Boiler Treatment Program is designed to provide
                    the optimum scale and corrosion protection to help
                    prolonging the life of the boiler system and improving the
                    boiler efficiency to reduce the fuel costs and operational
                    downtime. The cost of your water management program
                    typically represents approximately 2–4% of the overall
                    operating costs to run your steam system. Just 1/16” of
                    scale can increase fuel consumption by 12%. That’s why it’s
                    important to invest in a well-executed program that delivers
                    results over the asset life cycle. Our Boiler Treatment
                    programs are tailored to prevent corrosion, prevent scale
                    build up and protect your return line.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <img className="img-fluid" src={image1} alt="steam boiler" />
                </Col>
                <Col lg="6">
                  <img
                    className="img-fluid pd-t-10-mb"
                    src={image2}
                    alt="steam boiler 2"
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

export default SteamBoilers;
