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
          I am a motivated and detail-oriented Information Technology graduate with hands-on experience in web development, programming and system design. I have worked with modern technologies including <strong>React, Next.js, JavaScript, HTML, and CSS</strong> to build responsive and user-friendly interfaces.
        </p>

        <p>
          My technical experience also includes backend development using <strong>Django and Node.js</strong> along with database management using <strong>MongoDB, MySQL, and Firebase</strong>. I have practical exposure to Linux environments such as <strong>Kali Linux and Ubuntu</strong>.
        </p>

        <p>
          I enjoy learning new technologies, collaborating with teams, and developing scalable digital solutions that improve systems and enhance user experiences.
        </p>
      </div>
    </section>
  );
};

export default ProfileSummary;