import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import Typewriter from "typewriter-effect";

const Hero = ({ darkMode }) => {
  const faceRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [typewriterKey, setTypewriterKey] = useState(0);

  useEffect(() => {
    const face = faceRef.current;
    if (!face) return;

    const handleMouseMove = (e) => {
      const rect = face.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const centerX = rect.width / 2;
      
      const designerDesc = document.querySelector('#designer .description');
      const coderDesc = document.querySelector('#coder .description');

      if (x < centerX) {
        if (designerDesc) designerDesc.style.opacity = '1';
        if (coderDesc) coderDesc.style.opacity = '0.3';
      } else {
        if (designerDesc) designerDesc.style.opacity = '0.3';
        if (coderDesc) coderDesc.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      const designerDesc = document.querySelector('#designer .description');
      const coderDesc = document.querySelector('#coder .description');

      if (designerDesc) designerDesc.style.opacity = '1';
      if (coderDesc) coderDesc.style.opacity = '1';
    };

    face.addEventListener('mousemove', handleMouseMove);
    face.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      face.removeEventListener('mousemove', handleMouseMove);
      face.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setTypewriterKey(prev => prev + 1); // Reset typewriter
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px',
        triggerOnce: false
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/public/Nimra_khan.pdf";
    link.download = "Nimrakhan.pdf";
    link.click();
  };

  const handleContactClick = () => {
    window.location.href = "#contact";
  };

  // Developer profile data
  const developer = {
    name: "Nimra Khan",
    title: "Full Stack Developer",
    experience: "1 year",
    skills: {
      frontend: ["React", "JavaScript", "TypeScript", "Next.js"],
      backend: ["Node.js","Django", "Python"],
      database: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
      tools: ["Git", "VS Code", "Docker", "GitHub", "WordPress"]
    },
    education: "BS Information Technology",
    location: "Rawalpindi, Pakistan"
  };

  return (
    <section 
      ref={sectionRef}
      className={`hero ${darkMode ? "dark" : ""} ${isVisible ? 'visible' : ''}`} id="home"
    >
      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className={`hero-left ${isVisible ? 'animate-left' : ''}`}>
          <p className="hero-hello">Hello I'm</p>

          <h1 className="hero-name">{developer.name}</h1>

          <h2 className="hero-role">
            {isVisible && (
              <Typewriter
                key={typewriterKey}
                options={{
                  strings: [
                    "Full Stack Developer",
                    "MERN Stack Developer",
                    "Frontend Developer",
                    "UI Designer"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  wrapperClassName: "typewriter-wrapper",
                  cursorClassName: "typewriter-cursor"
                }}
              />
            )}
          </h2>

          <p className="hero-desc">
            Information Technology graduate with hands-on experience in web development. 
            Skilled in HTML, CSS, JavaScript, React, Next.js, and Django. 
            Experienced in working with MongoDB, MySQL, and Firebase databases. 
            Familiar with API integration and backend development. 
            Passionate about learning new technologies and solving real-world problems.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">
            <button
              className="hero-btn resume-btn"
              onClick={handleDownloadResume}
            >
              <span className="btn-text">Resume</span>
              <span className="btn-hover">
                Download
                <svg viewBox="0 0 24 24" className="btn-icon">
                  <path
                    d="M12 3v12m0 0-4-4m4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M5 19h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </span>
            </button>

            <button
              className="hero-btn contact-btn"
              onClick={handleContactClick}
            >
              Contact
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - CODE SCREEN */}
        <div className={`hero-right ${isVisible ? 'animate-right' : ''}`}>
          <div id="face" className="face" ref={faceRef}>
            <div className="code-screen">
              <div className="code-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="file-name">profile.js</span>
              </div>
              <div className="code-content">
                <pre>
                  {isVisible && (
                    <Typewriter
                      key={`code-${typewriterKey}`}
                      options={{
                        delay: 30,
                        deleteSpeed: 40,
                        cursor: "▌",
                        autoStart: true,
                        loop: true,
                        cursorClassName: "code-cursor"
                      }}
                      onInit={(typewriter) => {
                        typewriter
                          .typeString(`<span class="keyword">const</span> <span class="variable">developer</span> = {`)
                          .pauseFor(400)
                          .typeString(`<br/>  <span class="property">name</span>: <span class="string">"${developer.name}"</span>,`)
                          .pauseFor(300)
                          .typeString(`<br/>  <span class="property">title</span>: <span class="string">"${developer.title}"</span>,`)
                          .pauseFor(300)
                          .typeString(`<br/>  <span class="property">experience</span>: <span class="string">"${developer.experience}"</span>,`)
                          .pauseFor(300)
                          .typeString(`<br/>  <span class="property">skills</span>: {`)
                          .pauseFor(400)
                          .typeString(`<br/> &nbsp;&nbsp;<span class="property">frontend</span>: ["${developer.skills.frontend.join('", "')}"],`)
                          .pauseFor(300)
                          .typeString(`<br/> &nbsp;&nbsp;<span class="property">backend</span>: ["${developer.skills.backend.join('", "')}"],`)
                          .pauseFor(300)
                          .typeString(`<br/> &nbsp;&nbsp;<span class="property">database</span>: ["${developer.skills.database.join('", "')}"],`)
                          .pauseFor(300)
                          .typeString(`<br/> &nbsp;&nbsp;<span class="property">tools</span>: ["${developer.skills.tools.join('", "')}"]`)
                          .pauseFor(300)
                          .typeString(`<br/>  },`)
                          .pauseFor(400)
                          .typeString(`<br/>  <span class="property">education</span>: <span class="string">"${developer.education}"</span>,`)
                          .pauseFor(300)
                          .typeString(`<br/>  <span class="property">location</span>: <span class="string">"${developer.location}"</span>`)
                          .pauseFor(400)
                          .typeString(`<br/>}`)
                          .pauseFor(3000)
                          .deleteAll(60)
                          .start();
                      }}
                    />
                  )}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;