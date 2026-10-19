import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Full Stack Developer",
    company: "Atom Global",
    year: "Oct-06-2025 - April-06-2026",
    desc: "Collaborated on real-world web application using Wordpress, React and Next.js. Built responsive UI components and integrated them with backend services. Strengthened understanding of full-stack workflows, clean code practices, and team-based development."
    , 
    tags: ["WordPress", "React", "Next.js", "UI/UX", "Full Stack", "MySql", "MongoDB", "PayloadCMS", "Firebase"]
  },
  {
    role: "Shopify Developer & UI/UX Designer",
    company: "Volpea Solutions (PSEB)",
    year: "April-01-2026 - Oct-01-2026",
    desc: "Developed and customized highly responsive Shopify themes using Liquid, HTML, CSS, and JavaScript. Built pixel-perfect e-commerce layouts, including advanced Product Detail Pages (PDPs), cart drawers, product galleries, and interactive video components. Engineered custom Shopify Checkout UI Extensions (such as reservation timers and review sliders) and developed Shopify Discount Functions using JavaScript and GraphQL for customer-based logic. Additionally, managed store data using Metafields, Metaobjects, and Shopify Flow, while designing responsive UI/UX prototypes in Figma.",
    tags :[
  "React", 
  "Liquid", 
  "MetaFeilds", 
  "SQL", 
  "HTML", 
  "CSS", 
  "JavaScript",  
  "Custom Apps",  
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