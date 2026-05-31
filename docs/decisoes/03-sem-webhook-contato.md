# ADR 03 — Remover webhook Discord do contato

**Data:** 2026-05-30  
**Status:** Aceito

## Contexto

O plano 02 previa formulário com `POST /api/contact` → Discord webhook + rate limit.

## Decisão

**Não implementar** sistema de webhook nem backend de contato.

## Alternativa

Seção contato com links diretos:
- `mailto:` para email
- Link Discord
- Link GitHub

Formulário com envio real fica fora do escopo (possível futuro: Formspree, EmailJS — não planejado agora).

## Consequências

- Sem `DISCORD_CONTACT_WEBHOOK_URL`
- Sem `.env` obrigatório para contato
- Sem `express-rate-limit` por contato
- `server.js` serve apenas arquivos estáticos na Discloud
- Plano 02 atualizado — Fase 4 webhook removida
