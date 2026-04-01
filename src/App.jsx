import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--win-desktop)' }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main style={{ display: 'flex', flexDirection: 'column', gap: '0', paddingBottom: '34px' }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
