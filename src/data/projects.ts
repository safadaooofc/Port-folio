export type ProjectStatus = 'ativo' | 'arquivado' | 'concluido' | 'vendido';
export type ProjectCategory = 'ecommerce' | 'desktop' | 'mobile' | 'web';

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
}

export const projects: Project[] = [
  {
    id: 'bloodstore3',
    title: 'Loja Digital E-Commerce (SaaS Vendido)',
    description:
      'Plataforma de e-commerce digital B2C completa, com persistência na nuvem via Supabase e funções serverless. Projeto criado do zero, validado em produção e comercializado com sucesso. Conta com arquitetura robusta e integração nativa com meios de pagamento.',
    tech: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Netlify Functions'],
    featured: true,
    status: 'vendido',
    role: 'Engenheiro de Software & Desenvolvedor Full-Stack',
    category: 'ecommerce',
    badge: 'Case de Sucesso B2C',
    keyFeatures: [
      'Arquitetura Serverless para processamento seguro de transações financeiras',
      'Persistência, autenticação e banco de dados em nuvem via Supabase (PostgreSQL)',
      'Catálogo escalável com fluxo de checkout fluido e otimizado para conversão'
    ],
  },
  {
    id: 'luxury-sales-site',
    title: 'Luxury E-commerce Platform',
    description:
      'Plataforma premium de e-commerce voltada para venda de serviços digitais. Conta com design moderno de alto padrão, autenticação dual, rate limiting anti-DDoS e painel administrativo completo com métricas avançadas em tempo real.',
    tech: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Prisma ORM', 'PostgreSQL'],
    featured: true,
    status: 'concluido',
    role: 'Desenvolvedor Full-Stack & Engenheiro de UI',
    category: 'ecommerce',
    badge: 'Enterprise E-commerce',
    keyFeatures: [
      'Proteção avançada contra abuso e DDoS com rate limiting em memória',
      'Catálogo dinâmico com variações complexas de produto e preenchimento ágil',
      'Gerenciamento de estado global no cliente com persistência otimizada',
      'Dashboard corporativo com métricas de vendas, conversão e logs em gráficos'
    ],
  },
  {
    id: 'alma-criativa-ecomerce',
    title: 'Plataforma de E-commerce & Configurador 3D',
    description:
      'Solução e-commerce full-stack corporativa com motor inteligente de cálculo de frete por geolocalização e configurador de produtos interativo. Integra checkout transparente e regras complexas de logística B2C.',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Mercado Pago API', 'Nominatim Geocoding'],
    demo: 'https://almacriativa.netlify.app',
    featured: true,
    status: 'concluido',
    role: 'Tech Lead & Frontend Engineer',
    category: 'ecommerce',
    badge: 'Solução Logística e Web',
    keyFeatures: [
      'Checkout transparente com fallback e processamento síncrono',
      'Motor de roteamento e frete geocodificado com precificação dinâmica por quilômetro',
      'Configuradores interativos no cliente para montagem de pedidos personalizados',
      'Controle inteligente de malha logística e calendário de restrições'
    ],
  },
  {
    id: 'desktop-csharp-apps',
    title: 'Ecossistema de Ferramentas Desktop (.NET / C++)',
    description:
      'Desenvolvimento de aplicações corporativas nativas para ambiente Windows. Automações industriais, painéis administrativos locais e utilitários de alta velocidade de processamento desenvolvidos em C# e C++.',
    tech: ['C#', '.NET', 'WinForms', 'WPF', 'C++', 'Automação'],
    featured: true,
    status: 'ativo',
    role: 'Engenheiro de Software Desktop',
    category: 'desktop',
    badge: 'Aplicações Nativas',
    keyFeatures: [
      'Softwares Windows com interfaces ricas e assíncronas (WPF e WinForms)',
      'Utilitários otimizados em C++ para processamento rápido de grande volume de dados',
      'Comunicação direta com processos de baixo nível e integrações de hardwares locais'
    ],
  },
  {
    id: 'mobile-custom-apps',
    title: 'Aplicações Mobile Híbridas & Nativas',
    description:
      'Desenvolvimento de aplicativos empresariais para dispositivos móveis focados em experiência do usuário e performance. Integração nativa com APIs REST, serviços de notificação e layouts responsivos para iOS e Android.',
    tech: ['Mobile UI', 'React Native', 'TypeScript', 'REST APIs', 'UX Engineering'],
    featured: true,
    status: 'ativo',
    role: 'Engenheiro Mobile',
    category: 'mobile',
    badge: 'Iniciativas Mobile',
    keyFeatures: [
      'Arquitetura Mobile-first com foco absoluto em responsividade e tempos de resposta',
      'Sincronização assíncrona de dados corporativos no dispositivo (Offline-first readiness)',
      'Interfaces fluidas aderentes aos guidelines de Material Design e Human Interface Guidelines'
    ],
  }
];
