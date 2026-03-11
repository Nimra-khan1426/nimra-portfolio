import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Experience from "./Components/Experience";
import BackgroundPattern from "./Components/BackgroundPattern";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Router>
<Navbar />
      <BackgroundPattern>

        <main>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </BackgroundPattern>

      <Footer 
        darkMode={darkMode} 
        scrollToSection={scrollToSection} 
      />

    </Router>
  );
}

export default App;