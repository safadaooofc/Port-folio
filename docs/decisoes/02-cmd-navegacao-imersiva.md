# ADR 02 — CMD profissional + navegação imersiva + som

**Data:** 2026-05-30  
**Status:** Aceito (contato webhook revogado — ver ADR 03)  
**Plano:** [02-navegacao-terminal-discord-som.md](../planos/02-navegacao-terminal-discord-som.md)

## Contexto

O plano 01 implementou terminal com verde Matrix e scroll-spy. O Kiover quer experiência mais imersiva e profissional.

## Decisões

### Visual

| Antes | Depois |
|-------|--------|
| Verde `#00ff41` dominante + glow | **Preto `#0c0c0c` + cinza `#cccccc`** |
| Estética Matrix/hacker | **CMD clássico / PowerShell** |

### Navegação

| Antes | Depois |
|-------|--------|
| Página longa com scroll | **Uma view por vez** |
| scroll-spy na navbar | **Removido** |
| `<a href="#section">` | **`navigateTo(viewId)` + terminal typing** |

### Contato

- Links diretos (email, Discord, GitHub)
- **Sem webhook** (ADR 03)

### Som

- Som de teclado nas transições e typing
- Toggle mute em `localStorage`
- Desligado se `prefers-reduced-motion: reduce`

## Consequências

- `useScrollSpy.ts` será removido
- Seções deixam de ser empilhadas verticalmente
- `server.js` apenas estático (sem `/api/contact`)

## Pendente do Kiover

- [ ] Subdomínio Discloud do portfólio (`kiover`?)
