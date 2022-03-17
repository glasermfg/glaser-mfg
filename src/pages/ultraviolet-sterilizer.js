import React from "react";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import Footer from "../../components/Footer/footer";

import image1 from "../img/uv.jpg";
import image2 from "../img/uv-2.jpg";

const UltravioletSterilizer = () => {
  return (
    <>
      <Helmet>
        <title>
          Ultraviolet Sterilizer (UV system) - Glaser MFG Water Concepts
        </title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <InnerHero
        title="Ultraviolet Sterilizer (UV system)"
        description="Ultraviolet water purifier technology seeks to use the same process as nature to provide drinking water that is completely Safe, Clean, and Fresh."
      />
      <Fade>
        <InnerContent>
          <section className="inner">
            <Container>
              {/* One */}
              <Row>
                <Col lg="12">
                  <p>
                    Ultraviolet water purifier technology seeks to use the same
                    process as nature to provide drinking water that is
                    completely Safe, Clean, and Fresh. In nature, the sun
                    produces UV rays, which have a germicidal effect on disease
                    causing pathogens in water. When these contaminants are
                    exposed to UV light, they are rendered harmless, and the
                    output water is considered disinfected for human
                    consumption. UV technology is proven to control
                    microbiological (bacteria & virus) issues in water including
                    E. coli, Cryptosporidium and Giardia lamblia. The UV
                    purifier doesn't add or remove anything from the water and
                    is extremely cost effective. UV purification affects
                    waterborne contaminants and disease-causing pathogens with a
                    99.9% kill rate or better. The result is high quality water
                    that is clean, clear, pure, and safe drinking water for your
                    family.
                  </p>
                  <p>
                    We offer 6 to 30 GPM UV Systems with LED display showing
                    lamp life remaining and audible indicator. We also offer NSF
                    UV systems and bulbs
                  </p>
                  <p>Some of the Benefits of a UV system include:</p>
                  <ul>
                    <li>
                      {" "}
                      By exposing contaminated water to high-intensity UV light,
                      disease-causing microorganisms are rendered harmless.
                    </li>
                    <li>
                      UV purification affects waterborne contaminants and
                      disease-causing pathogens with a 99.9% kill rate or
                      better.
                    </li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <img
                    className="img-fluid"
                    src={image1}
                    alt="Ultraviolet Sterilizer (UV system)"
                  />
                </Col>
                <Col lg="6">
                  <img
                    className="img-fluid"
                    src={image2}
                    alt="Ultraviolet Sterilizer (UV system) 2"
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

export default UltravioletSterilizer;
