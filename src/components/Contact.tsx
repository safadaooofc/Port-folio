import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Github, ExternalLink, Gift } from 'lucide-react';
import { profile } from '@/data/profile';
import { TerminalPrompt } from './terminal/TerminalPrompt';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(profile.discord);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard indisponível
    }
  };

  const channels = [
    {
      icon: MessageCircle,
      label: 'discord',
      value: `${profile.discord} (preferencial para projetos rápidos)`,
      href: profile.links.discord,
      color: 'text-terminal-amber',
      action: '[ abrir discord ]',
    },
    {
      icon: Mail,
      label: 'email',
      value: profile.email,
      href: profile.links.email,
      color: 'text-terminal-accent',
      action: '[ enviar email ]',
    },
    {
      icon: Github,
      label: 'github',
      value: profile.handle,
      href: profile.links.github,
      color: 'text-terminal-text',
      action: '[ ver repositórios ]',
    },
  ];

  return (
    <section className="py-2 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <TerminalPrompt command="mail --compose" />
        
        {/* Free custom project notice */}
        <div className="mt-3 p-4 rounded border border-terminal-success/60 bg-terminal-success/10 mb-6">
          <div className="flex items-start gap-3">
            <Gift size={20} className="text-terminal-success flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-terminal-text font-bold text-sm sm:text-base">
                {profile.freeProjectsNotice.title}
              </h3>
              <p className="text-terminal-muted text-xs sm:text-sm mt-1 leading-relaxed">
                Precisa de um <strong>Bot de Discord</strong>, <strong>Landing Page / Site</strong>, <strong>Software para PC (C# / C++)</strong> ou <strong>App Mobile</strong>? Entre em contato diretamente pelo Discord ou e-mail. Desenvolvo projetos pequenos sob medida sem custo para agregar valor à sua comunidade e expandir portfólio.
              </p>
            </div>
          </div>
        </div>

        <div className="text-terminal-text font-bold text-sm mb-4"># Canais de Atendimento Direto</div>

        <div className="space-y-3 mb-6">
          {channels.map(({ icon: Icon, label, value, href, color, action }) => (
            <div
              key={label}
              className="p-4 rounded border border-terminal-border bg-terminal-surface/30 hover:border-terminal-accent/30 transition-all"
            >
              <div className="flex items-start gap-3">
                <Icon size={18} className={`${color} flex-shrink-0 mt-0.5`} />
                <div className="flex-1 min-w-0">
                  <div className="text-terminal-muted text-xs">{label}:</div>
                  <div className="text-terminal-text text-sm font-medium">{value}</div>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 mt-2 text-xs ${color} hover:underline`}
                  >
                    <ExternalLink size={12} />
                    {action}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <button
            type="button"
            onClick={copyDiscord}
            className="px-4 py-2 text-sm rounded border border-terminal-border text-terminal-muted hover:text-terminal-text hover:border-terminal-accent/40 transition-all font-mono"
          >
            {copied ? '✓ tag discord copiada!' : '[ copiar tag do discord: kiover ]'}
          </button>
        </div>

        <div className="flex items-center gap-3 text-sm text-terminal-muted">
          <MapPin size={14} />
          <span>{profile.location} · {profile.status}</span>
        </div>
      </motion.div>
    </section>
  );
}
