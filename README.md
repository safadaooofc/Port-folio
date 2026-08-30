# 💻 Kiover — Developer Portfolio

> Portfólio interativo no estilo terminal/CMD desenvolvido com React 19, TypeScript, Vite e Tailwind CSS, hospedado e integrado à Discloud via deploy contínuo pelo GitHub.

[![Deploy Discloud](https://img.shields.io/badge/Deploy-Discloud-5865F2?style=flat&logo=discord)](https://kiover.discloud.app)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat&logo=react)](https://react.dev/)
[![LLMs.txt](https://img.shields.io/badge/AI_Ready-llms.txt-10B981?style=flat)](https://kiover.discloud.app/llms.txt)

---

## 🌟 Sobre o Desenvolvedor

- **Nome:** Kiover (`@safadaooofc`)
- **Especialidades:**
  - 🖥️ **Desktop & Sistemas (PC):** Programas nativos e automações em C# (.NET, WinForms, WPF) e C++.
  - 📱 **Mobile:** Aplicativos multiplataforma com interfaces reativas e integração a APIs REST.
  - 🛍️ **E-Commerce & Pagamentos:** Next.js 15/16, React 19, PIX instantâneo (AbacatePay/Mercado Pago), cálculo de frete por geolocalização e configuradores de produtos.
  - 🤖 **Bots & Automações:** Discord Bots em discord.js e discord.py com Cogs, webhooks em tempo real e persistência com PostgreSQL, Prisma e Supabase.
  - 🎮 **Roblox Luau:** Sistemas de economia, roleplay complexo, telemetria em tempo real para Discord e otimização para 60 FPS no Mobile.
- **🎁 Projetos Pequenos Gratuitos Sob Medida:** Aberto para desenvolver bots de Discord, landing pages, sites e pequenos softwares para PC/Mobile gratuitamente para parcerias e expansão de portfólio.
- **Contato:**
  - Discord: `kiover`
  - E-mail: `paoteste40@gmail.com`
  - GitHub: [github.com/safadaooofc](https://github.com/safadaooofc)

---

## 🚀 Projetos em Destaque no Portfólio

| Projeto | Descrição | Stack | Status |
| :--- | :--- | :--- | :--- |
| **[BloodStore](https://github.com/xsag7/bloodstore3)** | E-commerce digital com Supabase e Serverless Functions no Netlify | React, TypeScript, Supabase, Netlify | `[Projeto Vendido]` |
| **[Sagaz Site](https://github.com/safadaooofc/sagaz-site)** | Plataforma de produtos digitais e recargas PIX com Bot Discord integrado | Next.js 16, Tailwind v4, Prisma v7, AbacatePay, discord.js | `[Collab / Destaque]` |
| **[Luxury Sales](https://github.com/safadaooofc/luxury-sales-site)** | E-commerce de jogos digitais com NextAuth v5, rate limiting e painel admin | Next.js 15, React 19, Prisma, PostgreSQL, Zustand | `[Collab / Destaque]` |
| **[Alma Criativa Confeitaria](https://almacriativa.netlify.app)** | E-commerce com configuradores "Monte seu Bolo", checkout Mercado Pago e frete Nominatim | React 19, TypeScript, Tailwind CSS, Mercado Pago API | `[E-commerce Full-Stack]` |
| **[LP Community](https://github.com/safadaooofc/lp-community)** | Plataforma de vendas GTA V com calculadora dinâmica de saldo em tempo real | React 18, Vite, Tailwind CSS, Framer Motion | `[Collab / UI-UX]` |
| **[Softwares Desktop PC](https://github.com/safadaooofc)** | Aplicativos e utilitários nativos para Windows em C# e C++ | C# (.NET / WinForms / WPF), C++, Windows API | `[Desktop & Sistemas]` |
| **[Reuel Site & CMS](https://github.com/safadaooofc/Site_regras_wl)** | Site institucional e CMS com Discord OAuth2 e slash commands REST | React 19, Node.js, Express, Discloud | `[Projeto Principal Reuel]` |

---

## 🤖 Sistema de Indexação para IAs (AI Readiness)

O portfólio implementa os padrões modernos para que IAs de busca e LLMs leiam e entendam 100% do conteúdo:

1. **[`/llms.txt`](public/llms.txt):** Padrão aberto oficial [llmstxt.org](https://llmstxt.org/) com resumo de perfil, projetos e contato.
2. **[`/llms-full.txt`](public/llms-full.txt):** Dossiê completo com todos os estudos de caso, decisões técnicas e métricas de horas.
3. **[`/robots.txt`](public/robots.txt):** Diretivas explícitas liberando indexação para GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.
4. **[`/sitemap.xml`](public/sitemap.xml):** Mapa completo de rotas e arquivos de IA.
5. **Schema.org JSON-LD:** Grafo semântico estruturado no `index.html` com entidades `Person` e `ProfilePage`.

---

## 🛠️ Como Executar Localmente

### 1. Clonar e Instalar:
```bash
git clone https://github.com/safadaooofc/Port-folio.git
cd Port-folio
npm install
```

### 2. Rodar em Modo Desenvolvimento (Vite):
```bash
npm run dev
# Acesse em http://localhost:5173
```

### 3. Build e Teste do Servidor de Produção (Discloud Express):
```bash
npm run build
npm start
# Acesse em http://localhost:8080
```

---

## ☁️ Deploy Contínuo na Discloud

Com a conexão GitHub ativada na Discloud:
1. Faça suas alterações no código localmente.
2. Execute o commit e o push:
   ```bash
   git add .
   git commit -m "feat: atualizações do portfólio"
   git push
   ```
3. A Discloud puxará os commits automaticamente, executará o `BUILD=npm install --include=dev && npm run build` e colocará a nova versão no ar em `https://kiover.discloud.app`.
