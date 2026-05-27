import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import StepperNav from './components/StepperNav';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import Footer from './components/Footer';
import About from './components/About';
import MissionModal from './components/MissionModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [activeMission, setActiveMission] = useState(null);

  // Scroll Spy Logic for the Stepper Nav
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      let current = '';
      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= (section.offsetTop - 300)) {
          current = id;
        }
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <NavBar />
      <StepperNav activeSection={activeSection} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects setActiveMission={setActiveMission} />
        <Terminal />
      </main>

      <MissionModal 
        activeMission={activeMission} 
        closeModal={() => setActiveMission(null)} 
      />

      <Footer />
    </div>
  );
}