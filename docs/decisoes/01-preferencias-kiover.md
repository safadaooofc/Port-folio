# ADR 01 — Preferências do Kiover

**Data:** 2026-05-30  
**Status:** Aceito

## Contexto

Fechar decisões em aberto do plano 01 antes da implementação.

## Decisões

| Tópico | Decisão |
|--------|---------|
| Hospedagem | Discloud com plano **Platinum** (confirmado) |
| Visual | Máximo parecido com **terminal/CMD real** — preto + verde, fonte mono |
| Boot screen | `npm run kiover-portfolio` (conforme plano) |
| Papel Reuel | Sub-dono + Chefe de Desenvolvimento nos mapas **EB Reuel** e **Capital do MT RP** |
| Conteúdo projetos | Consolidado em `docs/dados/catalogo-projetos.md` e `src/data/projects.ts` |

## Subdomínio portfólio

O site Reuel já usa `reueleberp.discloud.app`. O portfólio pessoal precisa de **ID próprio** no `discloud.config` (ex: `kiover` → `kiover.discloud.app`).

## Pendente do Kiover

- [ ] Confirmar subdomínio do portfólio na Discloud
- [ ] Enviar fotos para `public/gallery/`
- [ ] Links Roblox diretos dos mapas EB e Capital MT (se quiser botão "Jogar")
