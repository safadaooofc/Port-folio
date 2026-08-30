export type ProjectStatus = 'ativo' | 'arquivado' | 'em-andamento' | 'concluido' | 'vendido';

export type ProjectCategory = 'ecommerce' | 'desktop' | 'mobile' | 'web' | 'bot' | 'roblox' | 'game' | 'outro';

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
  category: ProjectCategory;
  hoursWorked?: string;
  badge?: string;
  keyFeatures?: string[];
  learnings?: string[];
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
  hoursWorked?: string;
  badge?: string;
  keyFeatures?: string[];
  learnings?: string[];
}

export const projects: Project[] = [
  {
    id: 'bloodstore3',
    title: 'BloodStore — Loja Digital E-Commerce (Projeto Vendido)',
    description:
      'Plataforma de e-commerce digital completa desenvolvida originalmente para venda automatizada de produtos e serviços virtuais, com persistência na nuvem via Supabase e funções serverless no Netlify. Projeto criado do zero, validado em produção e comercializado com sucesso para o cliente/parceiro @xsag7.',
    tech: ['React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'Netlify Functions', 'Netlify'],
    github: 'https://github.com/xsag7/bloodstore3',
    featured: true,
    status: 'vendido',
    role: 'Criador Original & Desenvolvedor Full-Stack',
    category: 'ecommerce',
    hoursWorked: '~60h',
    badge: 'Destaque / Projeto Vendido',
    keyFeatures: [
      'Arquitetura Serverless com Netlify Functions para processamento seguro de transações',
      'Persistência, autenticação e banco de dados em nuvem com Supabase (PostgreSQL)',
      'Catálogo de produtos digitais com fluxo de entrega automatizada e checkout fluido',
      'Case real de produto monetizado, transferido e operando comercialmente com cliente final',
    ],
    learnings: [
      'Ciclo completo de vida de produto de software: ideação, desenvolvimento, deploy e venda',
      'Construção de backends serverless integrados a BaaS (Supabase)',
      'Transferência de código, documentação de entrega e suporte pós-venda para comprador',
    ],
  },
  {
    id: 'sagaz-site',
    title: 'Sagaz Site — Plataforma Digital de Vendas & Recargas PIX',
    description:
      'Plataforma completa e interativa de vendas de cartões digitais, contas/logins e recargas de saldo instantâneas via PIX com confirmação automática por Webhook REST (AbacatePay). Conta com sistema de recompensas e Bot de Discord (v14) sincronizado ao banco de dados PostgreSQL.',
    tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'Tailwind UI', 'PostgreSQL', 'Prisma v7', 'NextAuth v5', 'discord.js v14', 'Resend', 'AbacatePay API'],
    github: 'https://github.com/safadaooofc/sagaz-site',
    featured: true,
    status: 'concluido',
    role: 'Desenvolvedor Full-Stack & Bot Architect',
    category: 'ecommerce',
    hoursWorked: '~90h',
    badge: 'Destaque / Collab',
    keyFeatures: [
      'Emissão de cobrança PIX automatizada e conciliação instantânea via Webhook REST',
      'Bot de Discord integrado com sincronização bidirecional de dados e comandos administrativos',
      'Arquitetura de segurança com RBAC (Role-Based Access Control) e rate limiting restrito',
      'Painel de administração de estoque de produtos digitais, logs de auditoria e usuários',
    ],
    learnings: [
      'Desenvolvimento com as últimas features do ecossistema Next.js 16 e Tailwind CSS v4',
      'Arquitetura de microsserviços integrando Web App, Bot Discord e Webhooks bancários',
      'Gerenciamento transacional de saldo e estoque digital em alta concorrência',
    ],
  },
  {
    id: 'luxury-sales-site',
    title: 'Luxury Sales — E-commerce de Jogos Digitais',
    description:
      'Plataforma premium de e-commerce voltada para venda de jogos digitais, chaves de ativação (Steam, PSN, Xbox) e serviços virtuais. Conta com design moderno de luxo, autenticação dual (Credentials + Discord OAuth com auto-join no servidor via bot), rate limiting anti-DDoS em memória, catálogo com variações complexas de produto e painel administrativo completo com logs de chat de suporte ao cliente.',
    tech: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Prisma ORM', 'PostgreSQL', 'NextAuth v5', 'Zustand', 'Lucide React'],
    github: 'https://github.com/safadaooofc/luxury-sales-site',
    featured: true,
    status: 'concluido',
    role: 'Desenvolvedor Full-Stack & UI/UX',
    category: 'ecommerce',
    hoursWorked: '~85h',
    badge: 'Destaque / Collab',
    keyFeatures: [
      'NextAuth v5 com autenticação via Credenciais e Discord OAuth2 + auto-join no servidor',
      'Proteção contra abuso e DDoS com rate limiting em memória e prevenção de nomes duplicados',
      'Catálogo dinâmico com variações por Edição/Plataforma, FAQs por produto e preços reativos',
      'Gerenciamento de estado global no cliente com Zustand persist (carrinho e favoritos)',
      'Painel admin com métricas de vendas em gráficos, gestão de pedidos e logs de chat com clientes',
    ],
    learnings: [
      'Domínio completo do Next.js 15 App Router e Server Actions com tipagem estrita',
      'Modelagem relacional complexa de banco de dados com Prisma ORM e PostgreSQL',
      'Criação de fluxos de segurança e proteção de rotas com NextAuth v5',
    ],
  },
  {
    id: 'alma-criativa-ecomerce',
    title: 'Alma Criativa Confeitaria — E-commerce & Configurador',
    description:
      'Plataforma E-commerce full-stack moderna com sistema de loja online e configurador interativo multicamadas para produtos personalizados. Inclui checkout transparente via Mercado Pago (PIX dinâmico com QR Code Base64 e polling de 4s + Cartão), motor inteligente de cálculo de frete por geolocalização via Nominatim API e calendário de antecedência para produção artesanal.',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Mercado Pago API', 'Nominatim API', 'Framer Motion'],
    featured: true,
    status: 'concluido',
    role: 'Desenvolvedor Full-Stack & UI/UX',
    category: 'ecommerce',
    demo: 'https://almacriativa.netlify.app',
    github: 'https://github.com/safadaooofc',
    hoursWorked: '~80h',
    badge: 'E-commerce Full-Stack',
    keyFeatures: [
      'Checkout transparente com Mercado Pago (Pix com confirmação automática via polling + Cartão de crédito)',
      'Motor de frete geocodificado com 3 operadoras e precificação dinâmica por quilômetro até a sede',
      'Configuradores interativos multicamadas: "Monte seu Bolo" e "Monte sua Festa"',
      'Sistema de calendário com bloqueio inteligente de prazos mínimos de produção',
    ],
    learnings: [
      'Integração avançada com APIs de pagamento e Webhooks do Mercado Pago',
      'Geocodificação e cálculo de distâncias geoespaciais em tempo real no frontend/backend',
      'Arquitetura de componentes modulares e validação rigorosa com React 19 e TypeScript',
    ],
  },
  {
    id: 'lp-community',
    title: 'LP Community — E-Commerce Premium GTA V',
    description:
      'Plataforma de vendas e landing page de alta conversão para serviços e contas GTA V. Desenvolvida com design de alto padrão inspirado em marcas líderes (Apple, Stripe, Rockstar Games), calculadora dinâmica de GTA$ em tempo real e checkout inteligente integrado ao WhatsApp/Discord.',
    tech: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    github: 'https://github.com/safadaooofc/lp-community',
    featured: true,
    status: 'concluido',
    role: 'Frontend Architect & UI/UX Developer',
    category: 'ecommerce',
    hoursWorked: '~45h',
    badge: 'Collab / UI-UX',
    keyFeatures: [
      'Calculadora dinâmica de saldo GTA$ em tempo real (R$ 0,50 / 1M) com precificação instantânea',
      'Calculadora de quantidade para veículos e trajes modded',
      'Checkout lateral integrado com geração de mensagem formatada para WhatsApp e Discord',
      'Carrossel interativo de reviews 5 estrelas verificadas e selos de antiban de 30 dias',
    ],
    learnings: [
      'Engenharia de UI/UX de alta conversão focada no público gamer',
      'Gerenciamento de cálculos matemáticos dinâmicos em tempo real sem degradação de performance',
      'Design responsivo avançado e animações micro-interativas com Framer Motion',
    ],
  },
  {
    id: 'desktop-csharp-apps',
    title: 'Softwares & Aplicativos Desktop (C# .NET / C++)',
    description:
      'Desenvolvimento de aplicações nativas para Windows em C# (.NET, WinForms, WPF) e C++. Criação de painéis administrativos de computador, automações de sistema, manipuladores de dados locais e utilitários de alta velocidade sob medida.',
    tech: ['C#', '.NET', 'WinForms', 'WPF', 'C++', 'Windows API', 'Automação'],
    github: 'https://github.com/safadaooofc',
    featured: true,
    status: 'ativo',
    role: 'Desenvolvedor C# / C++ Desktop',
    category: 'desktop',
    hoursWorked: '~70h',
    badge: 'Desktop & Sistemas (PC)',
    keyFeatures: [
      'Criação de softwares desktop com interfaces gráficas ricas e intuitivas em WinForms e WPF',
      'Utilitários em C++ para processamento rápido de arquivos e comunicação com processos do sistema',
      'Automações locais e integração com bancos de dados SQLite e APIs externas',
    ],
    learnings: [
      'Arquitetura de software desktop com gerenciamento de memória e multithreading',
      'Desenvolvimento de ferramentas utilitárias estáveis e leves para ambiente Windows',
    ],
  },
  {
    id: 'mobile-custom-apps',
    title: 'Aplicativos Mobile Sob Medida (Multiplataforma)',
    description:
      'Desenvolvimento de aplicativos para dispositivos móveis com foco em experiência do usuário, performance nativa, integração com APIs REST e layout adaptável para Android e iOS.',
    tech: ['Mobile UI', 'React Native', 'TypeScript', 'REST APIs', 'Mobile UX'],
    github: 'https://github.com/safadaooofc',
    featured: true,
    status: 'ativo',
    role: 'Mobile Developer',
    category: 'mobile',
    hoursWorked: '~40h',
    badge: 'Mobile Apps',
    keyFeatures: [
      'Interfaces mobile-first intuitivas com navegação fluida',
      'Consumo de APIs REST e persistência local de dados no dispositivo',
    ],
    learnings: [
      'Otimização de layouts para diferentes formatos de tela e densidades de pixel',
    ],
  },
  {
    id: 'projeto-sagaz',
    title: 'Projeto SAGAZ — Base Arquitetural da Loja',
    description:
      'Estrutura inicial de catálogo e regras de negócio para a comunidade Sagaz, servindo como protótipo e base técnica para a versão final expandida em Next.js 16.',
    tech: ['Node.js', 'JavaScript', 'Architecture', 'Discord Integration'],
    github: 'https://github.com/safadaooofc/Projeto-SAGAZ',
    featured: false,
    status: 'concluido',
    role: 'Idealizador & Arquiteto Inicial',
    category: 'web',
    hoursWorked: '~25h',
    badge: 'Collab Base',
    keyFeatures: [
      'Mapeamento inicial de fluxos de checkout e catálogo digital',
      'Estruturação dos requisitos de integração com a comunidade Sagaz',
    ],
    learnings: [
      'Prototipação ágil e especificação técnica para produtos comerciais',
    ],
  },
  {
    id: 'reuel-site',
    title: 'Reuel — Site Institucional & CMS Administrativo',
    description:
      'Site institucional oficial da Reuel com suporte às filiais RP (Capital do MT) e EB (Exército Brasileiro): sistema de regras públicas, painel CMS admin protegido, login Discord OAuth2 e proxy para widget de jogadores online.',
    tech: ['React 19', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'Discord OAuth2', 'Discloud'],
    github: 'https://github.com/safadaooofc/Site_regras_wl',
    demo: 'https://reueleberp.discloud.app',
    featured: false,
    status: 'concluido',
    role: 'Desenvolvedor Full-Stack Principal',
    category: 'web',
    hoursWorked: '~120h',
    badge: 'Projeto Principal Reuel',
    keyFeatures: [
      'Painel de controle CMS para edição de anúncios, equipe e regulamentos em tempo real',
      'Autenticação Discord OAuth2 com controle de cargos administrativos e auto-join',
      'Slash commands via Discord Interactions REST (/setup-logs, /add-admin) sem gateway 24h',
      'Proxy de API anti-CORS para contagem ao vivo de membros online',
    ],
    learnings: [
      'Desenvolvimento de CMS personalizado com persistência em JSON e API REST Express',
      'Integração profunda com a API de interações do Discord via Webhook HTTPS',
      'Deploy e otimização de servidor de produção na nuvem Discloud',
    ],
  },
  {
    id: 'capital-mt-rp',
    title: 'Capital do Mato Grosso Roleplay (Roblox)',
    description:
      'Mapa completo de Roleplay brasileiro no Roblox com persistência de dados em banco de dados, sistema anti-AFK automatizado, API de Whitelist integrada a bot Discord e suporte completo multiplataforma PC e Mobile.',
    tech: ['Roblox Luau', 'Roleplay Systems', 'Express API', 'Level Design', 'Mobile Optimization'],
    featured: false,
    status: 'concluido',
    role: 'Sub-dono & Chefe de Desenvolvimento',
    category: 'roblox',
    demo: 'https://capitalmt.netlify.app',
    hoursWorked: '~150h',
    badge: 'Game Development',
    keyFeatures: [
      'Persistência dinâmica de tempo de jogo, saldo financeiro e status no servidor',
      'Heist System avançado para assalto a banco com itens especiais (C4, Lockpick) e inventário',
      'Sistemas de corporações policiais (PRF, PF, Penal) com spawns dinâmicos e frotas de viaturas',
      'Otimização de malhas e scripts de transporte público para 60 FPS estáveis no Mobile',
    ],
    learnings: [
      'Otimização de performance de código client/server em ambiente de jogo 3D de alta densidade',
      'Construção de rotinas em Luau com tolerância a latência de rede',
      'Level design e balanceamento de economia para comunidades de grande porte',
    ],
  },
  {
    id: 'eb-reuel',
    title: 'Exército Brasileiro do Reuel (Roblox)',
    description:
      'Mapa de treinamento militar e simulação do Exército Brasileiro com automação de recrutamento, progressão por patentes, ferramentas de administração e regulamento militar interativo.',
    tech: ['Roblox Luau', 'Militar Systems', 'Admin Tools', 'Level Design'],
    featured: false,
    status: 'concluido',
    role: 'Sub-dono & Chefe de Desenvolvimento',
    category: 'roblox',
    demo: 'https://capitalmt.netlify.app',
    hoursWorked: '~90h',
    badge: 'Game Development',
    keyFeatures: [
      'Sistemas de graduações e patentes com verificação de cargos',
      'Ferramentas administrativas de instrução e treino militar',
      'Mapeamento de base e arenas de treinamento tático',
    ],
    learnings: [
      'Sistemas rigorosos de permissões e hierarquias em tempo real',
    ],
  },
  {
    id: 'roblox-discord-integration',
    title: 'Roblox × Discord — Telemetria & Monitoramento em Tempo Real',
    description:
      'Ecossistema de telemetria assíncrono que conecta o servidor do Roblox ao Discord via API Express centralizada. Permite auditoria de combate, spawns, chat bidirecional e moderação remota pelos administradores.',
    tech: ['Roblox Luau', 'Node.js', 'Express', 'Discord.js', 'Webhooks', 'Render'],
    github: 'https://github.com/safadaooofc',
    demo: 'https://capitalmt.netlify.app',
    featured: false,
    status: 'concluido',
    role: 'Backend & Integration Engineer',
    category: 'bot',
    hoursWorked: '~50h',
    badge: 'Integração de Sistemas',
    keyFeatures: [
      'Pipeline de eventos assíncronos (morte, spawn, chat, portas) enviados via HTTPS',
      'Chat bidirecional em tempo real entre o jogo e canais do Discord com filtro anti-spam',
      'Exportação de relatórios analíticos em JSON para identificação de bugs e abusos',
    ],
    learnings: [
      'Comunicação de baixa latência entre Game Engines e APIs REST externas',
      'Resiliência e balanceamento de tráfego de dados sob alta taxa de requisições',
    ],
  },
  {
    id: 'caixa-de-comandos',
    title: 'Caixa de Comandos — Bot Multifuncional de Discord',
    description:
      'Bot de Discord modular e robusto construído em Python com arquitetura de Cogs para a Rede Reuel. Centraliza moderação, logs administrativos, disparo de webhooks em JSON, entretenimento e configuração total via slash commands.',
    tech: ['Python 3.10+', 'discord.py', 'Discloud', 'Modular Cogs', 'JSON Webhooks'],
    featured: false,
    status: 'concluido',
    role: 'Python Developer',
    category: 'bot',
    hoursWorked: '~40h',
    badge: 'Bot & Automação',
    keyFeatures: [
      'Mais de 20+ comandos administrativos com moderação automatizada (ban, timeout, expurgos)',
      'Sistema de webhook com importação e extração de estruturas JSON customizadas',
      'Mini-games interativos ("Jogo do Milhão", desafios matemáticos) e ranking',
      'Configuração 100% dinâmica no próprio Discord sem necessidade de mexer no código',
    ],
    learnings: [
      'Arquitetura escalável em Python usando Cogs e design orientado a eventos no discord.py',
      'Deploy production-ready e monitoramento contínuo em servidores cloud',
    ],
  },
  {
    id: 'interactive-bot',
    title: 'Interactive BOT — Discord Automation',
    description:
      'Bot em JavaScript/Node.js com foco em automações customizadas, interações ricas e utilitários para comunidades do Discord.',
    tech: ['JavaScript', 'Node.js', 'Discord.js'],
    github: 'https://github.com/safadaooofc',
    featured: false,
    status: 'concluido',
    category: 'bot',
    hoursWorked: '~20h',
  },
  {
    id: 'coletor-tokens',
    title: 'Coletor de Arquivos & Token Generator',
    description:
      'Utilitário leve desenvolvido em JavaScript para automação de coleta de arquivos e geração de tokens de autenticação em pipelines.',
    tech: ['JavaScript', 'Node.js', 'Automação'],
    github: 'https://github.com/safadaooofc/gerador-token',
    featured: false,
    status: 'arquivado',
    category: 'outro',
    hoursWorked: '~15h',
  },
  {
    id: 'discord-rpc-kiover',
    title: 'Discord RPC — YouTube Music Bridge',
    description:
      'Bridge de integração para exibir atividade e faixas do YouTube Music no Rich Presence do Discord via WebSocket, extensão de navegador e cliente local.',
    tech: ['JavaScript', 'Python', 'Node.js', 'WebSockets', 'Chrome Extension'],
    github: 'https://github.com/safadaooofc/discord-rpc-Kiover',
    featured: false,
    status: 'arquivado',
    category: 'outro',
    hoursWorked: '~25h',
  },
  {
    id: 'jogo-cobrinha',
    title: 'Jogo da Cobrinha — Web & Executável',
    description:
      'Versão web e executável do clássico jogo da cobrinha com renderização fluida no canvas, suporte a compatibilidade cross-browser e loop de jogo otimizado.',
    tech: ['HTML5 Canvas', 'CSS3', 'JavaScript'],
    github: 'https://github.com/safadaooofc/jogo_cobrinha_executavel',
    featured: false,
    status: 'concluido',
    category: 'game',
    hoursWorked: '~15h',
  },
];

export const collaborations: Collaboration[] = [
  {
    id: 'collab-bloodstore',
    title: 'BloodStore — Loja Digital E-Commerce (@xsag7)',
    role: 'Criador Original & Desenvolvedor Full-Stack',
    description:
      'Projeto próprio de e-commerce com Supabase e Netlify Functions, desenvolvido, implementado e comercializado com sucesso para o cliente/parceiro @xsag7.',
    stack: ['React', 'TypeScript', 'Supabase', 'Netlify Functions', 'PostgreSQL'],
    github: 'https://github.com/xsag7/bloodstore3',
    status: 'vendido',
    hoursWorked: '~60h',
    badge: 'Projeto Vendido / Destaque',
  },
  {
    id: 'collab-sagaz-site',
    title: 'Sagaz Site — Plataforma de Vendas e Recargas PIX',
    role: 'Desenvolvedor Full-Stack & Bot Developer',
    description:
      'Colaboração no desenvolvimento da loja digital Next.js 16 com emissão automática de PIX (AbacatePay), integração de Bot Discord v14 e segurança RBAC com PostgreSQL.',
    stack: ['Next.js 16', 'TypeScript', 'Tailwind v4', 'PostgreSQL', 'Prisma v7', 'discord.js', 'PIX REST'],
    github: 'https://github.com/safadaooofc/sagaz-site',
    status: 'concluido',
    hoursWorked: '~90h',
    badge: 'Collab Full-Stack',
  },
  {
    id: 'collab-luxury-sales',
    title: 'Luxury Sales — E-commerce & Painel Administrativo',
    role: 'Desenvolvedor Full-Stack & UI/UX',
    description:
      'Colaboração na arquitetura e desenvolvimento completo do e-commerce Next.js 15, sistema de pagamentos, autenticação Discord OAuth e painel administrativo com Prisma e PostgreSQL.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Prisma', 'PostgreSQL', 'Zustand', 'NextAuth v5'],
    github: 'https://github.com/safadaooofc/luxury-sales-site',
    status: 'concluido',
    hoursWorked: '~85h',
    badge: 'Collab Full-Stack',
  },
  {
    id: 'collab-lp-community',
    title: 'LP Community — E-Commerce Premium GTA V',
    role: 'Frontend Architect & UI/UX Developer',
    description:
      'Colaboração no design e desenvolvimento da plataforma de alta conversão, calculadora dinâmica de GTA$ e checkout inteligente via WhatsApp/Discord.',
    stack: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/safadaooofc/lp-community',
    status: 'concluido',
    hoursWorked: '~45h',
    badge: 'Collab Frontend',
  },
  {
    id: 'eb-rp-framework',
    title: 'EB & RP Map Framework',
    role: 'Scripter & Level Designer',
    description:
      'Framework modular para mapas militares e roleplay: zonas dinâmicas, economia, spawn inteligente, persistência em banco e otimização para dispositivos móveis.',
    stack: ['Roblox Luau', 'Level Design', 'Roleplay', 'Mobile Optimization'],
    status: 'concluido',
    hoursWorked: '~120h',
    badge: 'Collab Game Dev',
  },
  {
    id: 'bot-whitelist',
    title: 'Bot de Whitelist & Auditoria de Comunidade',
    role: 'Bot & Backend Developer',
    description:
      'Sistema integrado de triagem, liberação de whitelist automatizada, registro de advertências e moderação remota via Discord.',
    stack: ['JavaScript', 'Discord.js', 'Express', 'Whitelist API'],
    github: 'https://github.com/safadaooofc',
    status: 'concluido',
    hoursWorked: '~40h',
    badge: 'Collab Automação',
  },
];

/** Compatibilidade */
export const activeWork: Project[] = [];
export const allProjects: Project[] = projects;
