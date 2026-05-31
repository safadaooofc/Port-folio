# Documentação — Portfólio Kiover

Toda decisão, plano e registro de trabalho deste projeto fica aqui.  
**Ferramenta de IA:** Cursor — contexto principal em [`CURSOR.md`](../CURSOR.md) na raiz.

---

## Regra do projeto

> **Sempre que fizermos algo novo ou criarmos um plano, salvar em `docs/`.**

O Cursor Agent deve consultar e atualizar esta pasta **antes e depois** de cada tarefa relevante.

---

## Fluxo para o Cursor Agent

```
1. Ler CURSOR.md
2. Ler plano ativo (docs/planos/)
3. Implementar conforme fases
4. Atualizar checklist do plano
5. Registrar em docs/changelog/YYYY-MM-DD.md
6. Não commitar sem o Kiover pedir
```

---

## Índice

| Documento | Descrição | Status |
|-----------|-----------|--------|
| [../CURSOR.md](../CURSOR.md) | **Contexto principal para Cursor** | ✅ Ativo |
| [deploy/discloud.md](./deploy/discloud.md) | **Deploy Discloud — guia completo** | ✅ Pronto |
| [planos/02-navegacao-terminal-discord-som.md](./planos/02-navegacao-terminal-discord-som.md) | Nav imersiva, som, CMD | ✅ Concluído |
| [planos/01-redesign-terminal-discloud.md](./planos/01-redesign-terminal-discloud.md) | Base terminal + Discloud | ✅ Base feita |
| [decisoes/02-cmd-navegacao-imersiva.md](./decisoes/02-cmd-navegacao-imersiva.md) | CMD cinza, sem scroll-spy, som | ✅ Aceito |
| [decisoes/03-sem-webhook-contato.md](./decisoes/03-sem-webhook-contato.md) | Webhook removido | ✅ Aceito |
| [decisoes/01-preferencias-kiover.md](./decisoes/01-preferencias-kiover.md) | Platinum Discloud, Reuel | ✅ Aceito |
| [dados/catalogo-projetos.md](./dados/catalogo-projetos.md) | Projetos do Kiover | ✅ Atualizado |

---

## Pastas

| Pasta | Uso |
|-------|-----|
| `docs/planos/` | Planos de features — **ler antes de implementar** |
| `docs/decisoes/` | ADRs — decisões que não devem ser revertidas |
| `docs/changelog/` | O que foi feito por sessão (`YYYY-MM-DD.md`) |
| `docs/dados/` | Catálogos e referências de conteúdo |
| `docs/deploy/` | Guias de hospedagem (Discloud) |
| `emplementar/` | Rascunhos locais do Kiover (**gitignored**) |

---

## Deploy rápido (Discloud)

```bash
# 1. Testar local
npm run build && npm start   # → http://localhost:8080

# 2. Windows — gerar zip
preparar-discloud.bat        # → portfolio-discloud.zip

# 3. Upload no painel Discloud
# URL: https://kiover.discloud.app
```

Guia completo: **[docs/deploy/discloud.md](./deploy/discloud.md)**

---

## Plano 02 — concluído ✅

| Fase | O quê | Status |
|------|-------|--------|
| 1 | Visual CMD/PowerShell | ✅ |
| 2 | Navegação terminal (console imersivo) | ✅ |
| 3 | Som de teclado + toggle mute | ✅ |
| 4 | Contact só links | ✅ |
| 5 | server.js + discloud.config | ✅ |

Detalhes: [planos/02-navegacao-terminal-discord-som.md](./planos/02-navegacao-terminal-discord-som.md)
