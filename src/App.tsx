import { NavigationProvider } from '@/context/NavigationContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <NavigationProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
        <Navbar />
        <main className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto flex flex-col gap-24">
          <section id="home" className="scroll-mt-24">
            <Hero />
          </section>
          <section id="about" className="scroll-mt-24">
            <About />
          </section>
          <section id="skills" className="scroll-mt-24">
            <Skills />
          </section>
          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>
          <section id="contact" className="scroll-mt-24">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </NavigationProvider>
  );
}
