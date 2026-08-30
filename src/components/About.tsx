import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { TerminalPrompt } from './terminal/TerminalPrompt';
import { CheckCircle2, Award, Zap, Code2 } from 'lucide-react';

export function About() {
  const highlights = [
    {
      title: 'E-Commerce & Gateways de Pagamento',
      desc: 'Expertise em checkouts transparentes (Mercado Pago, PIX automático via AbacatePay, Stripe), Webhooks, cálculo inteligente de frete geoespacial (Nominatim API) e configuradores de produtos.',
      icon: '🛍️',
    },
    {
      title: 'Next.js 15/16 & Modern Full-Stack',
      desc: 'Domínio de React 19, TypeScript, Tailwind CSS v4, NextAuth v5 (Auth.js), gerenciamento com Zustand persist e persistência com Prisma ORM, PostgreSQL e Supabase.',
      icon: '⚡',
    },
    {
      title: 'Bots de Discord & Automação Serverless',
      desc: 'Desenvolvimento de bots multifuncionais em discord.js e discord.py com Cogs, moderação automatizada, sincronização bidirecional com bancos de dados e interações REST via endpoints HTTPS.',
      icon: '🤖',
    },
    {
      title: 'Roblox Luau & Game Systems',
      desc: 'Criação de ecossistemas com persistência de dados, telemetria em tempo real conectada ao Discord via Express API, balanceamento de economia e otimização para 60 FPS estáveis no Mobile.',
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
            <div className="text-terminal-amber text-xs mt-0.5 font-mono">📍 {profile.location}</div>
          </div>
        </div>

        <div className="space-y-3">
          {profile.bio.map((paragraph, i) => (
            <p key={i} className="text-terminal-text text-sm sm:text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
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
                transition={{ duration: 0.25, delay: idx * 0.06 }}
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

        {/* Current Work */}
        {profile.currentRole && (
          <div className="mt-6 pt-4 border-t border-terminal-border/60">
            <div className="text-terminal-text font-bold text-sm mb-2 font-mono">
              ## Trabalho Atual — {profile.currentRole.company}
            </div>
            {profile.currentRole.maps.map((map) => (
              <div key={map.shortName} className="flex gap-2 text-sm ml-2 mb-1">
                <span className="text-terminal-accent">▸</span>
                <span className="text-terminal-text">
                  <span className="text-terminal-accent font-bold">{map.shortName}</span>
                  <span className="text-terminal-muted"> — {map.role}</span>
                </span>
              </div>
            ))}
          </div>
        )}

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
