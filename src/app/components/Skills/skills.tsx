"use client";

import React, { useState } from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleLearnMoreClick = () => {
    console.log("Button clicked"); // Debugging: check if this logs on button click
    console.log("isClicked:", isClicked); // Check current state value
    setIsClicked((prevClicked) => !prevClicked);
  };

  return (
    <section id="skills" className={styles["skills-section"]}>
      <div className={styles["skills-background"]}></div>
      <div className={styles["skills-container"]}>
        <h1 className={styles["skills-title"]}>My Skills</h1>
        <p className={styles["skills-description"]}>
          Full Stack Development | Frontend Specialist | React, Next.js,
          Tailwind CSS
        </p>
        <button
          className={styles["skills-button"]}
          onClick={handleLearnMoreClick}
        >
          {isClicked ? "Show Less" : "Learn More"}
        </button>

        {isClicked && (
          <div className={styles["extra-info"]}>
            <p>
              I specialize in building dynamic, user-friendly web applications
              using modern web technologies. My expertise lies in frontend
              development with React, Next.js, and Tailwind CSS. I also have
              experience in full-stack development, working with serverless
              technologies, databases, and backend frameworks.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
