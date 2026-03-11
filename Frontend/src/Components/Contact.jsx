import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import axios from "axios";

const Contact = ({ darkMode }) => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            sectionRef.current.classList.add("active");
            formRef.current.classList.add("active");
          } else {
            sectionRef.current.classList.remove("active");
            formRef.current.classList.remove("active");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      setStatus(res.data.message);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus(err.response?.data?.message || "Error sending message");
    }
  };

  return (
    <section ref={sectionRef}  id="contact"  className={`contact-section ${darkMode ? "dark" : ""}`}>
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h1>Get in <span>touch with me</span></h1>
          <p>I’m currently open to new opportunities and collaborations. Feel free to reach out by any means below!</p>

          <div className="info-box">
            <FaEnvelope className="icon" />
            <a href="mailto:namrakhan1426@gmail.com">namrakhan1426@gmail.com</a>
          </div>
          <div className="info-box">
            <FaPhone className="icon" />
            <a href="tel:+923165439691">+92 316 5439691</a>
          </div>
          <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <a href="https://goo.gl/maps/...">Defence Colony, Rawalpindi</a>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/nimra-khan-512461370/"><FaLinkedin /></a>
            <a href="https://github.com/Nimra-khan1426/"><FaGithub /></a>
          </div>
        </div>

        {/* FORM */}
        <div ref={formRef} className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="name-row">
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
            </div>

            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} />
            <textarea name="message" placeholder="Write your message here..." rows="6" value={formData.message} onChange={handleChange} required></textarea>

            <button type="submit" className="send-btn">
              Send Message <FaPaperPlane />
            </button>
            <p>{status}</p>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;