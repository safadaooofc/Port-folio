import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const communityLinks = [
  {
    id: 'capital-mt-discord',
    title: 'Capital do MT RP',
    description: 'Servidor Discord da filial Roleplay — Capital do Mato Grosso',
    href: 'https://discord.gg/xs9YtjqJEM',
    icon: '🎭',
    color: 'text-terminal-accent',
    label: '[ entrar no discord ]',
  },
  {
    id: 'eb-discord',
    title: 'Exército Brasileiro (EB)',
    description: 'Servidor Discord da filial EB — Exército Brasileiro do Reuel',
    href: 'https://discord.gg/dxANnR7ANf',
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
    color: 'text-terminal-accent',
    label: '[ abrir site ]',
  },
];

export function Community() {
  return (
    <section className="py-2">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="space-y-4">
          {communityLinks.map((link, i) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: i * 0.08 }}
              className="p-4 rounded border border-terminal-border bg-terminal-surface/30 hover:border-terminal-accent/30 transition-all group"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">{link.icon}</span>
                <div>
                  <h3 className={`font-bold ${link.color}`}>{link.title}</h3>
                  <p className="text-terminal-muted text-sm mt-1">{link.description}</p>
                  <div className="mt-3">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 text-sm rounded border border-terminal-border ${link.color} hover:bg-terminal-surface hover:border-terminal-accent/40 transition-all`}
                    >
                      <ExternalLink size={14} />
                      {link.label}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 text-terminal-muted text-xs">total {communityLinks.length} links</div>
      </motion.div>
    </section>
  );
}
