# Plano 01 — Redesign Terminal + Discloud + Galeria + Projetos

**Criado:** 2026-05-30  
**Status:** 🟢 Pronto para implementar (Fase 0 dados concluída)  
**Objetivo:** Transformar o portfólio numa experiência estilo terminal/CMD, com boot animado, scroll sincronizado, galeria de fotos, mais projetos centralizados e deploy na Discloud.

---

## Visão geral

O site deixa de parecer um landing page moderno (roxo/ciano, glassmorphism) e passa a simular um **terminal interativo** — como abrir um CMD e rodar `npm run kiover-portfolio`.

```
[Boot Screen]  →  npm run kiover-portfolio  →  [Terminal UI com seções]
     3–5s              typing + logs                    scroll + comandos
```

---

## Requisitos do usuário

| # | Requisito | Prioridade |
|---|-----------|------------|
| 1 | Tema terminal/CMD em todo o site | Alta |
| 2 | Tela de carregamento ao abrir (`npm run kiover-portfolio`) | Alta |
| 3 | Fonte monospace estilo terminal | Alta |
| 4 | Scroll suave + sincronização com menu (scroll-spy) | Alta |
| 5 | Seção de galeria de fotos | Média |
| 6 | Mais projetos com links reais salvos no portfólio | Alta |
| 7 | Hospedar na Discloud | Alta |
| 8 | Planos e docs sempre em `docs/` | Alta |

---

## Fase 0 — Preparação (infra + dados)

### 0.1 Centralizar conteúdo em `src/data/`

Hoje textos, projetos e links estão espalhados nos componentes. Mover para:

```
src/data/
├── profile.ts      # nome, email, discord, github, bio, stats
├── projects.ts     # projetos + colaborações (com links)
├── skills.ts       # habilidades por categoria
├── gallery.ts      # fotos da galeria
└── nav.ts          # links de navegação + ids das seções
```

**Benefício:** adicionar projeto = editar um arquivo; IA e humano sabem onde ir.

### 0.2 Template para novos projetos

Cada projeto terá:

```ts
interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  date?: string;        // ex: "2025-03"
  status: 'ativo' | 'arquivado' | 'em-andamento';
}
```

**Ação do Kiover:** enviar lista de projetos novos com título, descrição, links GitHub/demo e tech stack. Não inventar links.

### 0.3 Projetos já no repo (referência)

| Projeto | GitHub | Demo |
|---------|--------|------|
| Roblox × Discord Integration | [safadaooofc](https://github.com/safadaooofc) | pendente |
| jogo_cobrinha | [link](https://github.com/safadaooofc/jogo_cobrinha) | pendente |
| detroir | [link](https://github.com/safadaooofc/detroir) | pendente |
| Bot Whitelist & Advertências | [safadaooofc](https://github.com/safadaooofc) | [Discord](https://discord.gg/wWqWwYsnkr) |

> Slots reservados para projetos que o Kiover vai informar na implementação.

---

## Fase 1 — Design system Terminal

### 1.1 Paleta de cores

Substituir roxo/ciano por estética terminal:

| Token | Valor | Uso |
|-------|-------|-----|
| `terminal-bg` | `#0c0c0c` | Fundo principal (preto CMD) |
| `terminal-surface` | `#1a1a1a` | Painéis, cards |
| `terminal-border` | `#333333` | Bordas |
| `terminal-green` | `#00ff41` | Prompt, sucesso, links (estilo Matrix/CMD) |
| `terminal-amber` | `#ffb000` | Avisos, destaques secundários |
| `terminal-red` | `#ff5f56` | Erros, botão fechar |
| `terminal-yellow` | `#ffbd2e` | Botão minimizar |
| `terminal-blue` | `#27c93f` / `#58a6ff` | Info, paths |
| `terminal-muted` | `#6a737d` | Texto secundário |
| `terminal-cursor` | `#00ff41` | Cursor piscando |

Manter **verde como cor primária** — identidade forte de terminal.

### 1.2 Tipografia

| Uso | Fonte | Fallback |
|-----|-------|----------|
| Todo o site | **JetBrains Mono** | Fira Code, Consolas, monospace |

- Remover Inter como fonte principal
- Tamanho base: `14px`–`16px` (terminal real)
- `line-height: 1.6`
- Cursor piscando em prompts: `@keyframes blink`

Google Fonts:
```
JetBrains+Mono:wght@400;500;600;700
```

### 1.3 Componentes visuais base

Criar em `src/components/terminal/`:

| Componente | Função |
|------------|--------|
| `TerminalWindow` | Moldura com barra de título (● ● ●) + título `kiover@portfolio ~` |
| `TerminalPrompt` | Linha `kiover@portfolio:~$ comando` |
| `TerminalOutput` | Bloco de texto/output monospace |
| `TerminalLine` | Linha com prefixo `$` ou `>` |
| `TypingText` | Efeito de digitação caractere a caractere |
| `Cursor` | Cursor `_` piscando |

### 1.4 Efeitos opcionais (sutis)

- Scanlines leves (`opacity: 0.03`) — CRT feel
- Text-shadow verde fraco em títulos
- **Sem** glassmorphism, blobs coloridos ou gradientes roxos
- Hover: invert/brilho verde, não scale exagerado

---

## Fase 2 — Boot Screen (carregamento inicial)

### 2.1 Fluxo

```
Usuário abre site
       ↓
[Fullscreen preto]
       ↓
kiover@portfolio:~$ npm run kiover-portfolio     ← typing
       ↓
> kiover-portfolio@1.0.0 start
> vite --host                                      ← logs fake
  VITE v7.x ready in 420ms
  ➜ Local: http://localhost:5173/
       ↓
[████████░░] Loading modules... 80%               ← barra ou dots
       ↓
✓ Portfolio loaded successfully
       ↓
[Fade out 500ms] → App principal
```

### 2.2 Componente `BootScreen.tsx`

- Duração total: **3–5 segundos** (configurável)
- `sessionStorage.setItem('booted', '1')` — não repetir boot na mesma sessão (opcional; perguntar preferência)
- Skip ao clicar ou pressionar Enter/Esc
- Acessibilidade: `aria-live="polite"`, respeitar `prefers-reduced-motion`

### 2.3 Script npm (easter egg real)

Adicionar em `package.json`:

```json
"kiover-portfolio": "vite"
```

Assim `npm run kiover-portfolio` funciona de verdade no dev.

---

## Fase 3 — Refatorar seções para terminal

Cada seção vira um "comando" ou "output" dentro de um `TerminalWindow`.

### 3.1 Navbar → Command Bar

```
kiover@portfolio:~$ help

  home      about      skills      projects      gallery      contact

kiover@portfolio:~$ cd about█
```

- Links viram comandos
- Seção ativa destacada em verde (scroll-spy)
- Mobile: menu colapsável estilo `help` output

### 3.2 Hero → Welcome banner

```
┌─ kiover@portfolio ─────────────────────────────────────┐
│ $ whoami                                               │
│ kiover — Dev Roblox | Scripting & APIs                 │
│                                                        │
│ $ cat status.txt                                       │
│ [●] Disponível para projetos                           │
│                                                        │
│ $ ls links/                                            │
│ github/  discord/  email/                              │
└────────────────────────────────────────────────────────┘
```

### 3.3 About → `cat about.md`

- Bio como markdown renderizado ou texto pré-formatado
- Stats como output de `wc -l` / contadores estilo terminal

### 3.4 Skills → `ls -la ~/skills/`

```
drwxr-xr-x  roblox-lua
drwxr-xr-x  discord-bot
-rw-r--r--  typescript
...
```

Ou grid de "arquivos" com extensão `.skill`.

### 3.5 Projects → `ls ~/projects/` + `cat README`

- Projeto destaque: output expandido com `tree` ou bloco maior
- Cards menores: linhas de `ls -l` com links `[github]` `[demo]`
- Colaborações: subpasta `~/collabs/`

### 3.6 Gallery → `ls ~/gallery/` (NOVA SEÇÃO)

```
$ ls ~/gallery/
[img1.png]  [img2.png]  [img3.png]

$ open img1.png
┌──────────────────┐
│   [preview]      │  ← lightbox ao clicar
└──────────────────┘
```

**Estrutura de dados (`gallery.ts`):**

```ts
interface GalleryItem {
  id: string;
  src: string;          // /gallery/nome.jpg ou URL
  alt: string;
  caption?: string;
  category?: string;    // ex: "roblox", "dev", "pessoal"
}
```

**Assets:** `public/gallery/` — Kiover coloca as fotos lá.

### 3.7 Contact → `mail --compose`

- Form estilo terminal (inputs com borda simples, prompt labels)
- Campos: `To:`, `From:`, `Subject:`, `Body:`

### 3.8 Footer → status bar

```
[kiover@portfolio] uptime: 2026 | made with <3 | exit 0
```

---

## Fase 4 — Scroll suave + sincronização

### 4.1 Scroll suave global

Já existe `scroll-behavior: smooth` em `index.css`. Manter e reforçar:

```css
html { scroll-behavior: smooth; scroll-padding-top: 4rem; }
```

`scroll-padding-top` compensa navbar fixa.

### 4.2 Scroll-spy (nav ↔ seção ativa)

Hook `useScrollSpy` em `src/hooks/useScrollSpy.ts`:

- Observa seções via `IntersectionObserver`
- Threshold ~0.3–0.5
- Retorna `activeId` → Navbar destaca comando ativo
- Ao clicar nav: `element.scrollIntoView({ behavior: 'smooth' })`

### 4.3 Sincronização URL (opcional)

- Atualizar hash: `#about`, `#projects` (já funciona com âncoras)
- Opcional: highlight no boot se URL já tem hash

### 4.4 Indicador de progresso (opcional)

Barra fina no topo estilo loading de terminal conforme scroll da página.

---

## Fase 5 — Deploy Discloud

### 5.1 Pré-requisitos Discloud

| Requisito | Detalhe |
|-----------|---------|
| Plano | **Platinum ou superior** (obrigatório para `TYPE=site`) |
| Subdomínio | Registrar ex: `kiover.discloud.app` |
| Porta | **8080** |
| Host | **0.0.0.0** |

### 5.2 Mudança no build

**Remover `vite-plugin-singlefile`** — Discloud serve pasta `dist/` via Express, não HTML único.

Novo fluxo:
```
npm run build  →  dist/ (JS, CSS, assets separados)
Express serve dist/ na porta 8080
```

### 5.3 Arquivos de deploy

**`server.js`** (Express estático):

```js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`kiover-portfolio running on port ${PORT}`);
});
```

**`discloud.config`:**

```ini
NAME=Kiover Portfolio
TYPE=site
MAIN=server.js
ID=kiover
RAM=512
BUILD=npm run build
START=node server.js
```

> `ID` = subdomínio escolhido na Discloud (sem `.discloud.app`).

### 5.4 Dependências novas

```json
"dependencies": {
  "express": "^4.21.0"
}
```

### 5.5 Checklist deploy

- [ ] Conta Discloud Platinum+
- [ ] Subdomínio `kiover` (ou outro) reservado
- [ ] `npm run build` local sem erros
- [ ] Zip do projeto (sem `node_modules`, sem `dist` manual se usar BUILD)
- [ ] Upload via painel / CLI / bot Discord Discloud
- [ ] Testar `https://kiover.discloud.app`

### 5.6 Alternativa se não tiver Platinum

GitHub Pages ou Vercel (grátis) como fallback — documentar em `docs/decisoes/`.

---

## Fase 6 — Ordem de implementação sugerida

```
Semana / Sprint lógico:

[1] Fase 0 — src/data/ + mover conteúdo existente
[2] Fase 1 — Tema terminal (CSS, fontes, TerminalWindow)
[3] Fase 2 — BootScreen
[4] Fase 3 — Refatorar seções uma a uma:
        Navbar → Hero → About → Skills → Projects → Gallery → Contact → Footer
[5] Fase 4 — useScrollSpy + scroll-padding
[6] Fase 5 — Express + discloud.config + testar build
[7] Kiover envia fotos + projetos novos → preencher data files
[8] Deploy Discloud + changelog
```

### Prioridade se quiser ver resultado rápido (MVP)

1. Boot screen + tema terminal básico (cores + fonte)
2. Hero + Navbar terminal
3. Scroll-spy
4. Projects com data centralizada
5. Gallery (placeholder até ter fotos)
6. Discloud

---

## Estrutura final do projeto (alvo)

```
Port-folio/
├── CLAUDE.md
├── discloud.config
├── server.js
├── docs/
│   ├── README.md
│   ├── planos/
│   ├── decisoes/
│   └── changelog/
├── public/
│   └── gallery/           # fotos do Kiover
├── src/
│   ├── data/
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── gallery.ts
│   │   └── nav.ts
│   ├── hooks/
│   │   └── useScrollSpy.ts
│   ├── components/
│   │   ├── terminal/
│   │   │   ├── TerminalWindow.tsx
│   │   │   ├── TerminalPrompt.tsx
│   │   │   ├── TypingText.tsx
│   │   │   └── BootScreen.tsx
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Gallery.tsx      # NOVO
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
└── package.json
```

---

## O que preciso do Kiover antes/durante

| Item | Para quê | Status |
|------|----------|--------|
| Lista de projetos novos | `projects.ts` | ✅ Feito (`projetos.txt` + `projeto2.md`) |
| Papel Reuel (EB + Capital MT) | Bio + trabalho atual | ✅ Feito |
| Plano Platinum Discloud | Deploy | ✅ Confirmado |
| Paleta terminal CMD | CSS | ✅ Verde/preto |
| Fotos para galeria | `public/gallery/` | ⏳ Pendente |
| Subdomínio portfólio | `discloud.config` ID | ⏳ Sugestão: `kiover` |
| Links Roblox dos mapas | Botão "Jogar" | ⏳ Opcional |

---

## Riscos e mitigações

| Risco | Mitigação |
|-------|-----------|
| Discloud exige plano pago | Documentar fallback GitHub Pages |
| singlefile removido quebra workflow atual | Só Discloud usa Express; dev continua igual |
| Terminal ilegível no mobile | Fonte mín 14px, padding generoso, testar iPhone |
| Muita animação = lento | `prefers-reduced-motion`, boot skippable |
| Fotos pesadas | Otimizar WebP, lazy load |

---

## Critérios de "pronto"

- [ ] Site inteiro visualmente terminal (fonte mono, verde/preto, janelas CMD)
- [ ] Boot `npm run kiover-portfolio` ao abrir
- [ ] Nav sincronizada com scroll (seção ativa visível)
- [ ] Galeria com pelo menos 3 fotos (ou placeholders claros)
- [ ] Projetos em `src/data/projects.ts` com links reais
- [ ] Deploy funcionando em `*.discloud.app`
- [ ] Plano e changelog atualizados em `docs/`

---

## Próximo passo imediato

**Começar Fase 0 + Fase 1** — centralizar dados, aplicar tema terminal base e BootScreen. Depois refatorar seção por seção.

Quando o Kiover confirmar, iniciamos a implementação na ordem acima.
