import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '@/data/nav';

interface NavbarProps {
  activeSection?: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-terminal-bg/95 backdrop-blur-sm border-terminal-border'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="text-terminal-green terminal-glow text-sm md:text-base font-bold">
          kiover@portfolio:~$
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`px-3 py-1.5 text-xs rounded transition-all duration-200 ${
                activeSection === link.id
                  ? 'text-terminal-green terminal-glow bg-terminal-green/10'
                  : 'text-terminal-muted hover:text-terminal-green'
              }`}
            >
              {link.command}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-terminal-muted hover:text-terminal-green transition-colors text-sm"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? '[x]' : '[menu]'}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-terminal-bg/98 border-b border-terminal-border"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              <div className="text-terminal-muted text-xs mb-2">kiover@portfolio:~$ help</div>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-1.5 text-sm rounded transition-all ${
                    activeSection === link.id
                      ? 'text-terminal-green terminal-glow'
                      : 'text-terminal-muted hover:text-terminal-green'
                  }`}
                >
                  <span className="text-terminal-text mr-2">&gt;</span>
                  {link.command}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
