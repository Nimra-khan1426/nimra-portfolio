import React from "react";
import "./ProfileSummary.css";

const ProfileSummary = ({ darkMode }) => {
  return (
    <section className={`profile-summary ${darkMode ? "dark" : ""}`} id="profile-summary">
      <div className="profile-header">
        <p className="profile-small">Get to know more</p>
        <h1 className="profile-title">
          About <span>Me</span>
        </h1>
      </div>

      <div className="profile-content">
      <p>
  I am a motivated and detail-oriented Information Technology graduate with hands-on experience in web development, programming, and system design. I specialize in building responsive and user-friendly interfaces using modern technologies like <strong>React, Next.js, JavaScript, HTML, and CSS</strong>.
</p>

<p>
  I also have strong expertise in e-commerce development, specifically in <strong>customizing Shopify themes using Liquid</strong>, building pixel-perfect storefronts, and managing dynamic content. My technical experience includes backend development using <strong>Node.js</strong>, along with robust database management using <strong>MongoDB, MySQL, and Firebase</strong>. Additionally, I have practical exposure to Linux environments, including <strong>Kali Linux and Ubuntu</strong>.
</p>

<p>
  I am deeply passionate about learning new technologies, collaborating with teams, and developing scalable digital solutions that improve systems and enhance user experiences.
</p>
      </div>
    </section>
  );
};

export default ProfileSummary;