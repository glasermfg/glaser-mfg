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
        <title>Residential - Glaser MFG Water Concepts</title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <InnerHero title="Residential" description="description" />
      <Fade>
        <InnerContent>
          <section className="inner">
            <Container>
              {/* One */}
              <Row>
                <Col lg="12">
                  <h2>2nd Tab Residential Water Treatment Products</h2>
                  <h3>Water Softener Systems</h3>
                  <p>
                    When hardness minerals are combined with heat, it forms a
                    build up of scale in your plumbing, water heater and other
                    water using appliances and fixtures. When combined with
                    soap, the minerals form soap curds or scum causing dry and
                    itchy skin, lifeless hair, and dull laundry.
                  </p>
                  <p>
                    We have a wide selection of softeners, and all of our
                    products can be customized to provide the ultimate water
                    solution. You'll enjoy fast, friendly & knowledgeable
                    service & competitive prices.
                  </p>
                  <p>Some of the benefits of a Softener include:</p>
                  <ul>
                    <li>
                      Prevent scale build up and unwanted stains on fixtures and
                      appliances
                    </li>
                    <li> Soft silky hair & skin</li>
                    <li> Clear dishes & glassware</li>
                    <li> Bright whites, vibrant colours</li>
                    <li> Use up to 75% less soap</li>
                    <li> Lower heating costs</li>
                    <li> Protection for plumbing & appliances</li>
                  </ul>
                  <h3>Reverse Osmosis Systems</h3>
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
                    dedicated faucet at your kitchen sink.
                  </p>
                  <p>
                    We offer a range of models from small 50 GPD system that can
                    fit under your sink to larger whole house RO Systems.
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
                      Settings can be adjusted to minimized reject wastewater
                    </li>
                  </ul>
                  <h3>Ultraviolet Sterilizer (UV system)</h3>
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
                      By exposing contaminated water to high-intensity UV light,
                      disease-causing micro-organisms are rendered harmless.
                    </li>
                    <li>
                      UV purification affects waterborne contaminants and
                      disease-causing pathogens with a 99.9% kill rate or
                      better.
                    </li>
                  </ul>
                  <h3>Iron Filtration and Sulfur Systems</h3>
                  <p>
                    Our Iron filtration systems work by using a proprietary
                    blend of media and filtration processes to reduce
                    contaminants such as iron, sulfur, arsenic, and others. Iron
                    filtration systems can reduce the amount of iron found in
                    water throughout your home, removing buildup, protecting
                    water-using appliances, and reducing staining in your sinks,
                    tubs, and laundry.
                  </p>
                  <p>Some of the Benefits of an Iron filter include:</p>
                  <ul>
                    <li>
                      Removal of poor taste, odours, dirt, rust, organic
                      contaminants, such as herbicides, pesticides, and
                      industrial chemicals
                    </li>
                    <li>
                      Ideal for treating iron and sulphur water, acidity, or
                      bacterial contamination
                    </li>
                    <li>Low maintenance</li>
                    <li>
                      Experience the joy of Stain and Sulphur-Free Laundry,
                      Sinks and Appliances.
                    </li>
                    <li>
                      Improve Water Pressure, Increased Flow, and longer
                      equipment Life
                    </li>
                  </ul>
                  <h3>Whole House Carbon Filter</h3>
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
                      Removal of sediment, bad tastes, stains, colour, and
                      odours.
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
                  <h3>Filters, RO Membrane and UV Bulbs</h3>
                  <p>
                    We carry a wide variety of replacement components of
                    Filters, Filter housings, Ultraviolet Sterilizers Bulbs and
                    sleeves, RO Membranes, Injection Pumps, Valves, fittings,
                    and other accessories. Call our order desk today for pricing
                    & availability.
                  </p>
                  <h2>3rd Tab Residential Water Treatment Products</h2>
                  <h3>Servicing and Maintenance Plans</h3>
                  <p>
                    We service most makes and models of home and industrial
                    treatments and testing equipment. We also offer a regularly
                    scheduled maintenance plan to ensure proper, clean
                    filtration and drinking water. Many products do require
                    servicing on a regular basis and by registering your
                    equipment, you leave the guesswork to us. We will contact
                    you when service is required.
                  </p>
                  <h3>Water Testing</h3>
                  <p>
                    It’s not a one size fits all – water that comes out of your
                    tap contains small quantities of many other substances, some
                    are beneficial, while some can be harmful. We recommend an
                    initial complimentary water test for us to have a better
                    understanding on how best to treat your system. This allows
                    your treatment plan to be sized properly and set up to meet
                    the exact requirements of your home. We also offer ongoing
                    testing services to assure that the best water quality is
                    achieved always.
                  </p>
                  <h3>Installations</h3>
                  <p>
                    Once we decide on the best course of action for your home,
                    the next step is to schedule a professional installation and
                    your initial setup. We offer a full range of solutions from
                    Water softeners, Reverse Osmosis, Ultraviolet Sterilizers,
                    Whole Home Filters, Iron Filters, or something else, and our
                    qualified technicians will come to your home to ensure
                    proper installation, setup and programming & will help to
                    answer any questions you might have about your new system.
                  </p>
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
