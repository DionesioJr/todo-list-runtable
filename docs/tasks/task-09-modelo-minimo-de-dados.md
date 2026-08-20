# Task 9 — Definir e implementar o modelo mínimo de dados

## Task original

> **Definir e implementar o modelo mínimo de dados**
>
> - Existe uma interface/tipo com os campos `id`, `title`, `description`, `createdAt`, `lastModified`, `version` e `completed`.
> - `createdAt` e `lastModified` seguem o formato ISO 8601.
> - Há um teste unitário que instancia uma tarefa com todos os campos e verifica tipos e formatos.
> - O teste passa ao rodar localmente.

## Avaliação (campos necessários para o desenvolvimento)

| Campo | Presente? | Observação |
|---|---|---|
| Título claro | ✅ | Objetivo entendível |
| Critérios de aceite | ✅ | Bem escritos: objetivos, verificáveis e testáveis — o melhor ponto desta task |
| Contexto/motivação | ⚠️ | Implícito (o projeto não tem código ainda), mas não diz por que o modelo vem antes de UI/persistência |
| Stack/linguagem | ❌ | **Bloqueador.** "interface/tipo" e "teste unitário" pressupõem uma linguagem e um runner de teste que o projeto ainda não tinha definido |
| Tipo de cada campo | ❌ | Só lista os nomes. `version` é número ou string? `id` é UUID, incremental ou slug? `description` é obrigatória? |
| Semântica de `version` | ❌ | Não diz para que serve (histórico? sincronização? controle de concorrência?) nem quando muda |
| Precisão/timezone de ISO 8601 | ❌ | "ISO 8601" admite `2026-08-20`, `2026-08-20T12:00:00Z` e `2026-08-20T12:00:00.000-03:00`. Sem escolher um subconjunto, o teste de formato fica ambíguo |
| Valores iniciais | ❌ | Não diz que toda tarefa nasce pendente e em qual versão |
| Onde o arquivo deve ficar | ❌ | Não indica caminho; o README já define `src/` para código e testes separados |
| Escopo / fora de escopo | ❌ | Não deixa claro se inclui CRUD, persistência e validação em runtime, ou só o tipo |
| Dependências | ❌ | Depende da definição de stack (task pendente no README) |
| Prioridade | ❌ | Não informada |

**Conclusão:** a task é **a mais bem escrita da série até aqui** — tem critérios de aceite objetivos e verificáveis, o que faltava nas tasks anteriores. O que falta é a **definição dos tipos e formatos de cada campo** e, principalmente, a **stack**: não dá para escrever "uma interface" e "um teste unitário" sem escolher linguagem e runner. Os demais campos ausentes foram preenchidos abaixo como decisões explícitas, para que o resultado seja verificável em vez de subjetivo.

## Decisões tomadas nesta task (o que estava faltando)

Estas decisões eram necessárias para entregar a task; ficam registradas aqui para poderem ser revistas.

1. **Linguagem: TypeScript.** Os critérios de aceite pedem "interface/tipo" — vocabulário de linguagem tipada — e o projeto é uma aplicação de lista de tarefas, cenário natural para TypeScript. Escolha registrada também no README.
2. **Runner de teste: Vitest.** Precisava de um runner para o critério "o teste passa ao rodar localmente"; Vitest roda TypeScript sem passo extra de build.
3. **`id: string` (UUID v4).** Identificador estável e gerável offline (`crypto.randomUUID()`), sem depender de um banco que ainda não existe.
4. **`description: string`, sempre presente.** O campo consta da lista obrigatória; quando não informado, vale string vazia — assim `description` nunca é `undefined` e o código não precisa tratar dois estados de "sem descrição".
5. **ISO 8601 = `YYYY-MM-DDTHH:mm:ss.sssZ` (UTC, com milissegundos).** É exatamente a saída de `Date#toISOString()`, o que torna o formato verificável e o round-trip garantido. Fixar UTC evita comparar datas gravadas em fusos diferentes.
6. **`version: number`, inteiro, começando em 1.** Representa a revisão da tarefa e deve ser incrementada a cada alteração; serve para detectar conflito de edição (ex.: duas abas ou dois dispositivos editando a mesma tarefa) e é a base de uma futura sincronização.
7. **`completed: boolean`, iniciando em `false`.** Toda tarefa nasce pendente.
8. **Local dos arquivos:** modelo em `src/models/task.ts` e teste em `tests/models/task.test.ts`, seguindo a regra do README de manter testes fora de `src/`.

## Task melhorada

**Título:** Definir e implementar o modelo mínimo de dados de uma tarefa

**Contexto:** O repositório tem apenas `README.md` e a pasta `src/` vazia. Antes de qualquer tela, API ou persistência, é preciso fixar o formato de uma tarefa: é ele que todas as camadas seguintes vão consumir. Esta task também é a primeira a exigir uma decisão de stack.

**Descrição:** Criar o tipo que representa uma tarefa, com os campos e formatos definidos abaixo, e um teste unitário que comprove tipos e formatos.

**Modelo esperado:**

| Campo | Tipo | Regra |
|---|---|---|
| `id` | `string` | UUID v4, único e imutável |
| `title` | `string` | Obrigatório, não vazio |
| `description` | `string` | Sempre presente; string vazia quando não informada |
| `createdAt` | `string` | ISO 8601 UTC `YYYY-MM-DDTHH:mm:ss.sssZ`; imutável |
| `lastModified` | `string` | Mesmo formato; igual a `createdAt` até a primeira alteração |
| `version` | `number` | Inteiro >= 1; começa em 1 e aumenta 1 a cada alteração |
| `completed` | `boolean` | `false` na criação |

**Critérios de aceite:**
- [x] Existe uma interface `Task` com os sete campos, tipados conforme a tabela acima.
- [x] `createdAt` e `lastModified` usam ISO 8601 UTC com milissegundos, o formato produzido por `Date#toISOString()`.
- [x] Existe uma função que instancia uma tarefa com todos os campos preenchidos (`createTask`).
- [x] Existe teste unitário que instancia uma tarefa com todos os campos e verifica tipo de cada campo, formato das datas e valores iniciais (`version = 1`, `completed = false`).
- [x] `npm test` passa localmente.
- [x] `npm run typecheck` passa sem erros.

**Fora de escopo:**
- CRUD, edição e a operação que incrementa `version` / atualiza `lastModified` (task seguinte).
- Persistência (armazenamento local, banco ou API).
- Campos adicionais como prazo, prioridade, tags ou dono da tarefa.
- Escolha de framework de UI e de forma de persistência — continuam "a definir" no README.

**Dependências:** nenhuma; esta task passa a ser a base das tasks de CRUD e persistência.

**Prioridade:** Alta (bloqueia todo o desenvolvimento seguinte).

## Entregável desta etapa

- `src/models/task.ts` — interface `Task`, tipo `IsoDateTime`, fábrica `createTask()` e as validações de runtime `isTask()` / `isIsoDateTime()`.
- `tests/models/task.test.ts` — 6 testes cobrindo campos, tipos, formato ISO 8601, valores iniciais e rejeição de dados inválidos.
- `package.json`, `tsconfig.json`, `.gitignore` — configuração mínima de TypeScript + Vitest (`npm test`, `npm run typecheck`).
- `README.md` — stack, pré-requisitos, instalação, uso e estrutura atualizados com as decisões acima.

**Resultado da execução local:** `npm test` → 6 testes, 6 passando. `npm run typecheck` → sem erros.

## Campos que ainda faltam para o desenvolvimento

- Framework de UI e plataforma-alvo (web, mobile, CLI, desktop) — seguem indefinidos.
- Forma de persistência — indefinida; o modelo foi escrito para ser serializável em JSON, de modo a não travar essa escolha.
- Licença do projeto — segue indefinida.
