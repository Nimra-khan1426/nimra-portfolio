import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";
import { FaTwitter, FaGithub, FaLinkedinIn, FaPinterestP, FaDribbble, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = ({ darkMode, scrollToSection }) => {
  return (
    <footer className={`footer ${darkMode ? "dark" : ""}`}>
      <div className="footer-container">

        {/* LEFT: Logo */}
        <div className="footer-left">
          <div className="footer-logo-circle">
            <span className="logo-short">NK</span>
            <span className="logo-full">Nimra Khan</span>
          </div>
          <p>© {new Date().getFullYear()} Nimra Khan. All rights reserved.</p>
        </div>

        {/* CENTER: Quick Links */}
        <div className="footer-center">
          <h4>Quick Links</h4>
          <div className="footer-links">
          <a onClick={() => scrollToSection("home")}>Home</a>
<Link to="/about">About</Link>
<a onClick={() => scrollToSection("projects")}>Projects</a>
<a onClick={() => scrollToSection("contact")}>Contact</a>
          </div>
        </div>

        {/* RIGHT: Follow Us */}
        <div className="footer-right">
          <h4>Follow Us</h4>
          <div className="footer-social">
            <a href="mailto:namrakhan1426@gmail.com"><FaEnvelope className="em"/></a>
            <a href="https://github.com/Nimra-khan1426"><FaGithub className="gh"/></a>
            <a href="https://www.linkedin.com/in/nimra-khan-512461370/"><FaLinkedinIn className="li"/></a>
            <a href="https://wa.me/923165439691"><FaWhatsapp className="wp"/></a>
            <a href="https://www.instagram.com/nimrakhan._1426/">< FaInstagram  className="ig"/></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;