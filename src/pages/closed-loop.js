import React from "react";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import Footer from "../../components/Footer/footer";

import image1 from "../img/closed-loop.jpg";

const ClosedLoop = () => {
  return (
    <>
      <Helmet>
        <title>
          Closed Loop System Heating, Cooling - Glaser MFG Water Concepts
        </title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <InnerHero
        title="Closed Loop System Heating & Cooling"
        description="Corrosion will occur naturally in closed Loop systems and the consequences when systems fail is both disruptive and cost. "
      />
      <Fade>
        <InnerContent>
          <section className="inner">
            <Container>
              {/* One */}
              <Row>
                <Col lg="12">
                  <p>
                    Corrosion will occur naturally in closed Loop systems and
                    the consequences when systems fail is both disruptive and
                    cost. It is important to understand the causes and impact of
                    corrosion of different system metals. In a closed-loop
                    system, oxygen pitting is the most common type of corrosion.
                    Symptoms of oxygen pitting may be rusty water, pitting in
                    pipes or recurring maintenance on bearings and seals due to
                    the abrasion caused by the corrosion products against the
                    seal surfaces. Glaser offers several different types of
                    corrosion inhibitors from traditional products such as Moly
                    and Nitrite to new generation environmentally friendly
                    corrosion inhibitors. Each system is different and we
                    provide a recommendation based on your needs to provide the
                    optimal corrosion coverage. Once a corrosion inhibitor has
                    been added to a system the job is not done either. Regular
                    testing is recommended to ensure inhibitor levels are
                    maintained and your system is being protected.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col lg="12">
                  <img className="img-fluid" src={image1} alt="closed loop" />
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

export default ClosedLoop;
