"use client";
import React, { useState } from "react";
import styles from "../Hero/Hero.module.css"; // Import as `styles`

const Hero = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleLearnMoreClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <section className={styles["hero-section"]}>
      <div className={styles["hero-container"]}>
        <h1 className={styles["hero-title"]}>
          Hello, I&apos;m <span className={styles["hero-name"]}>Mohsin</span>
        </h1>
        <p className={styles["hero-description"]}>
          Full Stack Developer | Frontend Specialist
        </p>
        <button className={styles["hero-button"]} onClick={handleLearnMoreClick}>
          {isClicked ? "Show Less" : "Learn More"}
        </button>

        {isClicked && (
          <div className={styles["extra-info"]}>
            <p>
              Hi, I&apos;m Mohsin Raza, a passionate Full-Stack Developer with
              expertise in building responsive, user-friendly web applications.
              I love working with modern web technologies like Next.js, React,
              Tailwind CSS, and TypeScript to create dynamic and visually
              appealing websites. I&apos;m driven by the desire to continuously learn
              and improve, and I believe in the power of technology to solve
              real-world problems.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
