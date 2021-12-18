import React from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "reactstrap";

import "../Testimonials/testimonials.scss";

const Testimionials = ({
  testimonials,
  testimonialImg,
  testimonialImgAltTag,
}) => {
  return (
    <>
      <Fade>
        <section className="testimonials">
          <Container>
            <Row>
              <Col lg="12">
                <h2>What Our Clients Say</h2>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                {testimonials.map(({ testimonial, author }) => (
                  <>
                    <p>"{testimonial}"</p>
                    <p class="author">
                      <em>{author}</em> - <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </p>
                  </>
                ))}
              </Col>
              <Col lg="6">
                <img
                  className="img-fluid"
                  src={testimonialImg}
                  alt={testimonialImgAltTag}
                />
              </Col>
            </Row>
          </Container>
        </section>
      </Fade>
    </>
  );
};

export default Testimionials;
