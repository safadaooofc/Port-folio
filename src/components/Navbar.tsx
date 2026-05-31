import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '@/data/nav';
import { useNavigation, type ViewId } from '@/context/NavigationContext';

export function Navbar() {
  const { activeView, navigateTo } = useNavigation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigate = (id: ViewId) => {
    navigateTo(id);
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-terminal-bg/95 backdrop-blur-sm border-b border-terminal-border"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => handleNavigate('home')}
          className="text-terminal-text text-sm md:text-base font-bold hover:text-terminal-accent transition-colors"
        >
          PS C:\Users\kiover\portfolio&gt;
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavigate(link.id as ViewId)}
              className={`px-3 py-1.5 text-xs rounded transition-all duration-200 ${
                activeView === link.id
                  ? 'text-terminal-text bg-terminal-surface border border-terminal-border'
                  : 'text-terminal-muted hover:text-terminal-text'
              }`}
            >
              {link.command}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden text-terminal-muted hover:text-terminal-text transition-colors text-sm"
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
              <div className="text-terminal-muted text-xs mb-2">PS C:\Users\kiover\portfolio&gt; help</div>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavigate(link.id as ViewId)}
                  className={`text-left px-3 py-1.5 text-sm rounded transition-all ${
                    activeView === link.id
                      ? 'text-terminal-text bg-terminal-surface'
                      : 'text-terminal-muted hover:text-terminal-text'
                  }`}
                >
                  <span className="text-terminal-muted mr-2">&gt;</span>
                  {link.command}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
