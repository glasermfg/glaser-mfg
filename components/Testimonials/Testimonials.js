import React from "react";
import { Container, Row, Col } from "reactstrap";

const Testimionials = ({
  testimonials,
  testimonialImg,
  testimonialImgAltTag,
}) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg="6">
            <h2>What Our Clients Say</h2>
            <hr />
            {testimonials.map(({ testimonial, author }) => (
              <>
                <p>"{testimonial}"</p>
                <p>
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
            <img src={testimonialImg} alt={testimonialImgAltTag} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Testimionials;
