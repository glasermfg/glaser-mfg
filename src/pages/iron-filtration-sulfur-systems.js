import React from "react";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import Footer from "../../components/Footer/footer";

import image1 from "../img/iron-filter.jpg";

const IronFiltrationSulfur = () => {
  return (
    <>
      <Helmet>
        <title>
          Iron Filtration and Sulfur Systems - Glaser MFG Water Concepts
        </title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <InnerHero
        title="Iron Filtration and Sulfur Systems"
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
                    Our Iron filtration systems work by using a proprietary
                    blend of media and filtration processes to reduce
                    contaminants such as iron, sulfur, arsenic, and others. Iron
                    filtration systems can reduce the amount of iron found in
                    water by removing buildup, protecting water-using
                    appliances, and reducing staining in your sinks, tubs, and
                    laundry.
                  </p>
                  <p>Some of the Benefits of an Iron filter include:</p>
                  <ul>
                    <li>
                      Removal of poor taste, odors, dirt, rust, organic
                      contaminants, such as herbicides, pesticides, and
                      industrial chemicals
                    </li>
                    <li>
                      Ideal for treating iron and sulfur water, acidity, or
                      bacterial contamination
                    </li>
                    <li>Low maintenance</li>
                    <li>
                      Improve Water Pressure, Increased Flow, and longer
                      equipment Life
                    </li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <img
                    className="img-fluid"
                    src={image1}
                    alt="Iron Filtration and Water Treatment Services"
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

export default IronFiltrationSulfur;
