import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Experience from './Components/Experience';
import BackgroundPattern from './Components/BackgroundPattern';

function App() {
  return (
    <Router>
      

      {/* Pattern wrapper */}
      <BackgroundPattern>
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </BackgroundPattern>

      <Footer />
    </Router>
  );
}

export default App;