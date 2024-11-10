import React from "react";
import styles from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p className={styles.footerText}>
          © 2024 Mohsin Raza. All rights reserved.
        </p>
        <div className={styles.footerContact}>
          <a href="mr934586@gmail.com" className={styles.footerLink}>
            Contact me via email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


  