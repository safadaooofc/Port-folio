export interface Skill {
  name: string;
  icon: string;
  color: string;
  category: string;
}

export const skills: Skill[] = [
  // E-Commerce & Pagamentos
  { name: 'Mercado Pago API (Pix & Cartão)', icon: '💳', color: '#00B1EA', category: 'E-Commerce & Pagamentos' },
  { name: 'AbacatePay API (PIX Instantâneo)', icon: '🥑', color: '#10B981', category: 'E-Commerce & Pagamentos' },
  { name: 'Stripe API', icon: '💸', color: '#635BFF', category: 'E-Commerce & Pagamentos' },
  { name: 'Nominatim Geocoding (Cálculo de Frete)', icon: '📍', color: '#F59E0B', category: 'E-Commerce & Pagamentos' },
  { name: 'Checkout Transparente & Webhooks', icon: '⚡', color: '#38BDF8', category: 'E-Commerce & Pagamentos' },

  // Frontend & Full-Stack
  { name: 'Next.js 15/16 (App Router & Server Actions)', icon: '▲', color: '#ffffff', category: 'Frontend & Full-Stack' },
  { name: 'React 19 / 18', icon: '⚛️', color: '#61DAFB', category: 'Frontend & Full-Stack' },
  { name: 'TypeScript', icon: '🔷', color: '#3178C6', category: 'Frontend & Full-Stack' },
  { name: 'Tailwind CSS v4 & Tailwind UI', icon: '💨', color: '#06B6D4', category: 'Frontend & Full-Stack' },
  { name: 'Zustand (State Management & Persist)', icon: '🐻', color: '#443E38', category: 'Frontend & Full-Stack' },
  { name: 'Framer Motion (Animações)', icon: '🎭', color: '#EC4899', category: 'Frontend & Full-Stack' },
  { name: 'Vite', icon: '⚡', color: '#BD34FE', category: 'Frontend & Full-Stack' },
  { name: 'Lucide Icons', icon: '✨', color: '#F43F5E', category: 'Frontend & Full-Stack' },

  // Backend & Banco de Dados
  { name: 'Node.js', icon: '🟢', color: '#339933', category: 'Backend & Banco de Dados' },
  { name: 'Express.js', icon: '⚡', color: '#ffffff', category: 'Backend & Banco de Dados' },
  { name: 'Prisma ORM (v7)', icon: '💎', color: '#2D3748', category: 'Backend & Banco de Dados' },
  { name: 'PostgreSQL', icon: '🐘', color: '#336791', category: 'Backend & Banco de Dados' },
  { name: 'Supabase (Auth, DB & Storage)', icon: '⚡', color: '#3ECF8E', category: 'Backend & Banco de Dados' },
  { name: 'Python 3.10+', icon: '🐍', color: '#3776AB', category: 'Backend & Banco de Dados' },
  { name: 'NextAuth v5 (Auth.js) & JWT', icon: '🔐', color: '#A855F7', category: 'Backend & Banco de Dados' },
  { name: 'Rate Limiting & Anti-DDoS', icon: '🛡️', color: '#EF4444', category: 'Backend & Banco de Dados' },
  { name: 'Resend (Email API)', icon: '✉️', color: '#000000', category: 'Backend & Banco de Dados' },

  // Integração & Bots
  { name: 'Discord.js (v14)', icon: '🤖', color: '#5865F2', category: 'Integração & Bots' },
  { name: 'discord.py & Cogs', icon: '🐍', color: '#3776AB', category: 'Integração & Bots' },
  { name: 'Discord OAuth2 & Auto-Join', icon: '🔑', color: '#5865F2', category: 'Integração & Bots' },
  { name: 'Discord Interactions Endpoint (REST)', icon: '⚡', color: '#8B5CF6', category: 'Integração & Bots' },
  { name: 'WebSockets & Telemetria', icon: '📡', color: '#10B981', category: 'Integração & Bots' },

  // Roblox & Game Dev
  { name: 'Roblox Luau', icon: '🎮', color: '#00A2FF', category: 'Roblox & Game Dev' },
  { name: 'Sistemas de Roleplay & Economia', icon: '💰', color: '#10B981', category: 'Roblox & Game Dev' },
  { name: 'Map Design & Level Design', icon: '🗺️', color: '#8B5CF6', category: 'Roblox & Game Dev' },
  { name: 'Otimização Mobile (FPS)', icon: '📱', color: '#F59E0B', category: 'Roblox & Game Dev' },
  { name: 'Persistência & APIs Externas', icon: '🔄', color: '#06B6D4', category: 'Roblox & Game Dev' },

  // DevOps & Cloud
  { name: 'Git & GitHub', icon: '📦', color: '#F05032', category: 'DevOps & Cloud' },
  { name: 'Discloud Cloud Host', icon: '☁️', color: '#5865F2', category: 'DevOps & Cloud' },
  { name: 'Netlify & Serverless Functions', icon: '🌐', color: '#00C7B7', category: 'DevOps & Cloud' },
  { name: 'Vercel', icon: '▲', color: '#ffffff', category: 'DevOps & Cloud' },
  { name: 'Render', icon: '🔲', color: '#46E3B7', category: 'DevOps & Cloud' },
];

export const skillCategories = [
  'E-Commerce & Pagamentos',
  'Frontend & Full-Stack',
  'Backend & Banco de Dados',
  'Integração & Bots',
  'Roblox & Game Dev',
  'DevOps & Cloud',
] as const;
