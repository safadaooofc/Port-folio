import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { TerminalPrompt } from './terminal/TerminalPrompt';
import { Gift, Laptop, Smartphone, ShoppingBag, Bot, Gamepad2, Layers } from 'lucide-react';

export function About() {
  const highlights = [
    {
      title: 'Softwares Desktop para PC (C# / C++)',
      desc: 'Desenvolvimento de programas nativos para Windows em C# (.NET, WinForms, WPF) e C++. Utilitários rápidos, manipuladores de arquivos, painéis administrativos e automações locais de alto desempenho.',
      icon: '🖥️',
    },
    {
      title: 'Aplicativos Mobile (Android & iOS)',
      desc: 'Criação de aplicativos para celulares com design responsivo, navegação fluida, conexão com APIs REST e interfaces intuitivas focadas na experiência do usuário.',
      icon: '📱',
    },
    {
      title: 'E-Commerce & Gateways de Pagamento',
      desc: 'Checkouts transparentes com confirmação instantânea de PIX (AbacatePay, Mercado Pago, Stripe), Webhooks, cálculo inteligente de frete geoespacial (Nominatim API) e lojas completas.',
      icon: '🛍️',
    },
    {
      title: 'Next.js 15/16 & Modern Full-Stack',
      desc: 'Domínio de React 19, TypeScript, Tailwind CSS v4, NextAuth v5 (Auth.js), Zustand persist e persistência em banco relacional e serverless com Prisma ORM, PostgreSQL e Supabase.',
      icon: '⚡',
    },
    {
      title: 'Bots de Discord & Automações',
      desc: 'Bots multifuncionais em discord.js e discord.py com Cogs, moderação automatizada, sincronização bidirecional com bancos de dados e interações REST via endpoints HTTPS.',
      icon: '🤖',
    },
    {
      title: 'Roblox Luau & Game Systems',
      desc: 'Criação de ecossistemas com persistência de dados, telemetria em tempo real conectada ao Discord via Express API, balanceamento de economia e otimização para 60 FPS no Mobile.',
      icon: '🎮',
    },
  ];

  return (
    <section className="py-2 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="space-y-4"
      >
        <div className="text-terminal-text text-lg md:text-xl font-bold"># Sobre Mim & Trajetória</div>

        <div className="flex items-center gap-4 py-3 px-4 rounded border border-terminal-border bg-terminal-surface/50">
          <div className="w-14 h-14 rounded border border-terminal-accent bg-terminal-surface flex items-center justify-center text-xl font-bold text-terminal-accent font-mono">
            &gt;_
          </div>
          <div>
            <div className="text-terminal-text font-bold text-base sm:text-lg">{profile.name}</div>
            <div className="text-terminal-muted text-xs sm:text-sm font-mono">@{profile.handle} · {profile.title}</div>
            <div className="text-terminal-amber text-xs mt-0.5 font-mono">📍 {profile.location} · {profile.status}</div>
          </div>
        </div>

        <div className="space-y-3">
          {profile.bio.map((paragraph, i) => (
            <p key={i} className="text-terminal-text text-sm sm:text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Free Projects Banner */}
        <div className="p-4 rounded border border-terminal-success/60 bg-terminal-success/10 mt-4">
          <div className="flex items-start gap-3">
            <Gift size={20} className="text-terminal-success flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-terminal-text font-bold text-sm sm:text-base">
                {profile.freeProjectsNotice.title}
              </h3>
              <p className="text-terminal-muted text-xs sm:text-sm mt-1 leading-relaxed">
                {profile.freeProjectsNotice.description}
              </p>
            </div>
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="mt-6 pt-4 border-t border-terminal-border/60">
          <TerminalPrompt command="cat ~/skills/core_competencies.md" />
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                className="p-3.5 rounded border border-terminal-border bg-terminal-surface/30 hover:border-terminal-accent/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-lg">{item.icon}</span>
                  <h4 className="text-terminal-text font-bold text-sm">{item.title}</h4>
                </div>
                <p className="text-terminal-muted text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-6 pt-4 border-t border-terminal-border/60">
          <TerminalPrompt command="wc -l ~/metrics/developer_stats.log" />
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {profile.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.05 * i }}
                className="p-3 rounded border border-terminal-border bg-terminal-surface/50 text-center"
              >
                <div className="text-xl font-bold text-terminal-accent font-mono">{stat.value}</div>
                <div className="text-xs text-terminal-muted mt-1 font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
