import React from "react";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import Footer from "../../components/Footer/footer";

import scaleImg from "../img/scale-inhibitors.jpg";
import glycolImg from "../img/glycol.jpg";
import glycol2Img from "../img/glycol-2.jpg";

import "../scss/inner.scss";

const Glaser = () => {
  return (
    <>
      <Helmet>
        <title>Glaser MFG - Glaser MFG Water Concepts</title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <InnerHero title="Glaser MFG" description="description" />
      <Fade>
        <InnerContent>
          <section className="inner">
            <Container>
              {/* One */}
              <Row>
                <Col lg="12">
                  <h2>Industrial Water Treatment</h2>
                  <h3>Steam Boilers</h3>
                  <p>
                    Our Steam Boiler Treatment Program is designed to provide
                    the optimum scale and corrosion protection to help
                    prolonging the life of the boiler system and improving the
                    boiler efficiency to reduce the fuel costs and operational
                    downtime.
                  </p>
                  <p>
                    The cost of your water management program typically
                    represents approximately 2–4% of the overall operating costs
                    to run your steam system. Just 1/16” of scale can increase
                    fuel consumption by 12%. That’s why it’s important to invest
                    in a well-executed program that delivers results over the
                    asset life cycle.
                  </p>
                  <p>
                    Our Boiler Treatment programs are tailored to prevent
                    corrosion, prevent scale build up and protect your return
                    line.
                  </p>
                  <h3>Corrosion Inhibitors</h3>
                  <p>
                    The addition of oxygen to a system with water and heat will
                    initiate corrosion. Heat, found in the feed water system, is
                    a driving force for corrosion. The ability for oxygen to
                    attack forming a pit on metal, increases by a factor of two
                    for every 10ºC (18ºF) rise in temperature. Oxygen can be 512
                    times as aggressive at 212º than it was at 50ºF. Mechanical
                    deaeration, can remove most, but not all of the oxygen from
                    the water. An oxygen scavenger is used to eliminate the
                    remaining oxygen. Properly applied, oxygen scavengers will
                    prevent oxygen pitting and extend the life of your boiler.
                  </p>
                  <p>
                    Every boiler setup is a little different based on feed
                    water, size, operating parameters and boiler usage. We offer
                    several different corrosion inhibitors to provide the
                    optimal coverage of your boiler based on your situation.
                  </p>
                  <h3>Scale inhibitors</h3>
                  <p>
                    Boiler scale is caused by impurities being precipitated out
                    of the water directly on heat transfer surfaces or by
                    suspended matter in water settling out on the metal and
                    becoming hard and adherent. Evaporation in a boiler causes
                    impurities to concentrate. This interferes with heat
                    transfers and may cause hot spots, leading to local
                    overheating.
                  </p>
                  <p>
                    Common feed water contaminants that can form boiler deposits
                    include calcium, magnesium, iron, aluminum, and silica.
                    Scale is formed by salts that have limited solubility but
                    are not totally insoluble in boiler water. These salts reach
                    the deposit site in a soluble form and precipitate onto the
                    tubes of the boiler.
                  </p>
                  <p>
                    Even a small increase in scale can drastically increase the
                    operating costs of a boiler as you can see from the chart
                    below. Scale can also produce damage to the boiler if hot
                    spots occur, cause unscheduled downtime and increase
                    cleaning expense.
                  </p>
                  <img
                    className="img-fluid"
                    src={scaleImg}
                    alt="scale inhibitors"
                  />
                  <p>
                    Our Chemical Treatment Program takes into account the feed
                    water quality, internal treatment products to the boiler
                    feedwater quality to prevent scale and excessive sludge
                    accumulation. Utilizing the most advanced polymer technology
                    available provides optimum fuel efficiency and performance
                  </p>
                  <h3>Return Line Treatment</h3>
                  <p>
                    The primary causes of corrosion are carbonic acid attack and
                    oxygen pitting in return line systems. This corrosion can
                    cause unexpected system shutdowns, affecting production
                    timelines and costly repairs. Corroded systems are also less
                    efficient, risking leaks and potentially cause damage to the
                    boiler as corrosion by products are carried back into the
                    feedwater.
                  </p>
                  <p>
                    The condensate return line treatments react quickly to
                    neutralize condensed steam carbonic acid with amines to
                    neutralize the return line and buffer the pH level to
                    prevent corrosion. There are many types of condensate
                    treatments, but the most common are amines. We carry several
                    different return line treatments to offer full protection no
                    matter weather it is a short, medium or long return line
                    system.
                  </p>
                  <h2>Closed Loop System Heating and Cooling</h2>
                  <p>
                    Corrosion will occur naturally in closed Loop systems and
                    the consequences when systems fail is both disruptive and
                    cost. It is important to understand the causes and impact of
                    corrosion of different system metals. In a closed-loop
                    system, oxygen pitting is the most common type of corrosion.
                    Symptoms of oxygen pitting may be rusty water, pipping in
                    pipes or recurring maintenance on bearings and seals due to
                    the abrasion caused by the corrosion products against the
                    seal surfaces.
                  </p>
                  <p>
                    Glaser offers several different types of corrosion
                    inhibitors from traditional products such as Moly and
                    Nitrite to new generation environmentally friendly corrosion
                    inhibitors. Each system is different and we provide a
                    recommendation based on your needs to provide the optimal
                    corrosion coverage.
                  </p>
                  <p>
                    Once a corrosion inhibitor has been added to a system the
                    job is not done either. Regular testing is recommended to
                    ensure inhibitor levels are maintained and your system is
                    being protected.
                  </p>
                  <h2>Cooling Towers</h2>
                  <p>
                    Cooling towers work by using heat exchange. Water is
                    constantly circulated through the system, and, when it
                    enters the cooling tower heated due to industrial processes,
                    it is exposed to the air, resulting in evaporation. This
                    reduces the temperature of the water enough that it can be
                    recirculated and used for cooling. this cycle of evaporation
                    requires the supply of water to be continuously replenished.
                    However, the water that is fed into the cooling system is
                    typically rife with contaminants, which can cause scale and
                    corrosion. The chemicals that water treatment companies use
                    are designed to address and prevent these issues.
                  </p>
                  <p>
                    The cost of your water management program represents
                    approximately 2–4% of the overall operating costs to run
                    your steam system. Just 1/8” of scale can increase fuel
                    consumption by 12%. That’s why it’s important to invest in a
                    well-executed program that delivers results over the asset
                    life cycle.
                  </p>
                  <p>
                    The right combination of chemicals to use in your facility
                    depends on a range of factors, including what type of
                    cooling tower you have and the quality of the water being
                    fed into the system. Typically water treatment for cooling
                    towers involves the use of:
                  </p>
                  <ul>
                    <li>
                      Scale and corrosion inhibitors – These chemicals are meant
                      to reduce or eliminate contaminants, such as minerals, in
                      your water supply that can result in blockages and
                      deterioration in your system’s piping.
                    </li>
                    <li>
                      Closed system treatments – Problems, such as oxygen
                      pitting, are common in closed-loop systems. A variety of
                      chemicals can be used to prevent such corrosion from
                      occurring.
                    </li>
                    <li>
                      Biocides – This chemical treatment is used to control the
                      development of potentially harmful microorganisms.
                    </li>
                    <li>
                      Organic dispersants – These cooling tower water treatment
                      chemicals can be used to prevent fouling and the
                      accumulation of biofilms.
                    </li>
                  </ul>
                  <h2>Glycol Systems</h2>
                  <p>
                    Both Ethylene and Propylene inhibited glycol are available
                    in 100% and 50% concentrations. Uninhibited glycol is very
                    corrosive to system metals, so the glycol being used must be
                    inhibited with the appropriate corrosion inhibitors or there
                    will be a high risk of corrosion Glaser Propylene Glycol
                    contains specially formulated packages of industrial
                    inhibitors that help prevent corrosion. Because propylene
                    glycol fluids have low acute oral toxicity, Glaser Propylene
                    Glycol -based fluids are often used in applications where
                    contact with food or beverage products could occur or
                    environmental impact is a concern. Solutions in water
                    provide freeze protection to below -50°C (-60°F)and burst
                    protection to below -73°C (-100°F).
                  </p>
                  <img className="img-fluid" src={glycolImg} alt="glycol" />
                  <p>
                    Inhibited Ethylene Glycol is a formulation of Ethylene
                    glycol and a specially designed package of industrial
                    corrosion inhibitor to provide optimal corrosion protection
                    in your system. The fluid is clear. Solutions in water
                    provide freeze protection to below -50°C (-60°F)and burst
                    protection to below -73°C (-100°F).
                  </p>
                  <img className="img-fluid" src={glycol2Img} alt="glycol 2" />
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

export default Glaser;
