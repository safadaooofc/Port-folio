import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  featured: boolean;
}

interface Collaboration {
  title: string;
  role: string;
  description: string;
  stack: string[];
  github: string;
  accessLink: string;
}

const projects: Project[] = [
  {
    title: 'Roblox × Discord Integration System',
    description:
      'Sistema de integração em tempo real entre jogo Roblox e servidor Discord: registra entradas, saídas, mortes detalhadas, trocas de time e interações com objetos, organiza logs por jogador, integra chat bidirecional com permissões por cargo, faz backup/sincronização automática com Google Drive a cada 15 segundos e permite exportar logs em .zip com comando no Discord. Adaptável para Adonis, HD Admin e outros frameworks.',
    tech: ['Roblox Lua', 'Discord Bot', 'Webhooks', 'Google Drive API', 'Automação de Logs'],
    github: 'https://github.com/safadaooofc?tab=overview&from=2026-04-01&to=2026-04-26',
    demo: '#',
    featured: true,
  },
  {
    title: 'EB & RP Map Framework ',
    description:
      'Projeto  de framework para mapas EB e RP no Roblox, com sistema modular de zonas, eventos dinâmicos, economia básica, spawn inteligente e administração por permissões para escalar servidores com desempenho estável.',
    tech: ['Roblox Lua', 'Map Design', 'Roleplay Systems', 'Optimization', 'Admin Tools'],
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    title: 'Desenvolvimeto em geral',
    description:
      'Desenvolvimento de cheats para FiveM e Free Fire, criação de bot de Roblox no Discord em JavaScript e experiência prévia com lojas online. Atualmente estou livre, focado em aprender cada vez mais e evoluir meus sistemas.',
    tech: ['JavaScript', 'Discord Bot', 'Roblox', 'FiveM', 'Free Fire', 'E-commerce', 'cheats'],
    github: '',
    demo: '#',
    featured: false,
  },
  {
    title: 'jogo_cobrinha',
    description:
      'Versão web do clássico jogo da cobrinha com estrutura simples e foco em gameplay direta no navegador.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/safadaooofc/jogo_cobrinha',
    demo: '#',
    featured: false,
  },
  {
    title: 'detroir',
    description:
      'Projeto em JavaScript voltado para experimentos e desenvolvimento de funcionalidades personalizadas.',
    tech: ['JavaScript', 'Frontend'],
    github: 'https://github.com/safadaooofc/detroir',
    demo: '#',
    featured: false,
  },
];

const collaborations: Collaboration[] = [
  {
    title: 'Bot de Whitelist & Advertências (Em andamento)',
    role: 'Scripter / Bot Developer',
    description:
      'Desenvolvimento ativo da lógica de whitelist e sistema de advertências para Discord. Implementação focada em organização de permissões, fluxo de aprovação e moderação eficiente para a comunidade.',
    stack: ['JavaScript', 'Discord Bot', 'Whitelist', 'Moderação'],
    github: 'https://github.com/safadaooofc?tab=overview&from=2026-04-01&to=2026-04-26',
    accessLink: 'https://discord.gg/wWqWwYsnkr',
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">&lt;projetos /&gt;</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-lg mx-auto">
            Confira alguns dos projetos que desenvolvi, cada um com desafios e aprendizados únicos.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="card-hover group relative rounded-2xl bg-dark-800/50 border border-dark-600/30 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Folder className="text-primary" size={24} />
                      <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">
                        Projeto Destaque
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        className="text-gray-500 hover:text-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.demo}
                        className="text-gray-500 hover:text-primary transition-colors"
                        aria-label="Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-dark-700/80 text-primary-light border border-dark-500/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other Projects Grid */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg font-semibold text-gray-300 mb-8 flex items-center gap-3"
        >
          <span className="w-8 h-[2px] bg-primary rounded-full" />
          Outros Projetos
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-hover group p-6 rounded-xl bg-dark-800/40 border border-dark-600/30 hover:border-primary/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="text-primary" size={28} />
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      className="text-gray-500 hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.demo}
                      className="text-gray-500 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-gray-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>

        {/* Collaborations */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg font-semibold text-gray-300 mt-16 mb-8 flex items-center gap-3"
        >
          <span className="w-8 h-[2px] bg-primary rounded-full" />
          Colaborações
        </motion.h3>

        <div className="grid md:grid-cols-1 gap-6">
          {collaborations.map((collab, i) => (
            <motion.div
              key={collab.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-hover group p-6 rounded-xl bg-dark-800/40 border border-dark-600/30 hover:border-primary/20"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="text-primary" size={28} />
                <div className="flex items-center gap-3">
                  <a
                    href={collab.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary transition-colors"
                    aria-label="GitHub da colaboração"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={collab.accessLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary transition-colors"
                    aria-label="Acessar servidor Discord"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <h4 className="text-lg font-bold text-white mb-1 group-hover:text-primary-light transition-colors">
                {collab.title}
              </h4>
              <p className="text-sm text-primary mb-3">{collab.role}</p>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {collab.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {collab.stack.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono text-gray-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
