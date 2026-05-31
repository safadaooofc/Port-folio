# CLAUDE.md — Contexto do Projeto

Este arquivo orienta assistentes de IA (Claude, Cursor, etc.) sobre o que é este repositório, como ele funciona e como contribuir de forma consistente.

---

## Documentação (`docs/`) — OBRIGATÓRIO

> **Sempre que criarmos um plano, tomarmos uma decisão ou implementarmos algo relevante, salvar em `docs/`.**

| Pasta | Uso |
|-------|-----|
| `docs/planos/` | Planos de features e refactors (ler antes de implementar) |
| `docs/decisoes/` | Decisões arquiteturais (ADRs) |
| `docs/changelog/` | O que foi feito em cada sessão (`YYYY-MM-DD.md`) |

**Plano ativo:** [docs/planos/02-navegacao-terminal-discord-som.md](./docs/planos/02-navegacao-terminal-discord-som.md) — navegação imersiva por terminal, som de teclado, visual CMD/PowerShell (**sem webhook**).

Plano anterior (base): [docs/planos/01-redesign-terminal-discloud.md](./docs/planos/01-redesign-terminal-discloud.md)

Fluxo para o assistente:
1. Ler o plano ativo em `docs/planos/`
2. Implementar conforme fases do plano
3. Atualizar checklist do plano e criar entrada em `docs/changelog/`

---

## O que é este projeto

**Portfólio pessoal de Kiover** (`safadaoooofc`) — site de apresentação profissional em página única (SPA), em **português (pt-BR)**.

Objetivo: mostrar quem é o desenvolvedor, suas habilidades, projetos (principalmente Roblox, Discord bots e web) e canais de contato.

| Campo | Valor |
|-------|-------|
| Nome / marca | **Kiover** |
| GitHub | [safadaooofc](https://github.com/safadaooofc) |
| Discord | `kiover` |
| Email | `paoteste40@gmail.com` |
| Localização | Brasil |
| Foco principal | Dev Roblox (Tycoon, EB, RP), scripting, APIs, bots Discord |

---

## Stack técnica

| Camada | Tecnologia |
|--------|------------|
| Framework | React 19 + TypeScript |
| Build | Vite 7 |
| Estilo | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animações | Framer Motion |
| Ícones | Lucide React |
| Utilitários | `clsx` + `tailwind-merge` (`cn()`) |
| Deploy (atual) | `vite-plugin-singlefile` → HTML único em `dist/` |
| Deploy (alvo) | **Discloud** — Express na porta 8080 servindo `dist/` |

Não há backend de API hoje. Para Discloud será adicionado `server.js` (Express estático apenas).

### Roadmap visual (plano 02 — próximo)

- **Visual CMD/PowerShell:** preto + cinza, Consolas, sem glow verde
- **Navegação imersiva:** clique na categoria → terminal digita comando → troca view (**sem scroll-spy**)
- **Som de teclado:** typing nas transições + toggle mute
- **Contato:** links diretos (mailto, Discord, GitHub) — **sem webhook**
- **Deploy Discloud:** Express estático servindo `dist/` apenas

Detalhes: `docs/planos/02-navegacao-terminal-discord-som.md`

---

## Estrutura do repositório

```
Port-folio/
├── CLAUDE.md               # Este arquivo
├── docs/                   # Planos, decisões, changelog (SEMPRE atualizar)
├── index.html              # Entry HTML, fonts, título da página
├── vite.config.ts          # Vite + React + Tailwind + alias @/
├── discloud.config         # (a criar) Config deploy Discloud
├── server.js               # (a criar) Express porta 8080
├── tsconfig.json           # Strict TS, path alias @/* → src/*
├── public/gallery/         # (a criar) Fotos da galeria
├── src/
│   ├── main.tsx            # Bootstrap React (StrictMode)
│   ├── App.tsx             # Layout principal — monta todas as seções
│   ├── index.css           # Tailwind + tema + utilitários CSS customizados
│   ├── data/               # (a criar) profile, projects, skills, gallery, nav
│   ├── hooks/              # (a criar) useScrollSpy
│   ├── utils/
│   │   └── cn.ts           # Helper para merge de classes Tailwind
│   └── components/
│       ├── terminal/       # (a criar) BootScreen, TerminalWindow, etc.
│       ├── Navbar.tsx      # Nav fixa, scroll blur, menu mobile
│       ├── Hero.tsx        # Seção inicial (#home)
│       ├── About.tsx       # Sobre mim + stats (#about)
│       ├── Skills.tsx      # Grid de habilidades (#skills)
│       ├── Projects.tsx    # Projetos + colaborações (#projects)
│       ├── Contact.tsx     # Info + formulário (#contact)
│       └── Footer.tsx      # Rodapé
└── .vscode/launch.json     # Debug: abre Chrome em localhost:5173
```

---

## Arquitetura da página

Site **single-page** com navegação por âncoras (`#home`, `#about`, `#skills`, `#projects`, `#contact`).

```
App
├── Navbar (fixo no topo)
├── Hero
├── About
├── Skills
├── Projects
├── Contact
└── Footer
```

Cada seção é um componente independente em `src/components/`. Não existe pasta `data/` — **conteúdo (textos, links, projetos, skills) está inline** dentro de cada componente como arrays/objetos locais.

---

## Onde editar conteúdo

| O que mudar | Arquivo |
|-------------|---------|
| Título da aba | `index.html` |
| Nome, tagline, links sociais do hero | `Hero.tsx` |
| Bio, estatísticas (20+ projetos, etc.) | `About.tsx` |
| Lista de tecnologias | `Skills.tsx` — array `skills` |
| Projetos e colaborações | `Projects.tsx` — arrays `projects` e `collaborations` |
| Email, Discord, formulário | `Contact.tsx` |
| Links do menu | `Navbar.tsx` — `navLinks` |
| Copyright / links do rodapé | `Footer.tsx` |

### Formulário de contato

O form em `Contact.tsx` é **apenas visual** — ao enviar, mostra "Mensagem Enviada!" por 3 segundos e limpa os campos. **Não envia email nem chama API.** Para funcionar de verdade, integrar com serviço externo (Formspree, EmailJS, API própria, etc.).

---

## Design system

Definido em `src/index.css` via `@theme` (Tailwind v4):

| Token | Valor | Uso |
|-------|-------|-----|
| `primary` | `#8B5CF6` (roxo) | Botões, destaques, links hover |
| `primary-light` | `#A78BFA` | Texto secundário destacado |
| `primary-dark` | `#7C3AED` | Hover de botões |
| `accent` | `#06B6D4` (ciano) | Gradientes, detalhes |
| `dark-900` → `dark-500` | `#0a0a0f` → `#32324a` | Backgrounds e bordas |

**Fontes:** Inter (corpo), Fira Code (mono / tags de código).

**Classes utilitárias customizadas:**
- `.gradient-text` — texto com gradiente roxo → ciano
- `.glow` — sombra roxa nos botões
- `.card-hover` — lift + glow no hover
- `.blob` — formas blur de fundo
- `.animate-float`, `.animate-pulse-glow` — animações de decoração

**Padrão visual:** tema escuro, glassmorphism leve (`backdrop-blur`), animações de entrada com Framer Motion (`whileInView`, `viewport={{ once: true }}`).

---

## Convenções de código

1. **Componentes funcionais** exportados como `export function Nome()`.
2. **TypeScript strict** — interfaces locais quando necessário (`Skill`, `Project`, etc.).
3. **Estilo:** Tailwind inline nas `className`; usar `cn()` só quando precisar merge condicional.
4. **Animações:** Framer Motion com delays escalonados (`delay: 0.2 + i * 0.1`).
5. **Ícones:** Lucide React, tamanhos 18–28px conforme contexto.
6. **Responsivo:** mobile-first com breakpoints `sm:`, `md:`, `lg:`.
7. **Acessibilidade básica:** `aria-label` em links só com ícone.
8. **Idioma do conteúdo:** português brasileiro. Manter tom profissional mas pessoal.
9. **Path alias:** `@/` aponta para `src/` (configurado em `vite.config.ts` e `tsconfig.json`).

---

## Comandos

```bash
npm install      # Instalar dependências
npm run dev      # Dev server → http://localhost:5173
npm run build    # Build produção → dist/ (HTML único)
npm run preview  # Preview do build
```

---

## Build e deploy

### Atual (temporário)

`vite-plugin-singlefile` gera um único `index.html` em `dist/`. Será **removido** quando Discloud estiver configurado.

### Alvo: Discloud

| Requisito | Valor |
|-----------|-------|
| `TYPE` | `site` |
| Plano | Platinum ou superior |
| Porta | `8080` |
| Host | `0.0.0.0` |
| Build | `BUILD=npm run build` no `discloud.config` |
| Start | `node server.js` (Express servindo `dist/`) |
| Subdomínio | Registrar na Discloud → `ID=nome` → `nome.discloud.app` |

Docs oficiais: https://docs.discloud.com/how-to-host/websites-and-apis

`dist/` está no `.gitignore`. Discloud roda o build no deploy se `BUILD` estiver definido.

---

## Tarefas comuns (o que o usuário pode pedir)

| Pedido | Abordagem |
|--------|-----------|
| Adicionar/remover projeto | Editar array `projects` em `Projects.tsx` |
| Mudar cores/tema | `@theme` em `index.css` |
| Nova seção (ex: Experiência) | Criar componente, importar em `App.tsx`, adicionar link em `Navbar.tsx` |
| Formulário funcional | Integrar backend/serviço em `Contact.tsx` |
| Trocar foto/avatar | Substituir placeholder "K" em `About.tsx` por `<img>` |
| SEO / meta tags | Adicionar em `index.html` (description, og:image, etc.) |
| Internacionalização | Extrair strings para arquivo de traduções (não existe ainda) |
| Refatorar dados | Mover arrays para `src/data/` se o conteúdo crescer |

---

## Diretrizes para o assistente

- **Documentar sempre:** planos, decisões e trabalho concluído → `docs/`.
- **Seguir o plano ativo** em `docs/planos/` antes de inventar arquitetura nova.
- **Escopo mínimo:** mudanças focadas no pedido; não refatorar o que não foi solicitado.
- **Identidade visual (plano 02):** CMD/PowerShell — preto `#0c0c0c`, cinza `#cccccc`, Consolas. **Não usar verde Matrix/glow** como cor dominante.
- **Navegação:** view única por categoria com terminal typing — **não usar scroll-spy**.
- **Conteúdo em pt-BR** salvo pedido explícito de outro idioma.
- **Não commitar** sem o usuário pedir.
- **Não inventar projetos ou links** — usar dados reais do GitHub/perfil ou perguntar.
- Ao adicionar dependências, justificar e manter o bundle leve (já usa singlefile).
- O portfólio representa um dev Roblox/web — respeitar esse nicho ao sugerir conteúdo.

---

## Estado atual / pendências conhecidas

### Redesign terminal (plano 01 — base feita)
- [x] Boot screen, src/data/, tema terminal base, scroll-spy (será removido no plano 02)

### Plano 02 — navegação imersiva + Discord + som
- [ ] Visual CMD/PowerShell (preto + cinza)
- [ ] Navegação por terminal typing (sem scroll-spy)
- [ ] Som de teclado + toggle mute
- [ ] Contato só com links (sem formulário backend)
- [ ] server.js estático + discloud.config
- [ ] Kiover: subdomínio Discloud

### Outros
- [ ] Formulário de contato não envia mensagens de verdade
- [ ] Avatar é placeholder (letra "K"), sem foto real
- [ ] Vários links `demo: '#'` sem URL real
- [ ] Sem README.md no repositório

---

## Resumo em uma frase

**SPA React portfólio do Kiover — em migração para UI estilo terminal/CMD, com boot animado, galeria, dados em `src/data/`, docs em `docs/`, deploy na Discloud.**
