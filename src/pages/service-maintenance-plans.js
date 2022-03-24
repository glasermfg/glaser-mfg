import React from "react";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import Footer from "../../components/Footer/footer";

const ServiceMaintenance = () => {
  return (
    <>
      <Helmet>
        <title>Service & Maintenance Plans - Glaser MFG Water Concepts</title>
        <meta
          name="description"
          content="We service most makes and models of home and industrial treatments and testing equipment. We also offer a regularly scheduled maintenance plan to ensure proper, clean filtration and drinking water."
        />
      </Helmet>
      <Nav />
      <InnerHero title="Service & Maintenance Plans" />
      <Fade>
        <InnerContent>
          <section className="inner">
            <Container>
              {/* One */}
              <Row>
                <Col lg="12">
                  <p>
                    We service most makes and models of home and industrial
                    treatments and testing equipment. We also offer a regularly
                    scheduled maintenance plan to ensure proper, clean
                    filtration and drinking water. Many products do require
                    servicing on a regular basis and by registering your
                    equipment, you leave the guesswork to us. We will contact
                    you when service is required.
                  </p>
                  <h2>Water Testing</h2>
                  <p>
                    It’s not a one size fits all – water that comes out of your
                    tap contains small quantities of many other substances, some
                    are beneficial, while some can be harmful. We recommend an
                    initial complimentary water test for us to have a better
                    understanding on how best to treat your system. This allows
                    your treatment plan to be sized properly and set up to meet
                    the exact requirements of your home. We also offer ongoing
                    testing services to assure that the best water quality is
                    achieved always.{" "}
                  </p>
                  <h2>Installations</h2>
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
                  <form
                    name="requestservice"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    <div class="form-group">
                      <input
                        name="name"
                        type="name"
                        class="form-control"
                        id="Name-field"
                        aria-describedby="namehelp"
                        aria-label="name field"
                        placeholder="Full Name"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        name="email"
                        type="email"
                        class="form-control"
                        id="Email-field"
                        aria-label="email field"
                        placeholder="Email"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        name="phone"
                        type="phone"
                        class="form-control"
                        id="Phone-field"
                        aria-describedby="urlhelp"
                        aria-label="phone field"
                        placeholder="Cell Phone Number"
                      />
                    </div>
                    <div class="form-group">
                      <textarea
                        name="message"
                        class="form-control"
                        id="Message-field"
                        aria-label="message field"
                        rows="3"
                        placeholder="Equipment you are requesting service on"
                      ></textarea>
                    </div>
                    <button className="btn btn-secondary" type="submit">
                      Submit
                    </button>
                    <input type="hidden" name="bot-field" />
                    <input
                      type="hidden"
                      name="form-name"
                      value="requestservice"
                    />
                  </form>
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

export default ServiceMaintenance;
