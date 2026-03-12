import React from "react";
import "./Languages.css";

const Languages = ({ darkMode }) => {
  return (
    <section className={`languages ${darkMode ? "dark" : ""}`} id="languages">

      <div className="lang-header">
        <p className="lang-small">Communication</p>
        <h1 className="lang-title">Languages</h1>
      </div>

      <div className="lang-grid">

        <div className="lang-card">
          <h3>Pashto</h3>
          <span>Native</span>
        </div>

        <div className="lang-card">
          <h3>English</h3>
          <span>Professional Working</span>
        </div>

        <div className="lang-card">
          <h3>Urdu</h3>
          <span>Fluent</span>
        </div>

      </div>

    </section>
  );
};

export default Languages;