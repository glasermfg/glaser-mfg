import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Helmet } from "react-helmet";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import Footer from "../../components/Footer/footer";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Glaser MFG Water Concepts</title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <InnerHero title="Contact" description="description" />
      <InnerContent>
        <section className="inner">
          <Container>
            {/* One */}
            <Row>
              <Col lg="12">
                <p>
                  Please fill out the contact form below and we'll get back to
                  you as soon as possible.
                </p>
                <form
                  name="contact"
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
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button className="btn btn-secondary" type="submit">
                    Submit
                  </button>
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="contact" />
                </form>
              </Col>
            </Row>
          </Container>
        </section>
      </InnerContent>
      <Footer />
    </>
  );
};

export default Contact;
