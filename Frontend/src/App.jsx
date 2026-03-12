import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Experience from "./Components/Experience";
import BackgroundPattern from "./Components/BackgroundPattern";

import AboutHero from "./About/AboutHero";
import Certificates from "./About/Certificates";
import Languages from "./About/Languages";
import Education from "./About/Education";
import ProfileSummary from "./About/ProfileSummary";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Router>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>

        <Route
          path="/"
          element={
            <BackgroundPattern>
              <main>
                <Hero />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
              </main>
            </BackgroundPattern>
          }
        />

       <Route
  path="/about"
  element={
    <BackgroundPattern darkMode={darkMode}>
      <main>
        <AboutHero darkMode={darkMode} />
        <ProfileSummary darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Certificates darkMode={darkMode} />
        <Languages darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
    </BackgroundPattern>
  }
/>

      </Routes>

      <Footer darkMode={darkMode} scrollToSection={scrollToSection} />

    </Router>
  );
}

export default App;