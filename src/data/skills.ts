export interface Skill {
  name: string;
  icon: string;
  color: string;
  category: string;
}

export const skills: Skill[] = [
  // Frontend & Full-Stack
  { name: 'Next.js 15/16 (App Router)', icon: '▲', color: '#000000', category: 'Frontend & UI' },
  { name: 'React 19 / 18', icon: '⚛️', color: '#61DAFB', category: 'Frontend & UI' },
  { name: 'TypeScript & JavaScript', icon: '🔷', color: '#3178C6', category: 'Frontend & UI' },
  { name: 'Tailwind CSS v4 & Tailwind UI', icon: '💨', color: '#06B6D4', category: 'Frontend & UI' },
  { name: 'Zustand & Redux', icon: '🐻', color: '#443E38', category: 'Frontend & UI' },
  { name: 'Framer Motion (Micro-interações)', icon: '🎭', color: '#EC4899', category: 'Frontend & UI' },

  // Backend & Banco de Dados
  { name: 'Node.js & Express', icon: '🟢', color: '#339933', category: 'Backend & Cloud' },
  { name: 'Python', icon: '🐍', color: '#3776AB', category: 'Backend & Cloud' },
  { name: 'Java (Enterprise & Spring)', icon: '☕', color: '#B07219', category: 'Backend & Cloud' },
  { name: 'PostgreSQL', icon: '🐘', color: '#336791', category: 'Backend & Cloud' },
  { name: 'Prisma ORM', icon: '💎', color: '#2D3748', category: 'Backend & Cloud' },
  { name: 'Supabase & Firebase', icon: '⚡', color: '#3ECF8E', category: 'Backend & Cloud' },
  { name: 'Redis Cache', icon: '🔴', color: '#DC2626', category: 'Backend & Cloud' },
  
  // Inteligência Artificial & Automação
  { name: 'Conexões com IA & LLMs', icon: '🧠', color: '#8B5CF6', category: 'IA & Automação' },
  { name: 'AI Workflows & Agentes', icon: '🤖', color: '#38BDF8', category: 'IA & Automação' },
  { name: 'MCP Servers (Model Context Protocol)', icon: '🔌', color: '#10B981', category: 'IA & Automação' },
  
  // E-Commerce & Integrações
  { name: 'Stripe API & Webhooks', icon: '💳', color: '#635BFF', category: 'E-Commerce & Integrações' },
  { name: 'Mercado Pago API', icon: '💸', color: '#00B1EA', category: 'E-Commerce & Integrações' },
  { name: 'JWT & OAuth2 (Auth.js)', icon: '🔐', color: '#A855F7', category: 'E-Commerce & Integrações' },
  { name: 'REST APIs & GraphQL', icon: '🔌', color: '#F59E0B', category: 'E-Commerce & Integrações' },

  // Desktop & Mobile
  { name: 'C# (.NET / WPF / WinForms)', icon: '🔷', color: '#9B4F96', category: 'Desktop & Mobile' },
  { name: 'C++ (Alta Performance)', icon: '⚡', color: '#00599C', category: 'Desktop & Mobile' },
  { name: 'React Native', icon: '📱', color: '#61DAFB', category: 'Desktop & Mobile' },
  
  // DevOps & Cloud
  { name: 'Git, GitHub Actions & CI/CD', icon: '🔄', color: '#F05032', category: 'DevOps & Tooling' },
  { name: 'Docker', icon: '🐳', color: '#2496ED', category: 'DevOps & Tooling' },
  { name: 'AWS & Vercel Deployments', icon: '☁️', color: '#FF9900', category: 'DevOps & Tooling' },
];

export const skillCategories = [
  'Frontend & UI',
  'Backend & Cloud',
  'IA & Automação',
  'E-Commerce & Integrações',
  'Desktop & Mobile',
  'DevOps & Tooling'
] as const;
