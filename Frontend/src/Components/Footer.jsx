import React from "react";
import "./Footer.css";
import { FaTwitter, FaGithub, FaLinkedinIn, FaPinterestP, FaDribbble, FaInstagram } from "react-icons/fa";

const Footer = ({ darkMode }) => {
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
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#articles">Articles</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        {/* RIGHT: Follow Us */}
        <div className="footer-right">
          <h4>Follow Us</h4>
          <div className="footer-social">
            <a href="#"><FaTwitter className="tw"/></a>
            <a href="https://github.com/Nimra-khan1426"><FaGithub className="gh"/></a>
            <a href="https://www.linkedin.com/in/nimra-khan-512461370/"><FaLinkedinIn className="li"/></a>
            <a href="#"><FaPinterestP className="pi"/></a>
            <a href="#">< FaInstagram  className="Ig"/></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;