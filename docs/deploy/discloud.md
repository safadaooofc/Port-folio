# Deploy na Discloud — Portfólio Kiover

**Atualizado:** 2026-05-31  
**Status:** Pronto para upload  
**URL prevista:** https://kiover.discloud.app

---

## Resumo

| Item | Valor |
|------|-------|
| Tipo | `TYPE=site` (site estático + Express) |
| Entry | `server.js` |
| Porta | **8080** (padrão Discloud) |
| Subdomínio | `kiover` (`ID` no `discloud.config`) |
| RAM | 512 MB |
| Variáveis de ambiente | **Nenhuma obrigatória** |
| Backend / API | **Não** — só arquivos estáticos |
| Webhook Discord | **Não** (ADR 03) |

---

## Arquivos de deploy

```
Port-folio/
├── discloud.config    ← configuração Discloud (obrigatório na raiz)
├── server.js          ← Express serve dist/ + SPA fallback
├── package.json       ← scripts build + start
├── package-lock.json  ← lockfile (recomendado no zip)
├── index.html
├── vite.config.ts
├── tsconfig.json
├── src/               ← código React
└── public/            ← assets estáticos (gallery/)
```

**Não enviar no zip:** `node_modules/`, `dist/`, `.git/`, `emplementar/`, `portfolio-discloud.zip`

A Discloud roda o `BUILD` no servidor — o `dist/` é gerado lá.

---

## `discloud.config`

```ini
NAME=Kiover Portfolio
TYPE=site
MAIN=server.js
ID=kiover
RAM=512
BUILD=npm install --include=dev && npm run build
START=node server.js
```

> `--include=dev` garante que Vite e Tailwind (devDependencies) sejam instalados antes do build.

---

## Passo a passo — primeiro deploy

### 1. Testar localmente (recomendado)

```bash
npm install
npm run build
npm start
```

Abrir http://localhost:8080 — deve carregar o portfólio completo (nav, som, views).

### 2. Gerar zip para upload (Windows)

Duplo clique em **`preparar-discloud.bat`** na raiz do projeto.

Gera: **`portfolio-discloud.zip`**

### 3. Upload na Discloud

1. Acesse [painel Discloud](https://discloud.com/dashboard) (plano **Platinum**)
2. **Upload** → selecione `portfolio-discloud.zip`
3. Confirme que o subdomínio **`kiover`** está disponível (ou altere `ID` no config)
4. Aguarde o build (`npm install --include=dev && npm run build`)
5. Verifique os logs — deve aparecer: `kiover-portfolio running on http://0.0.0.0:8080`

### 4. Validar produção

- [ ] https://kiover.discloud.app abre sem erro
- [ ] Boot screen na primeira visita (sessionStorage)
- [ ] Navegação por comandos funciona
- [ ] Hash URL (`#projects`, `#contact`) funciona
- [ ] Som liga/desliga com `[ som ]` / `[ mudo ]`
- [ ] Links de contato (mailto, Discord, GitHub) abrem corretamente
- [ ] Imagens em `public/gallery/` carregam

---

## Atualizar o site (redeploy)

1. Faça as alterações no código
2. Teste local: `npm run build && npm start`
3. Rode `preparar-discloud.bat` de novo
4. Upload do novo zip no painel (substitui o app existente)

---

## Troubleshooting

| Problema | Causa provável | Solução |
|----------|----------------|---------|
| Build falha no Vite | devDependencies não instaladas | Confirmar `BUILD=... --include=dev ...` |
| Página em branco | `dist/` vazio ou build falhou | Ver logs de build na Discloud |
| 404 ao recarregar `#projects` | SPA fallback ausente | Verificar `server.js` — rota catch-all para `index.html` |
| Porta errada | App não escuta 8080 | `PORT` vem da Discloud; fallback 8080 no `server.js` |
| Subdomínio indisponível | `ID=kiover` já usado | Trocar `ID` no `discloud.config` e redeploy |
| Som não toca | Política do browser | Primeiro clique/interação ativa áudio |

---

## Diferença do site Reuel

| | Reuel | Portfólio Kiover |
|---|-------|------------------|
| URL | reueleberp.discloud.app | kiover.discloud.app |
| Backend | Express + API + Discord OAuth | **Só estático** |
| Env vars | Várias (Discord, OAuth…) | **Nenhuma** |
| Contato | Integrado ao sistema | Links diretos |

---

## Referências

- [Discloud — Sites e APIs](https://docs.discloud.com/how-to-host/websites-and-apis)
- ADR 03: `docs/decisoes/03-sem-webhook-contato.md`
- Plano 02 Fase 5: `docs/planos/02-navegacao-terminal-discord-som.md`
- Changelog: `docs/changelog/2026-05-31.md`
