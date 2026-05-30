export type ProjectStatus = 'ativo' | 'arquivado' | 'em-andamento';

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  status: ProjectStatus;
  role?: string;
  category: 'roblox' | 'web' | 'bot' | 'game' | 'outro';
}

export interface Collaboration {
  id: string;
  title: string;
  role: string;
  description: string;
  stack: string[];
  github?: string;
  accessLink?: string;
  status: ProjectStatus;
}

/** Mapas Roblox — trabalho atual na Reuel */
export const activeWork: Project[] = [
  {
    id: 'capital-mt-rp',
    title: 'Capital do Mato Grosso Roleplay',
    description:
      'Mapa de roleplay da filial RP (Reuel). Sub-dono e chefe de desenvolvimento: persistência de dados, anti-AFK, API whitelist com bot contingência, heist system, bases de corporações (PRF, PF, Penal), pedágios, transporte mobile e otimização FPS.',
    tech: ['Roblox Lua', 'Roleplay', 'API', 'Level Design', 'Mobile'],
    featured: true,
    status: 'em-andamento',
    role: 'Sub-dono · Chefe de Desenvolvimento',
    category: 'roblox',
    demo: 'https://reueleberp.discloud.app',
  },
  {
    id: 'eb-reuel',
    title: 'Exército Brasileiro do Reuel',
    description:
      'Mapa EB da filial Reuel. Sub-dono e chefe de desenvolvimento: recrutamento, sistema de patentes, regulamento militar integrado ao site e infraestrutura de servidor escalável.',
    tech: ['Roblox Lua', 'EB', 'Roleplay', 'Admin Tools'],
    featured: true,
    status: 'em-andamento',
    role: 'Sub-dono · Chefe de Desenvolvimento',
    category: 'roblox',
    demo: 'https://reueleberp.discloud.app/regras/eb',
  },
];

export const projects: Project[] = [
  {
    id: 'reuel-site',
    title: 'Reuel — Site institucional',
    description:
      'Site oficial da Reuel: regras RP/EB, painel admin CMS, login Discord OAuth2, auto-join nos servidores, slash commands (/add-admin, /setup-logs), logs automáticos e widget de jogadores online. Deploy na Discloud.',
    tech: ['React', 'TypeScript', 'Express', 'Discord OAuth', 'Discloud', 'Tailwind'],
    github: 'https://github.com/safadaooofc/Site_regras_wl',
    demo: 'https://reueleberp.discloud.app',
    featured: true,
    status: 'em-andamento',
    role: 'Desenvolvedor principal',
    category: 'web',
  },
  {
    id: 'roblox-discord-integration',
    title: 'Roblox × Discord — Monitoramento em tempo real',
    description:
      'Ecossistema de telemetria Luau → Node.js → Discord: logs de mortes, spawn, chat e interações; chat bidirecional com permissões; tópicos por jogador; exportação JSON; backup Google Drive a cada 15s.',
    tech: ['Roblox Lua', 'Node.js', 'Express', 'Discord.js', 'Webhooks'],
    github: 'https://github.com/safadaooofc',
    featured: true,
    status: 'ativo',
    category: 'bot',
  },
  {
    id: 'eb-rp-framework',
    title: 'EB & RP Map Framework',
    description:
      'Framework modular para mapas EB e RP: zonas, eventos dinâmicos, economia, spawn inteligente e administração por permissões.',
    tech: ['Roblox Lua', 'Map Design', 'Roleplay', 'Optimization'],
    featured: false,
    status: 'ativo',
    category: 'roblox',
  },
  {
    id: 'jogo-cobrinha',
    title: 'jogo_cobrinha',
    description: 'Versão web do clássico jogo da cobrinha com gameplay direta no navegador.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/safadaooofc/jogo_cobrinha',
    featured: false,
    status: 'arquivado',
    category: 'game',
  },
  {
    id: 'jogo-cobrinha-exe',
    title: 'Jogo da Cobrinha — Executável',
    description: 'Versão otimizada do jogo da cobrinha com foco em performance e compatibilidade cross-browser.',
    tech: ['HTML', 'JavaScript'],
    github: 'https://github.com/safadaooofc/jogo_cobrinha_executavel',
    featured: false,
    status: 'arquivado',
    category: 'game',
  },
  {
    id: 'detroir',
    title: 'detroir',
    description: 'Projeto em JavaScript para experimentos e funcionalidades personalizadas.',
    tech: ['JavaScript', 'Frontend'],
    github: 'https://github.com/safadaooofc/detroir',
    featured: false,
    status: 'arquivado',
    category: 'outro',
  },
];

export const collaborations: Collaboration[] = [
  {
    id: 'bot-whitelist',
    title: 'Bot de Whitelist & Advertências',
    role: 'Scripter / Bot Developer',
    description:
      'Lógica de whitelist e sistema de advertências para Discord: permissões, fluxo de aprovação e moderação eficiente.',
    stack: ['JavaScript', 'Discord Bot', 'Whitelist', 'Moderação'],
    github: 'https://github.com/safadaooofc',
    accessLink: 'https://discord.gg/wWqWwYsnkr',
    status: 'em-andamento',
  },
];

/** Todos os projetos para listagens (trabalho atual primeiro) */
export const allProjects: Project[] = [...activeWork, ...projects];
