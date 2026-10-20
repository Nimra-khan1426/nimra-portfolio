import React, { useRef } from "react";
import "./Certificates.css";

const Certificates = ({ darkMode }) => {

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className={`certificates ${darkMode ? "dark" : ""}`} id="certificates">

      <div className="cert-header">
        <p className="cert-small">My Achievements</p>
        <h1 className="cert-title">Certificates</h1>
      </div>

      <div className="cert-slider" ref={sliderRef}>

        <div className="cert-card">
          <img src="/Freelance.png" alt="" />
          <div className="cert-info">
            <h3>DigiSkills Freelancing</h3>
            <span>2023 – 2024</span>
          </div>
        </div>

        <div className="cert-card">
          <img src="/Graphic.png" alt="" />
          <div className="cert-info">
            <h3>DigiSkills Graphic Design</h3>
            <span>2023 – 2024</span>
          </div>
        </div>

        <div className="cert-card">
          <img src="/Agile.png" alt="" />
          <div className="cert-info">
            <h3>Agile Project Management</h3>
            <span>2023</span>
          </div>
        </div>

        <div className="cert-card">
          <img src="/Google.png" alt="" />
          <div className="cert-info">
            <h3>Foundation of Cybersecurity</h3>
            <span>2022</span>
          </div>
        </div>

      </div>

      {/* Buttons */}

      <div className="cert-buttons">
        <button onClick={scrollLeft}>Prev</button>
        <button onClick={scrollRight}>Next</button>
      </div>

    </section>
  );
};

export default Certificates;