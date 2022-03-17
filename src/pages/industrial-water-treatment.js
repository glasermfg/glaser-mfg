import React from "react";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import Footer from "../../components/Footer/footer";

import scaleImg from "../img/scale-inhibitors.jpg";
import propyleneImg from "../img/typical.jpg";
import ethlyneImg from "../img/ethlyne.jpg";

const Industrial = () => {
  return (
    <>
      <Helmet>
        <title>Industrial Water Treatment - Glaser MFG Water Concepts</title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <InnerHero title="Industrial Water Treatment" description="description" />
      <Fade>
        <InnerContent>
          <section className="inner">
            <Container>
              {/* One */}
              <Row>
                <Col lg="12">
                  <h2>Steam Boilers</h2>
                  <p>
                    Our Steam Boiler Treatment Program is designed to provide
                    the optimum scale and corrosion protection to help
                    prolonging the life of the boiler system and improving the
                    boiler efficiency to reduce the fuel costs and operational
                    downtime. The cost of your water management program
                    typically represents approximately 2–4% of the overall
                    operating costs to run your steam system. Just 1/16” of
                    scale can increase fuel consumption by 12%. That’s why it’s
                    important to invest in a well-executed program that delivers
                    results over the asset life cycle. Our Boiler Treatment
                    programs are tailored to prevent corrosion, prevent scale
                    build up and protect your return line.
                  </p>
                  <h2>Corrosion Inhibitors</h2>
                  <p>
                    The addition of oxygen to a system with water and heat will
                    initiate corrosion. Heat, found in the feed water system, is
                    a driving force for corrosion. The ability for oxygen to
                    attack forming a pit on metal, increases by a factor of two
                    for every 10ºC (18ºF) rise in temperature. Oxygen can be 512
                    times as aggressive at 212º than it was at 50ºF. Mechanical
                    deaeration can remove most, but not all of the oxygen from
                    the water. An oxygen scavenger is used to eliminate the
                    remaining oxygen. Properly applied, oxygen scavengers will
                    prevent oxygen pitting and extend the life of your boiler.
                    Every boiler setup is a little different based on feed
                    water, size, operating parameters and boiler usage. We offer
                    several different corrosion inhibitors to provide the
                    optimal coverage of your boiler based on your situation.
                  </p>
                  <h2>Scale Inhibitors</h2>
                  <p>
                    Boiler scale is caused by impurities being precipitated out
                    of the water directly on heat transfer surfaces or by
                    suspended matter in water settling out on the metal and
                    becoming hard and adherent. Evaporation in a boiler causes
                    impurities to concentrate. This interferes with heat
                    transfers and may cause hot spots, leading to local
                    overheating. Common feed water contaminants that can form
                    boiler deposits include calcium, magnesium, iron, aluminum,
                    and silica. Scale is formed by salts that have limited
                    solubility but are not totally insoluble in boiler water.
                    These salts reach the deposit site in a soluble form and
                    precipitate onto the tubes of the boiler. Even a small
                    increase in scale can drastically increase the operating
                    costs of a boiler as you can see from the chart below. Scale
                    can also produce damage to the boiler if hot spots occur,
                    cause unscheduled downtime and increase cleaning expense.
                  </p>
                  <img
                    className="img-fluid"
                    src={scaleImg}
                    alt="Scale Inhibitors"
                  />
                  <p>
                    Our Chemical Treatment Program takes into account the feed
                    water quality, internal treatment products to the boiler
                    feedwater quality to prevent scale and excessive sludge
                    accumulation. Utilizing the most advanced polymer technology
                    available provides optimum fuel efficiency and performance.{" "}
                  </p>
                  <h2>Return Line Treatment</h2>
                  <p>
                    The primary causes of corrosion are carbonic acid attack and
                    oxygen pitting in return line systems. This corrosion can
                    cause unexpected system shutdowns, affecting production
                    timelines and costly repairs. Corroded systems are also less
                    efficient, risking leaks and potentially causing damage to
                    the boiler as corrosion by products are carried back into
                    the feedwater. The condensate return line treatments react
                    quickly to neutralize condensed steam carbonic acid with
                    amines to neutralize the return line and buffer the pH level
                    to prevent corrosion. There are many types of condensate
                    treatments, but the most common are amines. We carry several
                    different return line treatments to offer full protection no
                    matter whether it is a short, medium or long return line
                    system.
                  </p>
                  <h2>Closed Loop System Heating and Cooling</h2>
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
                  <h2>Cooling Towers</h2>
                  <p>
                    Cooling towers work by using heat exchange. Water is
                    constantly circulated through the system, and, when it
                    enters the cooling tower heated due to industrial processes,
                    it is exposed to the air, resulting in evaporation. This
                    reduces the temperature of the water enough that it can be
                    recirculated and used for cooling. This cycle of evaporation
                    requires the supply of water to be continuously replenished.
                    However, the water that is fed into the cooling system is
                    typically rife with contaminants, which can cause scale and
                    corrosion. The chemicals that water treatment companies use
                    are designed to address and prevent these issues. The cost
                    of your water management program represents approximately
                    2–4% of the overall operating costs to run your steam
                    system. Just 1/8” of scale can increase fuel consumption by
                    12%. That’s why it’s important to invest in a well-executed
                    program that delivers results over the asset life cycle. The
                    right combination of chemicals to use in your facility
                    depends on a range of factors, including what type of
                    cooling tower you have and the quality of the water being
                    fed into the system. Typically water treatment for cooling
                    towers involves the use of:
                  </p>
                  <ul>
                    <li>
                      Scale and corrosion inhibitor – This chemical is designed
                      to control the build up of scale in the cooling towers
                      using all-organic corrosion inhibitors. Supplemental
                      dispersants will be required as the hardness, alkalinity,
                      pH, cycles, and heat load severity are increased.
                    </li>
                    <li>
                      Biocides – This chemical treatment is used to control the
                      development of potentially harmful microorganisms and
                      Legionella.
                    </li>
                    <li>
                      Organic dispersants – In cooling towers that have some
                      fouling, scale build up or the accumulation of biofilms a
                      supplemental dispersant may be required.{" "}
                    </li>
                  </ul>
                  <h2>Glycol Systems</h2>
                  <p>
                    Both Ethylene and Propylene inhibited glycol are available
                    in 100% and 50% concentrations. Uninhibited glycol is very
                    corrosive to system metals, so the glycol being used must be
                    inhibited with the appropriate corrosion inhibitors or there
                    will be a high risk of corrosion in your system.
                  </p>
                  <h2>Propylene Glycol</h2>
                  <p>
                    Glaser Propylene Glycol contains specially formulated
                    packages of industrial inhibitors that help prevent
                    corrosion. Because propylene glycol fluids have low acute
                    oral toxicity, Glaser Propylene Glycol -based fluids are
                    often used in applications where contact with food or
                    beverage products could occur or environmental impact is a
                    concern. Solutions in water provide freeze protection to
                    below -50°C (-60°F)and burst protection to below -73°C
                    (-100°F).
                  </p>
                  <img src={propyleneImg} alt="Propylene Glycol" />
                  <h2>Ethylene Glycol</h2>
                  <p>
                    Inhibited Ethylene Glycol is a formulation of Ethylene
                    glycol and a specially designed package of industrial
                    corrosion inhibitor to provide optimal corrosion protection
                    in your system. The fluid is clear. Solutions in water
                    provide freeze protection to below -50°C (-60°F)and burst
                    protection to below -73°C (-100°F).
                  </p>
                  <img src={ethlyneImg} alt="Ethylene" />
                  <h2>Water Softener Systems</h2>
                  <p>
                    When hardness minerals are combined with heat, it forms a
                    build up of scale in your Boiler, Cooling Tower and
                    plumbing. We have a wide selection of softeners, and all of
                    our products can be customized to provide the ultimate water
                    solution. You'll enjoy fast, friendly & knowledgeable
                    service & competitive prices.
                  </p>
                  <h2>Reverse Osmosis Systems</h2>
                  <p>
                    Reverse osmosis (RO) membranes are commonly used as a
                    filtration method to remove many types of dissolved solids
                    from solutions by applying pressure to the solution when it
                    is on one side of a selective membrane. The result is that
                    the solute is retained on the pressurized side of the
                    membrane and the pure solvent is allowed to pass to the
                    other side. We offer custom made RO systems for industrial
                    Pretreatment and Process water. Our high efficiency RO
                    systems can produce at 85% efficiency. The RO system will
                    remove pollutants, improve taste, odor and appearance for
                    high quality purified water. Our high efficiency RO units
                    can also replace the need for a water softener in some
                    applications and eliminate the need to ever buy salt again.
                  </p>
                  <h2>Iron Filtration</h2>
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
                  <h2>Water Treatment Services</h2>
                  <ul>
                    <li>
                      Acid Cleanings for scaled up boilers and cooling towers
                    </li>
                    <li>
                      System Flushes for blocked or fouled closed loop system
                    </li>
                    <li>System Flushes for new and pre operations systems</li>
                  </ul>
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

export default Industrial;
