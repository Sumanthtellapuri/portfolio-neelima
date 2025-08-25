import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Hero.css";

const Hero = ({ imageSrc = null }) => {
  const layoutClass = imageSrc ? "hero with-image" : "hero center";

  return (
    <section id="home" className={layoutClass}>
      <div className="content">
        <h1>
          Hi, I'm <span>Neelima Martha</span>
        </h1>

        <h2 className="role">
          <Typewriter
            words={[
              "Data Analyst",
              "Front End Developer",
              "Open for Fresher Roles"
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p>
          Passionate about transforming data into insights and building
          impactful solutions.
        </p>

        <div className="actions">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
