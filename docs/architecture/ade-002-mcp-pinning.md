# ADE-002 — Pinning de versões: MCP C# SDK (F5), integração LLM (F5) e tag n8n (F4)

> **Tipo:** Architecture Decision Entry (technology selection + version pinning)
> **Status:** ✅ Accepted
> **Date:** 2026-06-06
> **Author:** Aria (Architect)
> **Scope:** EPIC-002 F5 (`phase-05-ai-mcp` — `src/Fifa2026.V2.McpServer/` + chatbot React + LLM) e F4 (`phase-04-orchestration` — n8n self-hosted em Container Apps)
> **Supersedes:** Resolve a "DECISAO PENDENTE @architect — pinning de versão do MCP SDK" das stories 2.4 e 2.5 (slot ADE-002 reservado em ADE-005 linha 188)
> **Related:** ADE-000 (microsserviço paralelo), ADE-003 (baseline PaaS + Container Apps), ADE-004 (gateway YARP — todo tráfego ao MCP passa pelo gateway), ADE-005 (identidade `oid` propagada como `X-Entra-OID` ao MCP Server)

---

## Context

Esta ADE fecha a única decisão arquitetural que as stories 2.4 e 2.5 (Ready) deixaram explicitamente pendente para o @architect: **a fixação (pinning) de versões de componentes recentes/voláteis** que a squad usará na implementação de F4 e F5. As stories foram modeladas corretamente como gate sequencial (2.5 Task 2 BLOQUEANTE → Task 3); esta ADE remove o bloqueio.

Três artefatos exigem decisão de versão **real e verificável** (Art. IV — No Invention), porque `latest`/floating em tecnologia recente é fonte direta de quebra ao vivo num workshop:

1. **MCP C# SDK** (`src/Fifa2026.V2.McpServer/`, Story 2.5 AC-2/AC-6, Task 3): o protocolo MCP é recente e o SDK .NET evoluiu rápido de preview (`0.x`) para GA. Precisamos do pacote oficial e da versão estável exata.
2. **Integração LLM (Gemini 2.0 Flash + Groq + Mistral)** (Story 2.5 AC-8/AC-10, Task 5): definir **onde** a integração LLM vive (frontend React vs McpServer .NET) e qual mecanismo/endpoint cada provider usa — para não inventar parâmetros de API.
3. **Tag do container n8n** (`n8nio/n8n`, Story 2.4 AC-3/Task 4.2): o blueprint proíbe `latest`; precisamos de uma tag estável pinada e existente no Docker Hub.

A decisão abaixo foi tomada com pesquisa nas fontes oficiais (NuGet, GitHub releases do csharp-sdk, ai.google.dev, Docker Hub / GitHub releases do n8n) em 2026-06-06. Todas as versões citadas têm fonte/URL.

---

## Decision

Adotamos **pinning exato (sem `latest`, sem floating)** com 5 invariantes.

### Invariante 1: MCP Server usa o SDK C# oficial `ModelContextProtocol`, pinado em **1.4.0**

O `src/Fifa2026.V2.McpServer/` referencia os pacotes oficiais do SDK C# do Model Context Protocol (repo `modelcontextprotocol/csharp-sdk`, mantido em colaboração com a Microsoft), pinados em **versão exata 1.4.0** — a última estável (GA) publicada, de 2026-06-04. Os três pacotes do SDK estão alinhados na mesma versão 1.4.0 e todos têm como target **.NET 8.0** (compatível .NET 8/9/10), batendo com o padrão `.NET 8 isolated` já usado em `src/Fifa2026.V2.Functions/`.

| Pacote NuGet | Versão pinada | Papel | Fonte |
|---|---|---|---|
| `ModelContextProtocol` | `1.4.0` | Pacote principal (hosting + DI extensions) | https://www.nuget.org/packages/ModelContextProtocol/1.4.0 |
| `ModelContextProtocol.AspNetCore` | `1.4.0` | **Server HTTP** — expõe o endpoint MCP via `MapMcp()` (Streamable HTTP). Depende de `ModelContextProtocol (>= 1.4.0)` | https://www.nuget.org/packages/ModelContextProtocol.AspNetCore/1.4.0 |
| `ModelContextProtocol.Core` | `1.4.0` | Núcleo client/server low-level (dependência transitiva; pinar se referenciado direto) | https://www.nuget.org/packages/ModelContextProtocol.Core/1.4.0 |

**Histórico de maturidade (justifica a confiança no pin):** o SDK saiu de preview com `v1.0` em 2026-02-25 e seguiu em GA (1.x) até `1.4.0` (2026-06-04). Não é mais preview — é uma linha estável `1.x` com cadência de patches. Fonte: https://github.com/modelcontextprotocol/csharp-sdk/releases e https://csharp.sdk.modelcontextprotocol.io/.

**Como referenciar (contrato para o @dev — `.csproj` do McpServer):**

```xml
<ItemGroup>
  <PackageReference Include="ModelContextProtocol.AspNetCore" Version="1.4.0" />
  <!-- ModelContextProtocol e ModelContextProtocol.Core entram transitivamente como 1.4.0;
       referenciar explicitamente (também em 1.4.0) só se usar APIs diretas. -->
</ItemGroup>
```

> **Regra de pin (NON-NEGOTIABLE para esta fase):** `Version="1.4.0"` é **exato**. Proibido `Version="1.*"`, `1.4.*`, `[1.4.0,)` ou ausência de versão. Justificativa: SDK recente em cadência rápida — um minor inesperado pode mudar a assinatura de `tools/list`/`tools/call` ou de `MapMcp()` no meio do workshop. O upgrade é decisão consciente (ver Invariante 5), não automática.

### Invariante 2: O endpoint MCP é HTTP (Streamable HTTP via `ModelContextProtocol.AspNetCore`) — coerente com hosting do epic e com o gateway YARP

A Story 2.5 (AC-2) pede um endpoint **`POST /mcp` JSON-RPC 2.0** acessível **via o gateway YARP** (AC-8/AC-9, não direto do browser). Isso casa com o transport **Streamable HTTP** do `ModelContextProtocol.AspNetCore`, exposto por `MapMcp()` (registra o endpoint na raiz configurada; em modo stateful também mapeia GET/DELETE para streaming/cleanup). As 3 tools (`consultar_disponibilidade`, `verificar_ingresso`, `consultar_bracket`) são declaradas com `[McpServerTool]` + JSON Schema de input, e o dispatch `tools/list`/`tools/call` é provido pelo SDK — o @dev **não implementa o framing JSON-RPC à mão** (reduz superfície de invenção, AC-15).

Hosting: ASP.NET Core (host do `ModelContextProtocol.AspNetCore`) em **Azure Container Apps** ou Function .NET isolated com integração ASP.NET Core — mesma decisão de host já discutida em ADE-004 Inv 2 para o gateway. Como o McpServer é um servidor HTTP de longa duração que serve streaming, **Container App é o host recomendado** (mesma justificativa do YARP); Function isolated permanece alternativa aceitável se a turma priorizar uniformidade em Functions. A escolha final de host do McpServer é ponto de design da Story 2.5 Task 3 — **não bloqueia** este pinning.

Acesso de dados segue o padrão do projeto: Dapper + repositórios análogos a `src/Fifa2026.V2.Functions/Data/` (Story 2.5 Dev Notes). O McpServer lê `X-Entra-OID` do header propagado pelo gateway (ADE-005 Inv 4) para logging/personalização — **nunca revalida o JWT** (o gateway é o guardião).

### Invariante 3: A integração LLM vive no **frontend React** (não no McpServer .NET); cada provider tem endpoint oficial pinado por URL/modelo, não por SDK .NET

Ponto de arquitetura que evita confusão de escopo: o **chatbot e a orquestração LLM↔tools são do frontend React** (`Lovable/World Cup Tickets Hub/src/`, Story 2.5 AC-7/Task 4/Task 5). O `src/Fifa2026.V2.McpServer/` **não** chama o LLM — ele apenas expõe as tools MCP. O LLM (no browser) recebe a lista de tools, decide chamar uma tool, e a chamada é roteada **via gateway YARP** ao `/mcp` (AC-8). Logo, **não há "Gemini SDK .NET" a pinar no McpServer**.

A portabilidade entre providers (AC-10) é feita por `LLM_PROVIDER=gemini|groq|mistral`. Cada provider é "pinado" pela combinação **endpoint oficial + nome de modelo** (não há lock de versão de SDK no browser; o que precisa ser real e verificável é o endpoint/modelo, Art. IV):

| Provider | Base URL oficial | Endpoint/modelo de referência | Fonte oficial |
|---|---|---|---|
| `gemini` (default) | `https://generativelanguage.googleapis.com/v1beta` | `models/gemini-2.0-flash:generateContent`; function calling via `tools` + `tool_config.function_calling_config.mode` | https://ai.google.dev/api/generate-content · https://ai.google.dev/gemini-api/docs |
| `groq` | `https://api.groq.com/openai/v1` | `chat/completions` (OpenAI-compatible; `tools`/`tool_calls`) | https://console.groq.com/docs |
| `mistral` | `https://api.mistral.ai/v1` | `chat/completions` (`tools`/`tool_calls`) | https://docs.mistral.ai/ |

> **Anti-hallucination (AC-15):** o @dev confirma os parâmetros exatos de cada API contra a doc oficial **no momento da implementação** (Task 9). A API version do Gemini é **`v1beta`** (a versão que expõe function calling para os modelos 2.x), confirmada na doc oficial — ver https://ai.google.dev/gemini-api/docs/api-versions. Não inventar campos.
>
> **Nota sobre SDK .NET do Gemini (caso a turma queira chamar o LLM do backend no futuro):** existe a biblioteca `Google.GenAI` para .NET, porém em estágio inicial/preview e **fora do caminho recomendado** desta fase (a integração é no front). Se algum aluno optar por orquestrar o LLM no backend, o caminho de menor invenção é **HTTP REST direto** ao endpoint oficial acima (sem SDK), pinando apenas o `gemini-2.0-flash` por nome. Registrado como nota, não como decisão de pin.

### Invariante 4: O container n8n é pinado na tag estável **`2.23.4`** — nunca `latest` nem `stable`

A Story 2.4 (AC-3, Task 4.2) sobe `n8nio/n8n` e proíbe `latest`. Decisão: pinar a **tag de versão exata `n8nio/n8n:2.23.4`**, que é a release GA estável corrente (2026-06-05) da linha 2.x — para a qual a tag flutuante `stable` aponta no momento.

```text
Image: n8nio/n8n:2.23.4      ← pin exato (recomendado)
NÃO usar: n8nio/n8n:latest   ← proibido pelo blueprint (instável ao longo do workshop)
NÃO usar: n8nio/n8n:stable   ← flutuante; hoje = 2.23.4, mas pode mover entre aulas
```

**Por que `2.23.4` (linha 2.x) e não a linha 1.x:** a 2.x é a linha **ativamente mantida e GA** (a doc de release foca na 2.x; a 1.x — atualmente `1.123.x` — é linha legada em manutenção). Houve um **n8n 2.0 com breaking changes** (https://docs.n8n.io/2-0-breaking-changes/), por isso o pin exato é ainda mais importante: garante que todos os alunos rodem o mesmo comportamento de UI/nodes durante a aula. Evitar tags beta `2.25.x` (pré-release).

**Fontes:** https://github.com/n8n-io/n8n/releases (2.23.4 em 2026-06-05) · https://hub.docker.com/r/n8nio/n8n/tags · https://docs.n8n.io/release-notes/.

> **Validação obrigatória no momento da implementação (Story 2.4 Task 10.2):** confirmar que `n8nio/n8n:2.23.4` existe no Docker Hub no dia do provisionamento. Caso a 2.23.4 tenha sido superada por patch da mesma minor (ex.: 2.23.5) sem breaking change, é aceitável pinar o patch mais recente **da mesma minor 2.23.x**; **não** saltar de minor/major sem nova avaliação. As env vars permanecem as de AC-3 (rastreadas a https://docs.n8n.io/hosting/environment-variables/).

### Invariante 5: Pinning é decisão consciente — upgrade só por nova ADE/nota, nunca automático

Para todos os componentes acima:

- **Proibido floating** (`latest`, `stable`, ranges abertos, wildcards) em qualquer artefato versionado do epic (`.csproj`, definição do Container App, workflows CI/CD).
- **Upgrade do MCP SDK** (ex.: 1.4.0 → 1.5.0 ou eventual 2.0) só após avaliar changelog e validar `tools/list`/`tools/call`/`MapMcp()` — registrar em nota de upgrade nos Dev Notes da story (ou nova ADE se houver breaking change estrutural). O SDK está em cadência rápida; assumir que minors podem trazer mudança relevante.
- **Upgrade do n8n** entre minors/majors (ex.: 2.23 → 2.24, ou futura 3.0) só com revalidação do workflow `post-purchase-notification` (4 nodes) — n8n já demonstrou breaking change em major (2.0).
- **Plano de upgrade padrão:** congelar versões durante todo o EPIC-002; reavaliar somente no encerramento do epic ou se um CVE crítico forçar.

---

## Rationale

### Por que SDK oficial `ModelContextProtocol` 1.4.0 (vs alternativas)?

- **Oficial + mantido pela Microsoft:** é o SDK canônico do MCP em .NET (repo `modelcontextprotocol/csharp-sdk`). Implementar JSON-RPC 2.0 à mão multiplicaria a superfície de invenção (AC-15) e o risco de divergir da spec `modelcontextprotocol.io`. O SDK entrega `tools/list`/`tools/call` e o transport Streamable HTTP prontos.
- **Saiu de preview (GA desde 2026-02-25):** 1.4.0 é estável, não `0.x`. O risco de "SDK recente" é mitigado por (a) GA, (b) pin exato, (c) plano de upgrade consciente.
- **.NET 8.0 target:** bate exatamente com `src/Fifa2026.V2.Functions/` (.NET 8 isolated) — zero atrito de runtime, reforça o fio condutor "microsserviço .NET".
- **Linha alinhada em 1.4.0:** os três pacotes (`*`, `.AspNetCore`, `.Core`) publicados juntos em 1.4.0 (2026-06-04) — sem mismatch de dependência.

### Por que integração LLM no front (vs no McpServer .NET)?

- **Fidelidade ao desenho da story:** chatbot é React (AC-7); o McpServer só expõe tools (AC-2). MCP **desacopla** o LLM dos dados — o LLM é cliente das tools, não parte do servidor MCP. Colocar o LLM no front mantém esse desacoplamento (e é o que permite a demo de portabilidade Gemini→Groq→Mistral trocando só uma env var).
- **Menos invenção:** sem SDK .NET de LLM imaturo no caminho crítico; o front fala REST direto com endpoints oficiais documentados.
- **Tudo passa pelo gateway:** as tool calls vão do front → gateway YARP (Bearer Entra) → `/mcp` (ADE-004/ADE-005), preservando o gateway como ponto único de auth — coerência pedagógica.

### Por que tag exata n8n `2.23.4` (vs `latest`/`stable`/1.x)?

- **Reprodutibilidade da aula:** todos os alunos no mesmo comportamento de UI/nodes. `latest`/`stable` flutuam entre aulas e podem trazer breaking change (n8n já teve 2.0 breaking).
- **Linha GA mantida:** 2.x é a linha ativa; 1.123.x é legado. Não há razão didática para iniciar um workshop novo já na linha legada.
- **Patch recente sem beta:** 2.23.4 é GA (não 2.25.x beta), com o fix mais recente da minor.

---

## Consequences

### Positivas

- ✅ Resolve a decisão pendente que bloqueava a Story 2.5 Task 3 (e a dependência de tag da Story 2.4) — squad destravada.
- ✅ Versões reais, verificáveis e congeladas: zero surpresa de `latest` ao vivo.
- ✅ SDK oficial reduz superfície de invenção do JSON-RPC (apoia AC-15 de 2.5).
- ✅ Alinhamento total com .NET 8 do projeto e com o gateway YARP/identidade (ADE-004/ADE-005).
- ✅ Demo de portabilidade entre LLMs preservada (integração no front, agnóstica de provider).

### Negativas / Trade-offs aceitos

- ⚠️ **Versões congeladas envelhecem:** patches de segurança não entram automaticamente. Mitigado: Invariante 5 prevê reavaliação no fim do epic / em CVE crítico; horizonte do workshop é curto.
- ⚠️ **SDK MCP em cadência rápida:** um 1.5.x pode trazer melhorias que ficaremos sem. Mitigado: o objetivo é didático e estável durante o evento; upgrade é decisão consciente, não perda.
- ⚠️ **Pin de patch do n8n pode ficar 1 patch atrás no dia da aula:** Mitigado: Invariante 4 autoriza patch mais recente da **mesma minor 2.23.x** sem nova ADE.
- ⚠️ **`ModelContextProtocol.Core` pode ser referenciado só transitivamente:** se o @dev usar APIs low-level diretas, deve pinar explicitamente 1.4.0 também (registrado na Invariante 1).

---

## Alternatives Considered (rejeitadas)

### Alt 1: Usar `latest` / `stable` (floating) para SDK e/ou n8n
- **Rejected porque:** floating em tecnologia recente quebra reprodutibilidade ao vivo; n8n já teve major breaking (2.0); o SDK MCP muda assinaturas entre minors. O blueprint proíbe explicitamente `latest` para n8n (Story 2.4 AC-3).

### Alt 2: Implementar o JSON-RPC 2.0 do MCP à mão (sem SDK)
- **Rejected porque:** multiplica a superfície de invenção (AC-15) e o risco de divergir da spec; o SDK oficial já entrega `tools/list`/`tools/call`/transport. Manter à mão só faria sentido se não existisse SDK GA — existe (1.4.0).

### Alt 3: Pinar a linha legada n8n 1.123.x
- **Rejected porque:** é linha legada/manutenção; iniciar um workshop novo na linha antiga não tem ganho didático e perde melhorias de UI/nodes da 2.x. 2.x é a linha GA ativa.

### Alt 4: Orquestrar o LLM no backend (.NET) com SDK Gemini .NET
- **Rejected como caminho desta fase (mantido como nota):** o `Google.GenAI` .NET está em estágio inicial/preview; e o desenho da story coloca o chatbot no front (desacoplamento MCP). Se houver necessidade backend futura, usar HTTP REST direto ao endpoint oficial — não um SDK imaturo no caminho crítico.

---

## Validation

Esta decisão é considerada **validada** quando:

- [ ] `src/Fifa2026.V2.McpServer/*.csproj` referencia `ModelContextProtocol.AspNetCore` em **`Version="1.4.0"`** exata (e quaisquer pacotes MCP diretos também em 1.4.0); nenhum range/wildcard/`latest`.
- [ ] `dotnet restore` resolve a linha MCP 1.4.0 sem conflito; projeto compila em .NET 8.
- [ ] Endpoint `/mcp` responde `tools/list` com as 3 tools (schemas válidos) e `tools/call` despacha os 3 handlers — métodos rastreáveis à spec `modelcontextprotocol.io` (AC-15).
- [ ] Frontend integra Gemini `gemini-2.0-flash` via `v1beta`; troca `LLM_PROVIDER` para `groq`/`mistral` sem mudança de código (AC-10).
- [ ] Container n8n provisionado como `n8nio/n8n:2.23.4` (ou patch da mesma minor 2.23.x), confirmado existente no Docker Hub no dia (Story 2.4 Task 10.2); nenhum `latest`/`stable`.
- [ ] Nenhum artefato versionado do epic usa floating em MCP SDK ou n8n.

## Impact on EPIC-002

### Stories afetadas (referência — re-draft de conteúdo é autoridade de @sm; aqui só registro o impacto e atualizo as referências de versão pendentes)

| Story | Impacto | Ação |
|---|---|---|
| **2.5 (F5)** | Decisão pendente **resolvida**. AC-6/Task 2: a ADE-002 agora existe (este arquivo). Task 3 deve referenciar o pin `ModelContextProtocol* 1.4.0`. Marcadores "pinning pendente"/"ADE-002 pendente" removidos. | Referências de versão atualizadas nesta sessão; conteúdo de AC/escopo permanece de @sm. |
| **2.4 (F4)** | Tag n8n **decidida**: `n8nio/n8n:2.23.4`. AC-3/Task 4.2 substituem o placeholder `<tag-pinned>`/`[DECISAO @architect]`. | Referência de tag atualizada nesta sessão. |

> **NÃO altero Status nem AC/escopo das stories** (autoridade de @po/@sm). Esta ADE fecha a decisão técnica e atualiza apenas as referências de versão que estavam marcadas como pendentes para o @architect.

### Nota de naming

O nome do arquivo (`ade-002-mcp-pinning.md`) segue a referência já gravada na Story 2.5 AC-6/Task 2.1. O escopo foi ampliado para cobrir, na mesma ADE, o pin do n8n da F4 (decisão de versão de mesma natureza, pedido na mesma escalação) — evitando uma ADE extra para uma única tag. ADE-001 permanece aposentada (ADE-005); ADE-002 é este slot.

---

**Authority:** Aria (Architect) — designado por @aiox-master para decisões de seleção de tecnologia, versionamento e integração.
**Review cycle:** Imutável durante EPIC-002. Mudanças → nova ADE que a supersede (ou nota de upgrade nos Dev Notes conforme Invariante 5).
