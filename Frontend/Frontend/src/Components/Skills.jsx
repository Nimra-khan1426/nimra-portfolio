import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

const skills = [
  { name:"C++", type:"Language", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"},
  { name:"C#", type:"Language", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"},
  { name:"HTML", type:"Frontend", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
  { name:"CSS", type:"Frontend", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},
  { name:"JavaScript", type:"Frontend", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
  { name:"React", type:"Framework", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
  { name:"Next.js", type:"Framework", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"},
  { name:"WordPress", type:"CMS", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"},
  { name:"MongoDB", type:"Database", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
  { name:"MySQL", type:"Database", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
  { name:"PostgreSQL", type:"Database", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"},
  { name:"Firebase", type:"Backend", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"},
  { name:"GitHub", type:"Tool", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},
  { name:"Canva", type:"Design Tool", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"},
  { name:"Sanity", type:"CMS", icon:"https://logo.svgcdn.com/logos/sanity.svg"},

  // Payload CMS embedded SVG
  {
    name: "Payload CMS",
    type: "CMS",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.068 0L22.08 6.625v12.573L13.787 24V11.427L2.769 4.808zM1.92 18.302l8.31-4.812v9.812z"></path>
      </svg>
    )
  },
  { name:"Node.js", type:"Backend", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
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