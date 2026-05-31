import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Github, ExternalLink } from 'lucide-react';
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
      icon: Mail,
      label: 'email',
      value: profile.email,
      href: profile.links.email,
      color: 'text-terminal-accent',
      action: '[ abrir email ]',
    },
    {
      icon: MessageCircle,
      label: 'discord',
      value: profile.discord,
      href: profile.links.discord,
      color: 'text-terminal-amber',
      action: '[ abrir discord ]',
    },
    {
      icon: Github,
      label: 'github',
      value: profile.handle,
      href: profile.links.github,
      color: 'text-terminal-text',
      action: '[ abrir github ]',
    },
  ];

  return (
    <section className="py-2">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <TerminalPrompt command="mail" />
        <p className="mt-2 mb-6 text-terminal-muted text-sm">
          use os links abaixo para contato direto
        </p>

        <div className="text-terminal-text font-bold text-sm mb-4"># Informações de Contato</div>

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

        <div className="flex items-center gap-3 mb-6">
          <button
            type="button"
            onClick={copyDiscord}
            className="px-4 py-2 text-sm rounded border border-terminal-border text-terminal-muted hover:text-terminal-text hover:border-terminal-accent/40 transition-all"
          >
            {copied ? '✓ discord copiado!' : '[ copiar discord ]'}
          </button>
        </div>

        <div className="flex items-center gap-3 text-sm text-terminal-muted">
          <MapPin size={14} />
          <span>{profile.location}</span>
        </div>
      </motion.div>
    </section>
  );
}
