'use client';

import React from "react";
import styles from "../Contact/Contact.module.css";

const Contact = () => {
  const handleGetInTouchClick = () => {
    window.open("https://www.linkedin.com/in/mohsin-raza-a514392b6", "_blank");
  };

  return (
    <section id="contact" className={styles["contact-section"]}>
      <div className={styles["contact-container"]}>
        <h1 className={styles["contact-title"]}>Contact Me</h1>
        <p className={styles["contact-description"]}>
          Feel free to reach out to me through any of the following:
        </p>

        <div className={styles["contact-info"]}>
          <p>📞 Phone: 03452615590</p>
          <p>📧 Email: mohsinraza@gmail.com</p>
          <p>🏠 Address: House B 50, Gulshan Iqbal Block 3, Karachi</p>
        </div>

        <button
          onClick={handleGetInTouchClick}
          className={styles["contact-button"]}
        >
          LinkedIn
        </button>
      </div>
    </section>
  );
};

export default Contact;


