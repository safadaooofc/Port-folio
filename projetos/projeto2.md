# Reuel — Site institucional

Site oficial da **Reuel**, empresa central que reúne duas filiais no Roblox e no Discord:

| Filial | Nome | Foco |
|--------|------|------|
| **RP** | Capital do MT BR | Roleplay — reinauguração do mapa, whitelist, regras da cidade |
| **EB** | Exército Brasileiro | Recrutamento, patente, regulamento militar |

Há ainda o **Servidor Suporte** (central), onde ficam suporte ao site, logs e comandos de administração.

**Produção:** [https://reueleberp.discloud.app](https://reueleberp.discloud.app)

---

## Funcionalidades

### Site público

- Página inicial com filiais, Discord, equipe, galeria e CTAs
- Regras completas: `/regras/rp` e `/regras/eb`
- Contadores de jogadores online via widget Discord (proxy anti-CORS)
- Link Roblox da filial EB (fixo em código)
- **Anúncios** configuráveis (posição, cor, ordem) via painel admin
- Login com **Discord OAuth2** (identify + auto-join nos servidores, se configurado)

### Painel administrativo (`/admin`)

Acesso para usuários com permissão (Discord Admin, `/add-admin`, ou `DISCORD_ADMIN_USER_IDS`).

| Área | O que edita |
|------|-------------|
| Anúncios | Banners na home (cor, posição, filial) |
| Regras RP / EB | Categorias e seções de texto |
| Equipe | Cargos e membros por filial |
| Admins | Lista de quem recebeu `/add-admin` |

Alterações são salvas em `data/cms.json` no servidor e publicadas via API.

### Integração Discord

- **OAuth:** login no site
- **Auto-join:** ao logar, o bot pode adicionar o usuário aos servidores RP e EB (`guilds.join`)
- **Slash commands** (servidor de suporte): `/add-admin`, `/remove-admin`, `/list-admins`, `/setup-logs`
- **Logs automáticos** em canais criados uma vez (IDs em `data/discord-channels.json`)

> O bot **não precisa aparecer “online”** no Discord. Comandos e logs funcionam por HTTPS (`/discord/interactions`), não por conexão Gateway 24h.

---

## Stack técnica

| Camada | Tecnologia |
|--------|------------|
| Front-end | React 19, TypeScript, Vite 6, Tailwind CSS 4, React Router 7 |
| Back-end | Node.js 20+, Express 4 |
| Sessão | cookie-session |
| Deploy | [Discloud](https://discloud.com) (`TYPE=site`) |
| Bot / API Discord | REST + Interactions Endpoint |

---

## Arquitetura

```
┌─────────────────────────────────────────────────────────────┐
│  Navegador (React SPA em dist/)                              │
│  • Rotas: /, /regras/rp, /regras/eb, /admin                   │
│  • GET /api/content → regras, equipe, anúncios                │
└───────────────────────────┬─────────────────────────────────┘
                            │ dev: proxy Vite → :8080
                            │ prod: mesmo host Express
┌───────────────────────────▼─────────────────────────────────┐
│  Express (server/index.js) — porta PORT (8080)               │
│  • /auth/*           OAuth Discord                             │
│  • /api/*            CMS público + admin                       │
│  • /discord/interactions   Slash commands                      │
│  • /api/discord/guilds/...  Proxy widget                      │
│  • arquivos estáticos dist/ + fallback SPA                     │
└───────────────────────────┬─────────────────────────────────┘
                            │
         ┌──────────────────┼──────────────────┐
         ▼                  ▼                  ▼
   data/cms.json    data/admins.json   data/discord-channels.json
   (conteúdo site)  (/add-admin)       (IDs canais de log)
```

**Desenvolvimento local:** `npm run dev` sobe **dois processos** — Vite (`5173`) + API (`8080`). O proxy do Vite encaminha `/auth` e `/api` para a API.

---

## Estrutura de pastas

```
Site_regras_wl/
├── src/                    # Front-end React
│   ├── components/         # UI (Hero, seções, regras, admin)
│   ├── config/community.ts # Marca, Discord, Roblox EB
│   ├── content/            # .txt sincronizados no build
│   ├── contexts/           # Auth (login, adminRole)
│   ├── hooks/              # useSiteContent, useOnlinePlayers
│   ├── pages/              # Home, regras, AdminPage
│   ├── types/              # CMS, admin
│   └── utils/              # Parsers de .txt → seções
├── server/                 # Back-end Express
│   ├── index.js            # Entrada, auth, static, listen
│   ├── cms-store.mjs       # Persistência CMS
│   ├── discord-*.mjs       # Bot, logs, admin, auto-join
│   └── routes/api.mjs      # Rotas REST
├── scripts/                # sync-content, dev, diagnose
├── public/                 # Assets estáticos, galeria fans/
├── data/                   # Dados editáveis (não commitar cms.json)
├── docs/                   # Documentação detalhada
├── discloud.config         # Deploy Discloud
├── .env.example            # Modelo de variáveis (dev)
└── discloud.env.example    # Lista para painel Discloud
```

### Conteúdo em texto (`.txt`)

Na raiz do projeto (ou em `src/content/`):

| Arquivo raiz | Destino após `sync-content` |
|--------------|-----------------------------|
| `equipe.txt` | `src/content/equipe.txt` |
| `regrasEB.txt` | `src/content/regrasEB.txt` |
| `742126485-Regras-Basicas-de-Recrutamento.txt` | `regras-basicas-recrutamento.txt` |
| `894189934-Manual-Do-Cabo-v4.txt` | `manual-cabo.txt` |
| `regrasrp.txt` | *(manual em `src/content/regrasrp.txt`)* |

O comando `npm run build` roda o sync antes do Vite. No painel admin você pode **Importar .txt** para recarregar o CMS a partir desses arquivos.

---

## Pré-requisitos

- **Node.js** 20 ou superior
- Conta no [Discord Developer Portal](https://discord.com/developers/applications) (OAuth + Bot)
- Para produção: conta na [Discloud](https://discloud.com)

---

## Instalação e uso local

### 1. Clonar e instalar

```bash
git clone <url-do-repositorio>
cd Site_regras_wl
npm install
```

### 2. Variáveis de ambiente

```bash
copy .env.example .env
```

Edite o `.env` com seus IDs e secrets. O Vite **só lê `.env`**, não `.env.example`.

### 3. Subir em desenvolvimento

```bash
npm run dev
```

Ou no Windows: `iniciar-site.bat`

- Site: [http://localhost:5173](http://localhost:5173)
- API OAuth: [http://localhost:8080](http://localhost:8080) (proxy automático)

### 4. Build de produção (teste local)

```bash
npm run build
npm start
```

Abre [http://localhost:8080](http://localhost:8080) (tudo em um processo só).

---

## Scripts npm

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Vite + API (desenvolvimento) |
| `npm run build` | Sync conteúdo + build React → `dist/` |
| `npm start` | Servidor Express (produção) |
| `npm run discord:diagnose` | Testa token, registra comandos, canais de log |
| `npm run discord:register` | Registra slash commands no servidor suporte |

---

## Variáveis de ambiente

### Front-end (`VITE_*` — embutidas no build)

| Variável | Uso |
|----------|-----|
| `VITE_DISCORD_INVITE` | Convite filial RP |
| `VITE_DISCORD_SERVER_ID` | ID servidor RP (widget) |
| `VITE_EB_DISCORD_INVITE` | Convite filial EB |
| `VITE_EB_DISCORD_SERVER_ID` | ID servidor EB |
| `VITE_SUPPORT_DISCORD_INVITE` | Convite servidor suporte |

### Servidor (secrets — **nunca** prefixo `VITE_`)

| Variável | Uso |
|----------|-----|
| `DISCORD_CLIENT_ID` | App Discord |
| `DISCORD_CLIENT_SECRET` | OAuth |
| `SESSION_SECRET` | Sessão do site |
| `BASE_URL` | URL pública (`http://localhost:5173` em dev) |
| `DISCORD_BOT_TOKEN` | Token da aba **Bot** |
| `DISCORD_PUBLIC_KEY` | Aba **General** → Public Key (slash commands) |
| `DISCORD_SUPPORT_GUILD_ID` | ID do servidor suporte central |
| `DISCORD_ADMIN_USER_IDS` | IDs com admin forçado (opcional) |
| `DISCORD_LOG_WEBHOOK_URL` | Backup de logs (opcional) |
| `NODE_ENV` | `production` na Discloud |

Lista completa para Discloud: **`discloud.env.example`**

---

## Deploy na Discloud

1. Configure variáveis no **painel** da Discloud (não envie `.env` no ZIP).
2. Faça upload do projeto (sem `node_modules`).
3. O `discloud.config` executa `npm install && npm run build` e depois `npm start`.

**URLs importantes:**

| Uso | URL |
|-----|-----|
| Site | `https://reueleberp.discloud.app` |
| OAuth callback | `https://reueleberp.discloud.app/auth/callback` |
| Interactions (bot) | `https://reueleberp.discloud.app/discord/interactions` |
| Health check bot | `https://reueleberp.discloud.app/api/health/discord` |

Documentação detalhada:

- [docs/DISCLOUD-DEPLOY.md](docs/DISCLOUD-DEPLOY.md) — deploy passo a passo
- [docs/CHECKLIST-DISCLOUD.md](docs/CHECKLIST-DISCLOUD.md) — checklist antes de publicar

---

## Discord — guias rápidos

| Tópico | Documento |
|--------|-----------|
| Login + auto-join nos servidores | [docs/DISCORD-AUTO-JOIN.md](docs/DISCORD-AUTO-JOIN.md) |
| Servidor suporte, logs, `/add-admin` | [docs/DISCORD-SUPORTE-LOGS.md](docs/DISCORD-SUPORTE-LOGS.md) |
| Painel admin do site | [docs/ADMIN-PANEL.md](docs/ADMIN-PANEL.md) |

### Comandos slash (servidor de suporte)

| Comando | Função |
|---------|--------|
| `/setup-logs` | Cria categoria e canais de log (sem duplicar) |
| `/add-admin` | Registra admin do site (categorias: super, support, rp, eb) |
| `/remove-admin` | Remove da lista |
| `/list-admins` | Lista registrados |

### Canais de log (após `/setup-logs`)

| Canal | Conteúdo |
|-------|----------|
| 🔐-auth | Login, logout |
| 👑-admin | Permissões, `/add-admin` |
| 📝-cms | Alterações no painel |
| ⚠️-erros | Falhas do servidor |
| 📢-geral | Eventos gerais |

---

## Rotas do site

| Rota | Página |
|------|--------|
| `/` | Início |
| `/regras/rp` | Regulamento RP |
| `/regras/eb` | Documentação EB |
| `/admin` | Painel administrativo (protegido) |

---

## API REST (resumo)

| Método | Rota | Auth | Descrição |
|--------|------|------|-----------|
| GET | `/api/content` | — | Conteúdo público (CMS) |
| GET | `/auth/me` | Cookie | Usuário logado + admin |
| GET | `/api/admin/cms` | Admin | CMS completo |
| PUT | `/api/admin/cms` | Admin | Salvar CMS |
| POST | `/api/admin/cms/import` | Admin | Importar de `.txt` |
| POST | `/api/admin/test-log` | Admin | Testar envio de log |
| POST | `/discord/interactions` | Assinatura Discord | Slash commands |

---

## Persistência (`data/`)

| Arquivo | Conteúdo |
|---------|----------|
| `data/cms.json` | Regras, anúncios, equipe editados no painel |
| `data/admins.json` | Usuários de `/add-admin` |
| `data/discord-channels.json` | IDs dos canais de log |

Esses arquivos estão no `.gitignore`. Em redeploy na Discloud podem ser recriados — faça backup ou rode `/setup-logs` e configure de novo.

---

## Segurança

- Não commite `.env` nem `data/*.json` com dados reais.
- `DISCORD_CLIENT_SECRET` e `DISCORD_BOT_TOKEN` só no servidor / painel Discloud.
- Rotacione tokens se expuser acidentalmente no GitHub.

---

## Solução de problemas

| Problema | O que verificar |
|----------|-----------------|
| Discord widget sem contador | Widget ativado no servidor; IDs corretos no `.env` |
| Login OAuth falha | `BASE_URL` + redirect URI no Developer Portal |
| `/add-admin` não responde | Interactions URL; app online; `DISCORD_PUBLIC_KEY` |
| Bot “offline” | Normal — use `/setup-logs` mesmo assim |
| Logs não chegam | Bot no suporte; permissão enviar mensagens; `npm run discord:diagnose` |
| Painel “acesso negado” | `DISCORD_ADMIN_USER_IDS` ou `/add-admin` ou Admin no Discord |
| Anúncio em posição errada | Painel → Anúncios → campo **Posição** → Salvar |

---

## Licença e créditos

Projeto privado da comunidade **Reuel**. Conteúdo de regras fornecido pelas filiais (arquivos `.txt` na raiz do repositório).

---

## Documentação adicional

Toda documentação técnica está em **`docs/`**:

- [DISCLOUD-DEPLOY.md](docs/DISCLOUD-DEPLOY.md)
- [CHECKLIST-DISCLOUD.md](docs/CHECKLIST-DISCLOUD.md)
- [ADMIN-PANEL.md](docs/ADMIN-PANEL.md)
- [DISCORD-AUTO-JOIN.md](docs/DISCORD-AUTO-JOIN.md)
- [DISCORD-SUPORTE-LOGS.md](docs/DISCORD-SUPORTE-LOGS.md)
