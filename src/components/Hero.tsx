import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail } from 'lucide-react';
import { profile } from '@/data/profile';

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left"
      >
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl leading-tight">
            Engenharia de Software & <br />
            <span className="gradient-text">Desenvolvimento Full-Stack</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
            {profile.tagline}
          </p>

        <div className="flex flex-wrap gap-4 items-center">
          <button
            onClick={() => scrollTo('projects')}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200"
          >
            Ver Projetos <ArrowRight size={18} />
          </button>
          
          <div className="flex items-center gap-3 ml-2">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors border border-transparent hover:border-slate-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.links.email}
              className="p-3 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors border border-transparent hover:border-slate-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex justify-center md:justify-end mb-4 md:mb-0">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="/profile.png" 
              alt="Guilherme Profile" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
