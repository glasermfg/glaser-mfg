import React from "react";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import Footer from "../../components/Footer/footer";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - Glaser MFG Water Concepts</title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <InnerHero
        title="About"
        description="Learn more about Glaser MFG Water Concepts"
      />
      <Fade>
        <InnerContent>
          <section className="inner">
            <Container>
              {/* One */}
              <Row>
                <Col lg="12">
                  <p>
                    Based out of the Niagara Region Glaser Water Concepts has
                    been providing Water treatment services since 1987 all
                    throughout Ontario. Glaser Manufacturing has been around
                    since 1990 and has been specializing in providing specialty
                    chemical solutions for Steam Boilers, Hot Water Systems,
                    Cooling towers and Glycol systems. Glaser’s main focus and
                    expertise is in a variety of industries, including
                    automotive, food and beverage, chemical, commercial and
                    residential buildings, Greenhouses, metals, mining, power
                    and pulp and paper.
                  </p>
                  <p>
                    On the Water Concepts side of the business the main focus
                    has been on providing custom designed systems and water
                    analysis equipment for both drinking water, whole house
                    filtration and pre-treatment for process water for
                    industrial use.{" "}
                  </p>
                  <p>
                    In 2021 the two companies joined forces to be able to
                    combine our expertise and be able to provide a full line of
                    water treatment products and solutions from residential
                    filtration systems to chemical treatment for larger
                    industrial boilers and everything in between. With over 60
                    years combined in the water treatment business we haven't
                    seen it all yet but we are getting closer and we are
                    confident that we can help find a solution to any water
                    issue that you might be having.
                  </p>
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

export default About;
