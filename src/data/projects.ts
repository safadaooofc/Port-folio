export type ProjectStatus = 'ativo' | 'arquivado' | 'em-andamento' | 'concluido';

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

/** Trabalho Atual */
export const activeWork: Project[] = [
  {
    id: 'alma-criativa-ecomerce',
    title: 'Alma Criativa Confeitaria - E-commerce',
    description:
      'Trabalhando atualmente nele em fase final. Plataforma E-commerce full-stack moderna com sistema de loja online e configurador interativo de produtos personalizados. Inclui checkout transparente via Mercado Pago, webhook, e motor de cálculo de frete inteligente.',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Mercado Pago API'],
    featured: true,
    status: 'em-andamento',
    role: 'Desenvolvedor Full-Stack',
    category: 'web',
    demo: 'https://almacriativa.netlify.app',
  },
];

export const projects: Project[] = [
  {
    id: 'reuel-site',
    title: 'Reuel — Site institucional',
    description:
      'Site oficial da Reuel (finalizado e encerrado pelo dono, servidor descontinuado): regras RP/EB, painel admin CMS, login Discord OAuth2.',
    tech: ['React', 'TypeScript', 'Express', 'Discord OAuth', 'Discloud', 'Tailwind'],
    github: 'https://github.com/safadaooofc/Site_regras_wl',
    demo: 'https://capitalmt.netlify.app',
    featured: false,
    status: 'concluido',
    role: 'Desenvolvedor principal',
    category: 'web',
  },
  {
    id: 'capital-mt-rp',
    title: 'Capital do Mato Grosso Roleplay',
    description:
      'Mapa de roleplay (finalizado e encerrado pelo dono). Persistência de dados, anti-AFK, API whitelist com bot.',
    tech: ['Roblox Lua', 'Roleplay', 'API', 'Level Design', 'Mobile'],
    featured: false,
    status: 'concluido',
    role: 'Sub-dono · Chefe de Desenvolvimento',
    category: 'roblox',
    demo: 'https://capitalmt.netlify.app',
  },
  {
    id: 'eb-reuel',
    title: 'Exército Brasileiro do Reuel',
    description:
      'Mapa EB (finalizado e descontinuado, encerrado pelo dono). Recrutamento, sistema de patentes, regulamento militar.',
    tech: ['Roblox Lua', 'EB', 'Roleplay', 'Admin Tools'],
    featured: false,
    status: 'concluido',
    role: 'Sub-dono · Chefe de Desenvolvimento',
    category: 'roblox',
    demo: 'https://capitalmt.netlify.app',
  },
  {
    id: 'roblox-discord-integration',
    title: 'Roblox × Discord — Monitoramento em tempo real',
    description:
      'Ecossistema de telemetria (finalizado e encerrado pelo dono). Logs de mortes, chat e interações.',
    tech: ['Roblox Lua', 'Node.js', 'Express', 'Discord.js', 'Webhooks'],
    github: 'https://github.com/safadaooofc',
    demo: 'https://capitalmt.netlify.app',
    featured: false,
    status: 'concluido',
    category: 'bot',
  },
  {
    id: 'caixa-de-comandos',
    title: 'Caixa de Comandos - Bot de Discord',
    description:
      'Bot de Discord robusto e modular para a Rede Reuel (concluido). Sistema completo de administração, moderação e utilitários usando Cogs no discord.py.',
    tech: ['Python', 'discord.py', 'Discloud', 'Bot'],
    featured: false,
    status: 'concluido',
    category: 'bot',
  },
  {
    id: 'interactive-bot',
    title: 'Interactive BOT',
    description:
      'Bot em desenvolvimento focado em fornecer funcionalidades automatizadas e interativas para comunidades Discord.',
    tech: ['JavaScript', 'Node.js', 'Discord.js'],
    featured: false,
    status: 'concluido',
    category: 'bot',
  },
  {
    id: 'coletor-tokens',
    title: 'Coletor de Arquivos - Token Generator',
    description:
      'Utilitário especializado para coleta e geração automática de tokens, com foco em automação de processos.',
    tech: ['JavaScript', 'Node.js', 'Automação'],
    featured: false,
    status: 'arquivado',
    category: 'outro',
  },
  {
    id: 'discord-rpc-kiover',
    title: 'Discord RPC — YouTube Music Bridge',
    description:
      'Bridge de integração para exibir atividade do YouTube Music no Discord via WebSocket, extensão de browser e cliente RPC.',
    tech: ['JavaScript', 'Python', 'Node.js', 'WebSockets', 'Chrome Extension'],
    github: 'https://github.com/safadaooofc/discord-rpc-Kiover',
    featured: false,
    status: 'arquivado',
    category: 'outro',
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
];

export const collaborations: Collaboration[] = [
  {
    id: 'eb-rp-framework',
    title: 'EB & RP Map Framework',
    role: 'Desenvolvedor',
    description:
      'Colaboração concluída e finalizada. Framework modular para mapas EB e RP: zonas, eventos dinâmicos, economia, spawn inteligente e administração.',
    stack: ['Roblox Lua', 'Map Design', 'Roleplay', 'Optimization'],
    status: 'concluido',
  },
  {
    id: 'bot-whitelist',
    title: 'Bot de Whitelist & Advertências',
    role: 'Scripter / Bot Developer',
    description:
      'Colaboração encerrada e concluída. Bot de whitelist e advertências para Discord: permissões, fluxo de aprovação e moderação.',
    stack: ['JavaScript', 'Discord Bot', 'Whitelist', 'Moderação'],
    github: 'https://github.com/safadaooofc',
    status: 'concluido',
  },
];

/** Todos os projetos para listagens (trabalho atual primeiro) */
export const allProjects: Project[] = [...activeWork, ...projects];
