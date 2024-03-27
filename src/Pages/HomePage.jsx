import React from "react";
import {
  Billing,
  Business,
  CTA,
  CardDeal,
  Footer,
  Hero,
  Navbar,
  ServicesCarousel,
  Stats,
  Testimonials,
} from "../components";

import styles from "../style.js";
// import { serviceCardData } from "../constants";
const HomePage = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          {/* {serviceCardData.map((data) => ( */}
         {/* ))} data={data} key={data?.id}*/}
            <ServicesCarousel  />
          <CardDeal />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
