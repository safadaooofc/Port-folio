import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { TerminalPrompt } from './terminal/TerminalPrompt';

export function About() {
  return (
    <section className="py-2">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="space-y-4">
          <div className="text-terminal-text text-lg md:text-xl font-bold"># Sobre Mim</div>

          <div className="flex items-center gap-4 py-3 px-4 rounded border border-terminal-border bg-terminal-surface/50">
            <div className="w-16 h-16 rounded border border-terminal-border bg-terminal-surface flex items-center justify-center text-2xl font-bold text-terminal-text">
              K
            </div>
            <div>
              <div className="text-terminal-text font-bold">{profile.name}</div>
              <div className="text-terminal-muted text-sm">@{profile.handle}</div>
              <div className="text-terminal-amber text-xs mt-1">{profile.location}</div>
            </div>
          </div>

          {profile.bio.map((paragraph, i) => (
            <p key={i} className="text-terminal-text leading-relaxed">
              {paragraph}
            </p>
          ))}

          {profile.currentRole && (
            <div className="mt-4">
              <div className="text-terminal-text font-bold mb-2">
                ## Trabalho Atual — {profile.currentRole.company}
              </div>
              {profile.currentRole.maps.map((map) => (
                <div key={map.shortName} className="flex gap-2 text-sm ml-2 mb-1">
                  <span className="text-terminal-muted">▸</span>
                  <span className="text-terminal-text">
                    <span className="text-terminal-accent">{map.shortName}</span>
                    <span className="text-terminal-muted"> — {map.role}</span>
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-6">
          <TerminalPrompt command="wc -l ~/stats/" />
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {profile.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.05 * i }}
                className="p-3 rounded border border-terminal-border bg-terminal-surface/50 text-center"
              >
                <div className="text-xl font-bold text-terminal-text">{stat.value}</div>
                <div className="text-xs text-terminal-muted mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
