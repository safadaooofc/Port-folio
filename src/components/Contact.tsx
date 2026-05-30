import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Github } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { profile } from '@/data/profile';
import { TerminalWindow } from './terminal/TerminalWindow';
import { TerminalPrompt } from './terminal/TerminalPrompt';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TerminalWindow title="kiover@portfolio — ~/contact">
            <TerminalPrompt command="mail --compose" />

            <div className="mt-6 grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="text-terminal-green font-bold text-sm mb-3"># Informações de Contato</div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-terminal-green flex-shrink-0" />
                    <div>
                      <span className="text-terminal-muted text-xs">email: </span>
                      <span className="text-terminal-text text-sm">{profile.email}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle size={16} className="text-terminal-amber flex-shrink-0" />
                    <div>
                      <span className="text-terminal-muted text-xs">discord: </span>
                      <span className="text-terminal-text text-sm">{profile.discord}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-terminal-blue flex-shrink-0" />
                    <div>
                      <span className="text-terminal-muted text-xs">location: </span>
                      <span className="text-terminal-text text-sm">{profile.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <span className="text-terminal-muted text-xs">$ ls links/</span>
                  <div className="flex items-center gap-3 mt-2">
                    {[
                      { icon: Github, href: profile.links.github, label: 'github' },
                      { icon: MessageCircle, href: profile.links.discord, label: 'discord' },
                      { icon: Mail, href: profile.links.email, label: 'email' },
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded border border-terminal-border flex items-center justify-center text-terminal-muted hover:text-terminal-green hover:border-terminal-green/30 transition-all"
                        aria-label={label}
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs text-terminal-muted mb-1">
                    To: Kiover | From:
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded bg-terminal-bg border border-terminal-border text-terminal-text placeholder-terminal-muted/50 focus:outline-none focus:border-terminal-green/50 transition-colors"
                    placeholder="seu nome"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-terminal-muted mb-1">
                    Reply-To:
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded bg-terminal-bg border border-terminal-border text-terminal-text placeholder-terminal-muted/50 focus:outline-none focus:border-terminal-green/50 transition-colors"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs text-terminal-muted mb-1">
                    Body:
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded bg-terminal-bg border border-terminal-border text-terminal-text placeholder-terminal-muted/50 focus:outline-none focus:border-terminal-green/50 transition-colors resize-none"
                    placeholder="conte-me sobre seu projeto..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 text-sm rounded border border-terminal-green/40 bg-terminal-green/10 text-terminal-green hover:bg-terminal-green/20 transition-all terminal-glow"
                >
                  {submitted ? '✓ mensagem enviada!' : '[ enviar mensagem ]'}
                </button>
              </form>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}
