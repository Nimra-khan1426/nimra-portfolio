import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Full Stack Developer",
    company: "Atom Global",
    year: "Oct-06-2025 - Present",
    desc: "Collaborated on real-world web application using Wordpress, React and Next.js. Built responsive UI components and integrated them with backend services. Strengthened understanding of full-stack workflows, clean code practices, and team-based development."
    , 
    tags: ["WordPress", "React", "Next.js", "UI/UX", "Full Stack", "MySql", "MongoDB", "PayloadCMS", "Firebase"]
  },
  {
    role: "Information Technology Graduate",
    company: "University",
    year: "2021 - 2025",
    desc: "Completed BS Information Technology with focus on web development, databases and system design.",
    tags :[
  "C++", 
  "Java", 
  "C#", 
  "SQL", 
  "HTML", 
  "CSS", 
  "JavaScript",  
  "PostgreSQL",  
]
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="experience-title">Experience</h2>
       <p className="experience-subtitle">
    My journey in software development, projects, and learning over the years.
  </p>

      <div className="timeline">

        {experienceData.map((exp, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false }}
          >

            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <span className="company">{exp.company}</span>
              <span className="year-exp">{exp.year}</span>
              <p>{exp.desc}</p>
                <div className="tags">
    {exp.tags && exp.tags.map((tag, idx) => (
      <span className="tag" key={idx}>{tag}</span>
    ))}
  </div>
              
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Experience;