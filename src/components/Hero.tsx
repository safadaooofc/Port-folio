import { motion } from 'framer-motion';
import { Github, MessageCircle, Mail } from 'lucide-react';
import { profile } from '@/data/profile';
import { useNavigation } from '@/context/NavigationContext';
import { TerminalPrompt } from './terminal/TerminalPrompt';

export function Hero() {
  const { navigateTo } = useNavigation();

  return (
    <section className="py-2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <TerminalPrompt command="whoami" />
        <div className="mt-2 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-terminal-text">{profile.name}</h1>
          <p className="text-terminal-text mt-1">{profile.title}</p>
          <p className="text-terminal-muted text-sm mt-1">{profile.tagline}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        <TerminalPrompt command="cat status.txt" />
        <div className="mt-2 mb-6 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-terminal-success" />
          <span className="text-terminal-success">{profile.status}</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <TerminalPrompt command="ls links/" />
        <div className="mt-3 flex flex-wrap gap-3">
          {[
            { icon: Github, href: profile.links.github, label: 'github/', color: 'text-terminal-accent' },
            { icon: MessageCircle, href: profile.links.discord, label: 'discord/', color: 'text-terminal-amber' },
            { icon: Mail, href: profile.links.email, label: 'email/', color: 'text-terminal-text' },
          ].map(({ icon: Icon, href, label, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-3 py-1.5 rounded border border-terminal-border hover:border-terminal-accent/50 transition-all ${color} hover:text-terminal-accent`}
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
        transition={{ duration: 0.4, delay: 0.45 }}
        className="mt-6 flex flex-wrap gap-4"
      >
        <button
          type="button"
          onClick={() => navigateTo('projects')}
          className="px-5 py-2 text-sm bg-terminal-surface border border-terminal-border text-terminal-text rounded hover:border-terminal-accent/50 hover:text-terminal-accent transition-all"
        >
          [ ver projetos ]
        </button>
        <button
          type="button"
          onClick={() => navigateTo('contact')}
          className="px-5 py-2 text-sm border border-terminal-border text-terminal-muted rounded hover:border-terminal-accent/30 hover:text-terminal-text transition-all"
        >
          [ contato ]
        </button>
      </motion.div>
    </section>
  );
}
