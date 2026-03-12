import React from "react";
import "./AboutHero.css";

const AboutHero = ({ darkMode, imageSrc }) => {
  return (
    <section className={`about-hero-section ${darkMode ? "dark" : "light"}`} id="about-hero">
      <div className="about-hero-row">

        <div className="about-hero-face">

          <a href="/portfolio" className="hero-link">
            <div className="hero-designer">
              <div className="hero-description">
                <h1>Designer</h1>
                <p>Product designer specialising in UI design and design systems.</p>
              </div>
            </div>
          </a>

          <a href="/about" className="hero-link">
            <div className="hero-coder">
              <div className="hero-description">
                <h1><span className="chevron-left">&lt;</span>Coder<span className="chevron-right">&gt;</span></h1>
                <p>Front end developer who writes clean, elegant and efficient code.</p>
              </div>
            </div>
          </a>

          <div className="hero-image-wrapper">
            <img
              src="/Nimra.png"
              alt="Profile"
              className="hero-face-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;