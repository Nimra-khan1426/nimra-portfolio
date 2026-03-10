import React, { useState, useEffect } from "react";
import "./Navbar.css";
import {
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaPinterestP,
  FaDribbble,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [hoverTheme, setHoverTheme] = useState(false); // hover state

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
          <a href="#" className="active">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Articles</a>
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
            <FaTwitter className="tw"/>
            <FaGithub className="gh"/>
            <FaLinkedinIn className="li"/>
            <FaPinterestP className="pi"/>
            <FaDribbble className="dr"/>
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
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Articles</a>

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
          <FaTwitter />
          <FaGithub />
          <FaLinkedinIn />
          <FaPinterestP />
          <FaDribbble />
        </div>
      </div>

      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}></div>
      )}
    </>
  );
};

export default Navbar;