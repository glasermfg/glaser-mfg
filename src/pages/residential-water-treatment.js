import React from "react";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import Footer from "../../components/Footer/footer";

import "../scss/inner.scss";

const Residential = () => {
  return (
    <>
      <Helmet>
        <title>Residential Water Treatment - Glaser MFG Water Concepts</title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <InnerHero
        title="Residential Water Treatment"
        description="description"
      />
      <Fade>
        <InnerContent>
          <section className="inner">
            <Container>
              {/* One */}
              <Row>
                <Col lg="12">
                  <h2>Water Softener Systems</h2>
                  <p>
                    When hardness minerals are combined with heat, it forms a
                    build up of scale in your plumbing, water heater and other
                    water using appliances and fixtures. When combined with
                    soap, the minerals form soap curds or scum causing dry and
                    itchy skin, lifeless hair, and dull laundry. We have a wide
                    selection of softeners, and all of our products can be
                    customized to provide the ultimate water solution. You'll
                    enjoy fast, friendly & knowledgeable service & competitive
                    prices.
                  </p>
                  <p>Some of the benefits of a Softener include:</p>
                  <ul>
                    <li>
                      Prevent scale build up and unwanted stains on fixtures and
                      appliances
                    </li>
                    <li>Soft silky hair & skin</li>
                    <li>Clear dishes & glassware</li>
                    <li>Bright whites, vibrant colors</li>
                    <li>Use up to 75% less soap</li>
                    <li>Lower heating costs</li>
                    <li>Protection for plumbing & appliances</li>
                  </ul>
                  <h2>Reverse Osmosis Systems</h2>
                  <p>
                    Reverse Osmosis is the most popular solution for homeowners
                    who want high quality water but more convenience (no lifting
                    and storing of heavy jugs) and an economical alternative to
                    bottled water. This proven reverse-osmosis method removes
                    impurities and provides a steady supply of highly purified
                    water you can depend on right from your tap. The RO System
                    not only removes tiny particles suspended in water; it also
                    removes contaminants that are dissolved in water that
                    conventional filters cannot remove. Easily installed in any
                    home, either under the kitchen sink or in the basement
                    below; this system provides clean, great tasting water to a
                    dedicated faucet at your kitchen sink. We offer a range of
                    models from small 50 GPD system that can fit under your sink
                    to larger whole house RO Systems
                  </p>
                  <p>
                    Some of the Benefits of a Reverse Osmosis Systems include:
                  </p>
                  <ul>
                    <li>
                      Great tasting drinking water that is 99.9% free of
                      impurities, right from your own tap!
                    </li>
                    <li>No more lifting heavy jugs or running out of water</li>
                    <li>Low cost, compact and easy filter changes</li>
                    <li>
                      Settings can be adjusted to minimize reject wastewater
                    </li>
                  </ul>
                  <h2>Ultraviolet Sterilizer (UV system)</h2>
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
                    family. We offer 6 to 30 GPM UV Systems with LED display
                    showing lamp life remaining and audible indicator. We also
                    offer NSF UV systems and bulbs.
                  </p>
                  <p>Some of the Benefits of a UV system include:</p>
                  <ul>
                    <li>
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
            </Container>
          </section>
        </InnerContent>
      </Fade>
      <Footer />
    </>
  );
};

export default Residential;
