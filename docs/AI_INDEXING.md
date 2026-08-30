# Sistema de Leitura e Indexação por IAs (AI Readiness & LLM Discovery)

Este documento descreve como o portfólio está estruturado para ser lido, indexado e interpretado com máxima precisão por Modelos de Linguagem (LLMs), IAs de busca (ChatGPT Search, Perplexity, Google Gemini, Claude, Copilot) e agentes autônomos.

---

## 1. Padrão `llms.txt` & `llms-full.txt` (llmstxt.org)

O site implementa o padrão aberto **[`llms.txt`](https://llmstxt.org/)**, servido diretamente na raiz pública:

| Arquivo | URL | Finalidade |
| :--- | :--- | :--- |
| **`llms.txt`** | `/llms.txt` | Resumo estruturado do perfil, tecnologias principais, repositórios, links e aviso de projetos gratuitos sob medida. |
| **`llms-full.txt`** | `/llms-full.txt` | Dossiê técnico completo contendo estudos de caso detalhados (BloodStore, Sagaz Site, Luxury Sales, Alma Criativa, LP Community, Reuel), stacks, arquitetura e dados de contato. |

Qualquer IA que consulte o domínio `kiover.discloud.app/llms.txt` recebe imediatamente todo o contexto do desenvolvedor em Markdown puro, sem ruído de HTML ou bundle JS.

---

## 2. Metadados Estruturados JSON-LD (Schema.org)

No cabeçalho do [`index.html`](../index.html), foi configurado um grafo semântico no padrão Schema.org:

- **`@type: "Person"`**:
  - `name`: Kiover
  - `alternateName`: safadaoooofc
  - `jobTitle`: Full-Stack, Desktop & Mobile Software Engineer
  - `knowsAbout`: Lista de 19 tecnologias e competências (C#, C++, React 19, Next.js 16, TypeScript, PostgreSQL, Prisma, Supabase, Discord Bots, Roblox Luau, etc.)
  - `sameAs`: Links para GitHub e Discord.
- **`@type: "ProfilePage"`**:
  - Descreve a página como o portfólio oficial de Kiover vinculado à entidade de pessoa.

---

## 3. Diretivas para Web Crawlers de IA (`robots.txt`)

O [`public/robots.txt`](../public/robots.txt) permite explicitamente o rastreamento dos principais agentes de IA:

- `GPTBot` e `ChatGPT-User` (OpenAI)
- `ClaudeBot` (Anthropic)
- `PerplexityBot` (Perplexity AI)
- `Google-Extended` (Google Gemini)
- `Applebot-Extended` (Apple Intelligence)
- `CCBot` (Common Crawl)
- `cohere-ai` (Cohere)

---

## 4. Mapa do Site (`sitemap.xml`)

O [`public/sitemap.xml`](../public/sitemap.xml) lista todas as seções e arquivos do portfólio:
- `/` (Home terminal)
- `/#about` (Sobre mim)
- `/#skills` (Habilidades)
- `/#projects` (Projetos)
- `/#contact` (Contato)
- `/llms.txt` e `/llms-full.txt` (Entradas de IA)

---

## 5. Tag de Descoberta Automática

No `<head>` do site, os agentes encontram as tags de autodescoberta:
```html
<link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable Portfolio Profile" />
<link rel="alternate" type="text/plain" href="/llms-full.txt" title="Full LLM Developer Documentation" />
```
