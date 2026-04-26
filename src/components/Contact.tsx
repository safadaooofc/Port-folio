import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, MessageCircle } from 'lucide-react';
import { useState, type FormEvent } from 'react';

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
    <section id="contact" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-dark-800/20" />
      <div className="blob w-72 h-72 bg-primary/20 -bottom-20 left-1/4 animate-pulse-glow" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">&lt;contato /&gt;</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-lg mx-auto">
            Tem um projeto em mente? Gostaria de ouvir sobre ele. Entre em contato e vamos criar algo incrível juntos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Sinta-se à vontade para me contatar por qualquer um dos canais abaixo. 
                Responderei o mais rápido possível!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-200 font-medium">paoteste40@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Localização</p>
                  <p className="text-gray-200 font-medium">Brasil 🇧🇷</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Discord</p>
                  <p className="text-gray-200 font-medium">kiover</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-gray-500 mb-4">Me encontre nas redes</p>
              <div className="flex items-center gap-4">
                {[
                  { icon: Github, href: 'https://github.com/safadaooofc?tab=overview&from=2026-04-01&to=2026-04-26', label: 'GitHub' },
                  { icon: MessageCircle, href: 'https://discord.com/app', label: 'Discord (kiover)' },
                  { icon: Mail, href: 'mailto:paoteste40@gmail.com', label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-dark-800/60 border border-dark-600/50 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-110"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-dark-800/40 border border-dark-600/30 space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-700/50 border border-dark-500/50 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-700/50 border border-dark-500/50 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-700/50 border border-dark-500/50 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Conte-me sobre seu projeto..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl transition-all duration-300 glow hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>✓ Mensagem Enviada!</>
                ) : (
                  <>
                    Enviar Mensagem
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
