import React, { useState, useEffect } from "react";
import "./Navbar.css";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [hoverTheme, setHoverTheme] = useState(false); // hover state

  const scrollToSection = (id) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  setMenuOpen(false);
};

  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [darkMode]);

  return (
    <>
      <nav className="navbar">

        {/* LEFT MENU */}
        <div className="nav-left">
         <a onClick={() => scrollToSection("home")}>Home</a>
<a onClick={() => scrollToSection("about")}>About</a>
<a onClick={() => scrollToSection("projects")}>Projects</a>
<a onClick={() => scrollToSection("contact")}>Contact</a>
        </div>

        {/* CENTER LOGO */}
        <div className="nav-center">
          <div className="logo-circle">
           
            <span className="logo-short">NK</span>
            <span className="logo-full">Nimra Khan</span>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="nav-right">

          <div className="social-icons">
  <a href="mailto:namrakhan1426@gmail.com">
    <FaEnvelope className="em"/>
  </a>

  <a href="https://github.com/Nimra-khan1426">
    <FaGithub className="gh"/>
  </a>

  <a href="https://www.linkedin.com/in/nimra-khan-512461370/">
    <FaLinkedinIn className="li"/>
  </a>

  <a href="https://wa.me/923165439691">
    <FaWhatsapp className="wp"/>
  </a>

  <a href="https://www.instagram.com/nimrakhan._1426/">
    <FaInstagram className="ig"/>
  </a>
</div>

          {/* THEME BUTTON */}
          <div
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
            onMouseEnter={() => setHoverTheme(true)}
            onMouseLeave={() => setHoverTheme(false)}
          >
            <div className="theme-icon">
              {darkMode
                ? hoverTheme ? <FaSun /> : <FaMoon />
                : hoverTheme ? <FaMoon /> : <FaSun />}
            </div>
          </div>

          {/* HAMBURGER */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* SIDE PANEL */}
      
      <div className={`side-panel ${menuOpen ? "open" : ""}`}>
          <div className="nav-center">
        
          <div className="logo-circle">
            <span className="logo-short">NK</span>
            <span className="logo-full">Nimra Khan</span>
          </div>
        
        </div>
      <a onClick={() => scrollToSection("home")}>Home</a>
<a onClick={() => scrollToSection("about")}>About</a>
<a onClick={() => scrollToSection("projects")}>Projects</a>
<a onClick={() => scrollToSection("contact")}>Contact</a>

        {/* Theme button in side panel */}
        <div
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
          onMouseEnter={() => setHoverTheme(true)}
          onMouseLeave={() => setHoverTheme(false)}
        >
          <div className="theme-icon">
            {darkMode
              ? hoverTheme ? <FaSun /> : <FaMoon />
              : hoverTheme ? <FaMoon /> : <FaSun />}
          </div>
        </div>

        <div className="side-social">
               <a href="mailto:namrakhan1426@gmail.com"><FaEnvelope className="em"/></a>
                      <a href="https://github.com/Nimra-khan1426"><FaGithub className="gh"/></a>
                      <a href="https://www.linkedin.com/in/nimra-khan-512461370/"><FaLinkedinIn className="li"/></a>
                      <a href="https://wa.me/923165439691"><FaWhatsapp className="wp"/></a>
                      <a href="https://www.instagram.com/nimrakhan._1426/">< FaInstagram  className="ig"/></a>
        </div>
      </div>

      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}></div>
      )}
    </>
  );
};

export default Navbar;