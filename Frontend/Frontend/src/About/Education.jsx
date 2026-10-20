import React from "react";
import "./Education.css";

const Education = ({ darkMode }) => {
  return (
    <section className={`education ${darkMode ? "dark" : ""}`} id="education">
      <h2 className="education-title">Education</h2>

      <div className="education-timeline">

        {/* BS IT */}
        <div className="education-item">
          <div className="edu-dot"></div>
          <div className="edu-content">
            <span className="edu-year">2021 – 2025</span>
            <h3>BS Information Technology</h3>
            <span className="edu-tag">DEGREE</span>
            <p className="edu-school">Rawalpindi Women University</p>
            <p className="edu-location">City: Rawalpindi | Country: Pakistan</p>
            <p className="edu-grade">Grade: A+</p>
            <p className="edu-courses">
              Main Courses: Web Development, Programming, Databases and CyberSecurity with strong emphasis on practical projects and problem
solving.
            </p>
            <a
              href="https://drive.google.com/file/d/14quwa58XSYZWBYhJ2FcnHo9yk3_4rP5H/view"
              target="_blank"
              rel="noreferrer"
              className="edu-download"
            >
              Download Degree
            </a>
          </div>
        </div>

        {/* Intermediate ICS */}
        <div className="education-item">
          <div className="edu-dot"></div>
          <div className="edu-content">
            <span className="edu-year">2018 – 2020</span>
            <h3>Intermediate (ICS)</h3>
            <span className="edu-tag">DEGREE</span>
            <p className="edu-school">Rawalpindi Women University</p>
            <p className="edu-location">City: Rawalpindi | Country: Pakistan</p>
            <p className="edu-grade">Grade: C</p>
            <p className="edu-courses">
              Main Courses: Economics, Mathematics, Computer Science
            </p>
            <a
              href="https://drive.google.com/file/d/1esOSiItGK1RHga68aLYstBxgDx85OJgd/view"
              target="_blank"
              rel="noreferrer"
              className="edu-download"
            >
              Download Certificate
            </a>
          </div>
        </div>

        {/* Matriculation */}
        <div className="education-item">
          <div className="edu-dot"></div>
          <div className="edu-content">
            <span className="edu-year">2017 – 2018</span>
            <h3>Matriculation</h3>
            <span className="edu-tag">DEGREE</span>
            <p className="edu-school">The Luminous High School</p>
            <p className="edu-location">City: Rawalpindi | Country: Pakistan</p>
            <p className="edu-grade">Grade: A +</p>
            <p className="edu-courses">
              Main Course: Computer Science 
            </p>
            <a
              href="https://drive.google.com/file/d/1TaQB5__iPexdGj6Sv5CbLRVFVYTwDNxj/view"
              target="_blank"
              rel="noreferrer"
              className="edu-download"
            >
              Download Certificate
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;