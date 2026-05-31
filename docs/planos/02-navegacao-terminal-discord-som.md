# Plano 02 — Navegação por terminal + Som + Visual CMD

**Criado:** 2026-05-30  
**Atualizado:** 2026-05-30 — webhook Discord **removido** por decisão do Kiover  
**Status:** ✅ Concluído (2026-05-31)  
**Depende de:** Plano 01 (base terminal já implementada)  
**Objetivo:** Navegação imersiva via terminal (sem scroll-spy), som de teclado e visual CMD/PowerShell profissional (preto + cinza). Deploy Discloud com Express estático apenas.

---

## Visão geral

O site deixa de ser uma **página longa com scroll** e passa a ser uma **experiência de terminal** onde cada categoria abre como um "comando executado":

```
Usuário clica "Projetos"
       ↓
[Terminal overlay]
C:\Users\kiover\portfolio> ls ~/projects/
█                              ← typing + som de teclado
       ↓
[Conteúdo da seção Projetos]
```

**Remover:** `useScrollSpy`, navegação por scroll entre seções.  
**Manter:** BootScreen na primeira visita da sessão.

**Não incluir:** Discord webhook, `POST /api/contact`, rate limit, backend de formulário.

---

## Decisões do Kiover

| Tópico | Decisão |
|--------|---------|
| Navegação | Clique na categoria → terminal digita o comando → mostra seção (sem scroll-spy) |
| Visual | **CMD clássico / PowerShell** — fundo preto, texto cinza |
| Contato | **Links diretos** — email (`mailto:`), Discord, GitHub (sem webhook) |
| Som | Teclado ao digitar no terminal e ao trocar categoria (toggle mute) |
| Webhook | ❌ **Removido** — não implementar |

---

## Fase 1 — Redesign visual CMD / PowerShell

### 1.1 Paleta

| Token | Valor | Uso |
|-------|-------|-----|
| `terminal-bg` | `#0c0c0c` | Fundo CMD |
| `terminal-surface` | `#1e1e1e` | Barra de título, inputs |
| `terminal-border` | `#3a3a3a` | Bordas |
| `terminal-text` | `#cccccc` | Texto principal |
| `terminal-muted` | `#767676` | Labels secundários |
| `terminal-accent` | `#569cd6` | Links (azul PowerShell, uso mínimo) |
| `terminal-success` | `#6aab73` | Sucesso discreto |
| `terminal-error` | `#f14c4c` | Erros |

**Remover:** glow verde, `terminal-green` dominante, scanlines fortes.

### 1.2 Tipografia

`'Consolas', 'JetBrains Mono', 'Courier New', monospace` — 14px.

### 1.3 TerminalWindow

Barra de título `#1e1e1e`, botões cinza, estilo `cmd.exe` / PowerShell — sem estética Matrix.

### 1.4 Arquivos

`src/index.css`, `TerminalWindow.tsx`, todos os componentes (trocar classes verdes por cinza/accent).

---

## Fase 2 — Navegação por terminal (sem scroll-spy)

### 2.1 Arquitetura

```tsx
type ViewId = 'home' | 'about' | 'skills' | 'projects' | 'community' | 'contact';

const [activeView, setActiveView] = useState<ViewId>('home');
const [isTransitioning, setIsTransitioning] = useState(false);
```

### 2.2 Fluxo

1. Clique no nav → `isTransitioning = true`
2. `TerminalTransition` digita o comando + som
3. `activeView` atualiza
4. `ViewRouter` renderiza a seção

### 2.3 Componentes novos

| Componente | Função |
|------------|--------|
| `NavigationContext.tsx` | `navigateTo(id)`, estado global |
| `TerminalShell.tsx` | Layout navbar + conteúdo |
| `TerminalTransition.tsx` | Overlay typing |
| `ViewRouter.tsx` | Mapa view → componente |

### 2.4 Remover

- `src/hooks/useScrollSpy.ts`
- `activeSection` em App/Navbar
- Links `<a href="#...">` → `button` + `navigateTo`

### 2.5 Hash URL (opcional)

`#projects` dispara `navigateTo('projects')` sem scroll.

---

## Fase 3 — Som de teclado

### 3.1 Eventos

| Evento | Som |
|--------|-----|
| Transição de categoria | keypress |
| BootScreen typing | keypress |
| Inputs (se houver) | keypress volume baixo |

### 3.2 `useKeyboardSound.ts`

- Web Audio API ou buffer curto
- Toggle `localStorage` `terminal-sound`
- Desligado se `prefers-reduced-motion: reduce`
- `SoundToggle.tsx` no canto do terminal

### 3.3 Integração

`TypingText.tsx` → callback `onCharTyped`

---

## Fase 4 — Contato (sem backend)

Seção contato **somente informativa**:

| Canal | Implementação |
|-------|---------------|
| Email | `mailto:paoteste40@gmail.com` |
| Discord | Link para app / perfil `kiover` |
| GitHub | Link `profile.links.github` |

- **Sem** formulário POST
- **Sem** webhook
- Opcional: botão `[ copiar discord ]` no clipboard
- Texto terminal: `C:\> mail — use os links abaixo para contato direto`

Se no futuro quiser formulário real: Formspree / EmailJS (fora deste plano).

---

## Fase 5 — Deploy Discloud

### 5.1 `server.js` (apenas estático)

```js
// Express serve dist/ + SPA fallback
// SEM rotas /api/*
// PORT 8080, host 0.0.0.0
```

### 5.2 `discloud.config`

```ini
NAME=Kiover Portfolio
TYPE=site
MAIN=server.js
ID=kiover
RAM=512
BUILD=npm install && npm run build
START=node server.js
```

### 5.3 Build

- Remover `vite-plugin-singlefile` quando implementar deploy
- `npm run build` → `dist/`

### 5.4 Dev

```json
"dev": "vite",
"start": "node server.js"
```

Sem `concurrently` obrigatório — API não existe.

---

## Ordem de implementação

```
[1] Fase 1 — Visual CMD/PowerShell
[2] Fase 2 — NavigationContext + ViewRouter + TerminalTransition
[3] Fase 2 — Navbar + remover scroll-spy + adaptar seções
[4] Fase 3 — useKeyboardSound + SoundToggle
[5] Fase 4 — Contact.tsx só com links (remover form fake se existir)
[6] Fase 5 — server.js + discloud.config
[7] Testes + changelog
```

---

## Estrutura de arquivos (alvo)

```
Port-folio/
├── server.js              # só static, sem /api
├── discloud.config
├── src/
│   ├── context/NavigationContext.tsx
│   ├── hooks/useKeyboardSound.ts
│   ├── components/terminal/
│   │   ├── TerminalShell.tsx
│   │   ├── TerminalTransition.tsx
│   │   ├── ViewRouter.tsx
│   │   └── SoundToggle.tsx
│   └── App.tsx
└── docs/planos/02-navegacao-terminal-discord-som.md
```

---

## Checklist

### Visual
- [x] Preto + cinza, sem glow verde
- [x] TerminalWindow CMD/PowerShell
- [x] Consolas

### Navegação
- [x] Clique → terminal digita → troca view
- [x] scroll-spy removido
- [x] View única por vez

### Som
- [x] Teclado nas transições
- [x] Toggle mute

### Contato
- [x] Links mailto / Discord / GitHub
- [x] Sem webhook, sem POST /api

### Deploy
- [x] server.js estático
- [x] discloud.config
- [ ] Subdomínio Discloud confirmado no painel (`kiover`)

---

## O que o Kiover precisa

| Item | Quando |
|------|--------|
| Subdomínio Discloud (`kiover`?) | Deploy |

---

## Referências

- Plano 01: `docs/planos/01-redesign-terminal-discloud.md`
- ADR: `docs/decisoes/02-cmd-navegacao-imersiva.md`
- Remoção webhook: `docs/decisoes/03-sem-webhook-contato.md`
- Discloud: https://docs.discloud.com/how-to-host/websites-and-apis
