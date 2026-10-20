import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

 const skills = [
  { name: "C++", type: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "C#", type: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "Java", type: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "SQL", type: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "HTML", type: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", type: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", type: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", type: "Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", type: "Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Django", type: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Node.js", type: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "REST APIs", type: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Firebase", type: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "WordPress", type: "CMS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "Sanity", type: "CMS", icon: "https://logo.svgcdn.com/logos/sanity.svg" },
  { name: "Payload CMS", type: "CMS", icon: "https://cdn.simpleicons.org/payloadcms/000000" },
  { name: "Shopify", type: "E-Commerce", icon: "https://cdn.simpleicons.org/shopify/7AB55C" },
  { name: "MongoDB", type: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", type: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", type: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "GitHub", type: "Tool", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Git", type: "Tool", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "VS Code", type: "Tool", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Vercel", type: "Tool", icon: "https://cdn.simpleicons.org/vercel/000000" },
  { name: "Figma", type: "Design Tool", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Canva", type: "Design Tool", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
  { name: "Replit", type: "Tool", icon: "https://cdn.simpleicons.org/replit/F26207" },
];

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills-title">Technical Skills</h2>
      <p className="skills-sub">
        Languages, frameworks & platforms I work with
      </p>

      <div className="skills-grid">
        {skills.map((skill,index)=>(
          <motion.div
            key={index}
            className="skill-card"
            initial={{opacity:0,y:40}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5,delay:index*0.05}}
          >
            <div className="icon-box" data-name={skill.name}>
              {/* Render string URLs as img, JSX as-is */}
              {typeof skill.icon === "string" ? (
                <img src={skill.icon} alt={skill.name}/>
              ) : (
                skill.icon
              )}
            </div>

            <span className="skill-type">{skill.type}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;