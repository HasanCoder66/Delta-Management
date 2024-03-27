import React from "react";
import styles from "../style";
import { Footer, Navbar } from "../components";
import { Contact, ContactHead } from "../components";
// import

const ContactPage = () => {
  return (
    <div className="bg-primary   w-full overflow-hidden min-h-[100vh]">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div
        // ${styles.flexCenter}`
        className={`bg-primary text-white ${styles.paddingX} `}
      >
        <ContactHead
          text="Please reach out to us if you have questions about our enterprise offerings, or anything else."
          heading="Contact Us"
        />
        <div>
        <Contact />
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" /> */}
      <div className="absolute z-[1] w-[80%] h-[50%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
