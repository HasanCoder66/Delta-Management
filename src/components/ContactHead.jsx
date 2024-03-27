import React from "react";
import styles from "../style";
const ContactHead = ({ text, heading }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-[3rem]">
        <h1 className={`${styles.heading2} text-center`}>{heading}</h1>
        <p className={`${styles.paragraph} text-center`}>{text}</p>
      </div>
    </div>
  );
};

export default ContactHead;
