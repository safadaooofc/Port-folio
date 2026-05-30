import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { TerminalWindow } from './terminal/TerminalWindow';
import { TerminalPrompt } from './terminal/TerminalPrompt';

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TerminalWindow title="kiover@portfolio — ~/about">
            <TerminalPrompt command="cat about.md" />

            <div className="mt-4 space-y-4">
              <div className="text-terminal-green terminal-glow text-lg md:text-xl font-bold">
                # Sobre Mim
              </div>

              <div className="flex items-center gap-4 py-3 px-4 rounded border border-terminal-border bg-terminal-bg/50">
                <div className="w-16 h-16 rounded border border-terminal-green/30 bg-terminal-green/5 flex items-center justify-center text-2xl font-bold text-terminal-green terminal-glow">
                  K
                </div>
                <div>
                  <div className="text-terminal-green font-bold">{profile.name}</div>
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
                  <div className="text-terminal-green font-bold mb-2">## Trabalho Atual — {profile.currentRole.company}</div>
                  {profile.currentRole.maps.map((map) => (
                    <div key={map.shortName} className="flex gap-2 text-sm ml-2 mb-1">
                      <span className="text-terminal-amber">▸</span>
                      <span className="text-terminal-text">
                        <span className="text-terminal-blue">{map.shortName}</span>
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
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                    className="p-3 rounded border border-terminal-border bg-terminal-bg/50 text-center"
                  >
                    <div className="text-xl font-bold text-terminal-green terminal-glow">{stat.value}</div>
                    <div className="text-xs text-terminal-muted mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}
