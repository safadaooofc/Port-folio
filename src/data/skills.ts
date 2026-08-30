export interface Skill {
  name: string;
  icon: string;
  color: string;
  category: string;
}

export const skills: Skill[] = [
  // Desktop, C# & C++
  { name: 'C# (.NET / WinForms / WPF)', icon: '🔷', color: '#9B4F96', category: 'Desktop & Sistemas (PC)' },
  { name: 'C++ (Nativo & Alto Desempenho)', icon: '⚡', color: '#00599C', category: 'Desktop & Sistemas (PC)' },
  { name: 'Aplicativos Desktop para Windows', icon: '🖥️', color: '#0078D7', category: 'Desktop & Sistemas (PC)' },
  { name: 'Automações & Ferramentas de Sistema', icon: '🛠️', color: '#F59E0B', category: 'Desktop & Sistemas (PC)' },

  // Mobile
  { name: 'Aplicativos Mobile (Multiplataforma)', icon: '📱', color: '#10B981', category: 'Mobile Apps' },
  { name: 'React Native / Mobile UI', icon: '⚛️', color: '#61DAFB', category: 'Mobile Apps' },
  { name: 'Responsividade & Performance Mobile', icon: '📲', color: '#38BDF8', category: 'Mobile Apps' },

  // E-Commerce & Pagamentos
  { name: 'Mercado Pago API (Pix & Cartão)', icon: '💳', color: '#00B1EA', category: 'E-Commerce & Pagamentos' },
  { name: 'AbacatePay API (PIX Instantâneo)', icon: '🥑', color: '#10B981', category: 'E-Commerce & Pagamentos' },
  { name: 'Stripe API', icon: '💸', color: '#635BFF', category: 'E-Commerce & Pagamentos' },
  { name: 'Nominatim Geocoding (Cálculo de Frete)', icon: '📍', color: '#F59E0B', category: 'E-Commerce & Pagamentos' },
  { name: 'Checkout Transparente & Webhooks', icon: '⚡', color: '#38BDF8', category: 'E-Commerce & Pagamentos' },

  // Frontend & Full-Stack
  { name: 'Next.js 15/16 (App Router & Server Actions)', icon: '▲', color: '#ffffff', category: 'Frontend & Full-Stack' },
  { name: 'React 19 / 18', icon: '⚛️', color: '#61DAFB', category: 'Frontend & Full-Stack' },
  { name: 'TypeScript & JavaScript', icon: '🔷', color: '#3178C6', category: 'Frontend & Full-Stack' },
  { name: 'Tailwind CSS v4 & Tailwind UI', icon: '💨', color: '#06B6D4', category: 'Frontend & Full-Stack' },
  { name: 'Zustand (State Management & Persist)', icon: '🐻', color: '#443E38', category: 'Frontend & Full-Stack' },
  { name: 'Framer Motion (Animações)', icon: '🎭', color: '#EC4899', category: 'Frontend & Full-Stack' },
  { name: 'Vite', icon: '⚡', color: '#BD34FE', category: 'Frontend & Full-Stack' },

  // Backend & Banco de Dados
  { name: 'Node.js', icon: '🟢', color: '#339933', category: 'Backend & Banco de Dados' },
  { name: 'Express.js', icon: '⚡', color: '#ffffff', category: 'Backend & Banco de Dados' },
  { name: 'Prisma ORM (v7)', icon: '💎', color: '#2D3748', category: 'Backend & Banco de Dados' },
  { name: 'PostgreSQL', icon: '🐘', color: '#336791', category: 'Backend & Banco de Dados' },
  { name: 'Supabase (Auth, DB & Storage)', icon: '⚡', color: '#3ECF8E', category: 'Backend & Banco de Dados' },
  { name: 'Python 3.10+', icon: '🐍', color: '#3776AB', category: 'Backend & Banco de Dados' },
  { name: 'NextAuth v5 (Auth.js) & JWT', icon: '🔐', color: '#A855F7', category: 'Backend & Banco de Dados' },
  { name: 'Rate Limiting & Anti-DDoS', icon: '🛡️', color: '#EF4444', category: 'Backend & Banco de Dados' },

  // Integração & Bots
  { name: 'Discord.js (v14)', icon: '🤖', color: '#5865F2', category: 'Integração & Bots' },
  { name: 'discord.py & Cogs', icon: '🐍', color: '#3776AB', category: 'Integração & Bots' },
  { name: 'Discord OAuth2 & Auto-Join', icon: '🔑', color: '#5865F2', category: 'Integração & Bots' },
  { name: 'Discord Interactions Endpoint (REST)', icon: '⚡', color: '#8B5CF6', category: 'Integração & Bots' },

  // Roblox & Game Dev
  { name: 'Roblox Luau', icon: '🎮', color: '#00A2FF', category: 'Roblox & Game Dev' },
  { name: 'Sistemas de Roleplay & Economia', icon: '💰', color: '#10B981', category: 'Roblox & Game Dev' },
  { name: 'Level Design & Otimização Mobile', icon: '🗺️', color: '#8B5CF6', category: 'Roblox & Game Dev' },

  // DevOps & Cloud
  { name: 'Discloud Cloud Host', icon: '☁️', color: '#5865F2', category: 'DevOps & Cloud' },
  { name: 'Netlify & Serverless Functions', icon: '🌐', color: '#00C7B7', category: 'DevOps & Cloud' },
  { name: 'Vercel', icon: '▲', color: '#ffffff', category: 'DevOps & Cloud' },
  { name: 'Render', icon: '🔲', color: '#46E3B7', category: 'DevOps & Cloud' },
  { name: 'Git & GitHub', icon: '📦', color: '#F05032', category: 'DevOps & Cloud' },
];

export const skillCategories = [
  'Desktop & Sistemas (PC)',
  'Mobile Apps',
  'E-Commerce & Pagamentos',
  'Frontend & Full-Stack',
  'Backend & Banco de Dados',
  'Integração & Bots',
  'Roblox & Game Dev',
  'DevOps & Cloud',
] as const;
