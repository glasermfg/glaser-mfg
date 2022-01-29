import React from "react";
import Nav from "../../components/Nav/nav";
import Hero from "../../components/Hero/hero";
import About from "../../components/About/about";
import Services from "../../components/Services/services";
import Testimionials from "../../components/Testimonials/testimonials";
import Footer from "../../components/Footer/footer";

import { Helmet } from "react-helmet";
import testimonialImg from "../img/testimonials.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/general.scss";
import "../scss/typography.scss";

const testimonials = [
  {
    id: 1,
    testimonial:
      "We were having major problems with our urinals scaling up and backing up constantly. Glaser came in and was able to provide a product (Uri-Klear Extra) that saved us from having to rip the urinals off the wall and snake the lines. This was a huge time and money saver for us!",
    author: "Arena Manager",
  },
  {
    id: 2,
    testimonial:
      "Glaser has been our water treatment supplier for over 25 years. In that time we have never had any issues with our steam boiler and they have provided great service. Any time that there has been an issue they have been very quick to respond",
    author: "Greenhouse Owner",
  },
  {
    id: 3,
    testimonial:
      "Drain backups are a constant problem at retirement homes. I was snaking drains on a daily basis and hearing complaints from the residents about the smell coming from the drains. Glaser recommended a drain treatment that I use once a month and it has kept my drains flowing and pretty much stopped the complaints about the odour. Any time I have a problem now Glaser is usually my first call.",
    author: "Retirement Home Environmental Service Manager",
  },
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Glaser MFG</title>
        <meta name="description" content="Website description." />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Helmet>
      <Nav />
      <section id="home">
        <Hero />
        <About />
        <Services />
        <Testimionials
          testimonials={testimonials}
          testimonialImg={testimonialImg}
          testimonialImgAltTag="Glaser MFG Testimonials"
        />
      </section>
      <Footer />
    </>
  );
};

export default Home;
