"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import Images from  "../../../../public/image/mohsinImage.jpeg";
import styles from "../About/About.module.css";

const About = () => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const handleToggleInfo = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  return (
    <div id="about" className={styles.aboutContainer}>
      <section className={`${styles.aboutSection} p-6`}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            alt="image"
            src="/images/mohsinImage.jpeg"
            width={500}
            height={500}
            
          />
        </div>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.description}>
            My name is Mohsin, and I am a frontend developer. You can reach me
            at my phone number, 0345-2615590, or via email at
            mohsinraza22@gmail.com.
          </p>
          <p className={styles.description}>
            I am a passionate and skilled front-end developer with expertise in
            crafting responsive, user-friendly web applications. My experience
            spans across HTML, CSS, JavaScript, React, and Next.js, with a deep
            understanding of UI/UX principles and design aesthetics.
          </p>
          <button className={styles.button} onClick={handleToggleInfo}>
            {isInfoVisible ? "Show Less" : "Learn More"}
          </button>
          {isInfoVisible && (
            <div className={styles.extraInfo}>
              <p>
                I am driven by the desire to continuously learn and improve,
                leveraging modern web technologies like Next.js, React, and
                TypeScript to build dynamic and visually appealing applications.
              </p>
            </div>
          )}
          <div className={styles.buttonContainer}>
            <Link
              href="https://mohsinraza23.github.io/My-CV/"
              className={styles.cvButton}
            >
              View CV
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
