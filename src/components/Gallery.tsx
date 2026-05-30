import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { TerminalWindow } from './terminal/TerminalWindow';
import { TerminalPrompt } from './terminal/TerminalPrompt';

const communityLinks = [
  {
    id: 'capital-mt-discord',
    title: 'Capital do MT RP',
    description: 'Servidor Discord da filial Roleplay — Capital do Mato Grosso',
    href: '#',
    icon: '🎭',
    color: 'text-terminal-green',
    label: '[ entrar no discord ]',
  },
  {
    id: 'eb-discord',
    title: 'Exército Brasileiro (EB)',
    description: 'Servidor Discord da filial EB — Exército Brasileiro do Reuel',
    href: '#',
    icon: '⚔️',
    color: 'text-terminal-amber',
    label: '[ entrar no discord ]',
  },
  {
    id: 'reuel-site',
    title: 'Reuel — Site Institucional',
    description: 'Site oficial com regras, painel admin, whitelist e informações das filiais',
    href: 'https://reueleberp.discloud.app',
    icon: '🌐',
    color: 'text-terminal-blue',
    label: '[ abrir site ]',
  },
];

export function Community() {
  return (
    <section id="community" className="relative py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TerminalWindow title="kiover@portfolio — ~/community">
            <TerminalPrompt command="ls ~/community/" />

            <div className="mt-4 space-y-4">
              {communityLinks.map((link, i) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-4 rounded border border-terminal-border bg-terminal-bg/30 hover:border-terminal-green/30 transition-all group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl mt-0.5">{link.icon}</span>
                      <div>
                        <h3 className={`font-bold ${link.color}`}>{link.title}</h3>
                        <p className="text-terminal-muted text-sm mt-1">{link.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 ml-9">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 text-sm rounded border border-terminal-border ${link.color} hover:bg-terminal-green/10 hover:border-terminal-green/40 transition-all`}
                    >
                      <ExternalLink size={14} />
                      {link.label}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 text-terminal-muted text-xs">
              total {communityLinks.length} links
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}
