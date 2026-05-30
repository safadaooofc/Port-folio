import { motion } from 'framer-motion';
import { Github, MessageCircle, Mail } from 'lucide-react';
import { profile } from '@/data/profile';
import { TerminalWindow } from './terminal/TerminalWindow';
import { TerminalPrompt } from './terminal/TerminalPrompt';
import { Cursor } from './terminal/Cursor';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 md:px-6"
    >
      <div className="relative z-10 w-full max-w-3xl mx-auto pt-20">
        <TerminalWindow title="kiover@portfolio — ~">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TerminalPrompt command="whoami" />
            <div className="mt-2 mb-6">
              <h1 className="text-2xl md:text-4xl font-bold text-terminal-green terminal-glow-strong">
                {profile.name}
              </h1>
              <p className="text-terminal-text mt-1">{profile.title}</p>
              <p className="text-terminal-muted text-sm mt-1">{profile.tagline}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <TerminalPrompt command="cat status.txt" />
            <div className="mt-2 mb-6 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
              <span className="text-terminal-green">{profile.status}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <TerminalPrompt command="ls links/" />
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                { icon: Github, href: profile.links.github, label: 'github/', color: 'text-terminal-blue' },
                { icon: MessageCircle, href: profile.links.discord, label: 'discord/', color: 'text-terminal-amber' },
                { icon: Mail, href: profile.links.email, label: 'email/', color: 'text-terminal-green' },
              ].map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-3 py-1.5 rounded border border-terminal-border hover:border-terminal-green/50 transition-all ${color} hover:terminal-glow`}
                  aria-label={label}
                >
                  <Icon size={16} />
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-6 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-5 py-2 text-sm bg-terminal-green/10 border border-terminal-green/40 text-terminal-green rounded hover:bg-terminal-green/20 transition-all terminal-glow"
            >
              [ ver projetos ]
            </a>
            <a
              href="#contact"
              className="px-5 py-2 text-sm border border-terminal-border text-terminal-muted rounded hover:border-terminal-green/30 hover:text-terminal-green transition-all"
            >
              [ contato ]
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mt-6"
          >
            <TerminalPrompt>
              <Cursor />
            </TerminalPrompt>
          </motion.div>
        </TerminalWindow>
      </div>
    </section>
  );
}
