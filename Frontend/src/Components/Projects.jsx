import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Emergency First Aid Assistant Robot",
    year: "2025",
    image: "/Project-1.png",
    desc: "A movable robot prototype designed to deliver first aid supplies, monitor victims using a Wi-Fi camera, and detect gas levels in emergencies, controlled remotely via IoT. It aims to assist rescue operations in hazardous areas like mining or fire zones ",
    tags: ["IoT", "Arduino IDE", "Robotics", "C++" ,],
    github: "https://github.com/Nimra-khan1426/IOT-Project-EFACAR",
    live: "https://drive.google.com/file/d/1LgXub6J-xCbca-OXtMocSqQ1PaaUAP3o/view?usp=sharing"
  },
  {
    title: "Atom Global Website",
    year: "2025",
    image: "/Project-3.png",
    desc: "Developed the official company website using WordPress. Integrated Payload CMS for dynamic content and implemented MongoDB for backend database management. Ensured responsive design, optimized performance, and delivered a user-friendly UI/UX collaboratively.",
    tags: ["WordPress", "MongoDB", "PayloadCMS"],
    github: "#",
    live: "https://test.atom-global.com/wp/"
  },
  {
    title: "OSPYTECH Full Stack Website",
    year: "2026",
    image: "/Project-2.png",
    desc: "Built a modern full-stack web application using Next.js. Integrated Sanity CMS for content management and Firebase for backend services including authentication and data handling. Developed responsive, SEO-friendly, and visually appealing frontend design",
    tags: ["Next.js", "Firebase", "Sanity","React"],
    github: "https://github.com/Nimra-khan1426/OSPYTECH",
    live: "https://ospytech-6jla.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects" >
      <h2 className="projects-title">Some of My Latest Work</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          
    
<motion.div
  key={index}
  className="project-card"
  variants={{
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0 }
  }}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 0.6,
    ease: "easeOut",
    delay: index * 0.2
  }}
>
            {/* IMAGE */}
            <div className="project-image">
              <img src={project.image} alt={project.title} loading="lazy"/>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <span className="year">{project.year}</span>

              <p>{project.desc}</p>

              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

              <div className="buttons">
                <a href={project.github}>
                  <FaGithub /> GitHub
                </a>

                <a href={project.live} className="live">
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>

          </motion.div>

        ))}
      </div>
    </section>
  );
};

export default Projects;