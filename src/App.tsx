import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Community } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BootScreen } from './components/terminal/BootScreen';
import { useScrollSpy } from './hooks/useScrollSpy';

const sectionIds = ['home', 'about', 'skills', 'projects', 'community', 'contact'];

export function App() {
  const [booted, setBooted] = useState(() => {
    return sessionStorage.getItem('booted') === '1';
  });
  const activeSection = useScrollSpy(sectionIds);

  const handleBootComplete = () => {
    sessionStorage.setItem('booted', '1');
    setBooted(true);
  };

  return (
    <>
      {!booted && <BootScreen onComplete={handleBootComplete} />}
      <div className="min-h-screen bg-terminal-bg text-terminal-text overflow-x-hidden scanlines">
        <Navbar activeSection={activeSection} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Community />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
