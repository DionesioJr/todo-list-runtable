# Todo List

Aplicação de lista de tarefas (to-do list) para criar, organizar e acompanhar tarefas do dia a dia.

![status](https://img.shields.io/badge/status-em%20desenvolvimento-blue)
![licença](https://img.shields.io/badge/licença-MIT-green)
![PRs](https://img.shields.io/badge/PRs-bem--vindas-blue)

## Índice

- [Sobre o projeto](#sobre-o-projeto)
- [Status do projeto](#status-do-projeto)
- [Funcionalidades (planejadas)](#funcionalidades-planejadas)
- [Modelo de dados](#modelo-de-dados)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como rodar localmente](#como-rodar-localmente)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como contribuir](#como-contribuir)
- [Licença](#licença)
- [Autor](#autor)

## Sobre o projeto

O **Todo List** é um projeto em fase inicial: o modelo de dados de uma tarefa já está definido e testado, e existe um esqueleto executável em Node.js, mas as camadas de interface e persistência ainda não foram escolhidas. Este README documenta o que já está decidido e sinaliza claramente o que ainda depende de decisões futuras.

## Status do projeto

🚧 **Em desenvolvimento inicial.** O primeiro código-fonte já está no repositório: o modelo de dados em [`src/models/task.ts`](src/models/task.ts), com testes. As próximas decisões necessárias são:

- [x] Definir a linguagem e a ferramenta de teste: TypeScript e Vitest, ver [`docs/tasks/task-09-modelo-minimo-de-dados.md`](docs/tasks/task-09-modelo-minimo-de-dados.md).
- [ ] Definir a plataforma-alvo e o framework de interface (web, mobile, CLI, desktop).
- [ ] Definir a forma de persistência (memória, armazenamento local, banco ou API).
- [ ] Detalhar o escopo funcional (lista simples vs. categorias, prazos, prioridades, múltiplos usuários).
- [x] Definir a licença do projeto: MIT, ver [LICENSE](LICENSE).

Cada decisão deve ser registrada como um novo arquivo em [`docs/tasks/`](docs/tasks/) (seguindo o padrão dos arquivos já existentes) e referenciada em um Pull Request, para manter o histórico de por que cada escolha foi feita. Assim que uma decisão for tomada, a seção correspondente abaixo (marcada como "a definir") deve ser atualizada e o item acima marcado como concluído.

## Funcionalidades (planejadas)

> Escopo ainda não confirmado. Lista baseada no propósito esperado de uma aplicação de lista de tarefas — a confirmar/ajustar.

- Criar novas tarefas
- Marcar tarefas como concluídas
- Editar tarefas existentes
- Remover tarefas
- Listar e filtrar tarefas (todas / pendentes / concluídas)

## Modelo de dados

Uma tarefa é representada pela interface `Task` ([`src/models/task.ts`](src/models/task.ts)):

| Campo | Tipo | Regra |
|---|---|---|
| `id` | `string` | UUID v4, único e imutável |
| `title` | `string` | Obrigatório, não vazio |
| `description` | `string` | Sempre presente; string vazia quando não informada |
| `createdAt` | `string` | ISO 8601 UTC `YYYY-MM-DDTHH:mm:ss.sssZ`; imutável |
| `lastModified` | `string` | Mesmo formato; igual a `createdAt` até a primeira alteração |
| `version` | `number` | Inteiro >= 1; começa em 1 e aumenta 1 a cada alteração |
| `completed` | `boolean` | `false` na criação |

```ts
import { createTask } from './src/models/task.js';

const tarefa = createTask({ title: 'Comprar pão', description: 'Antes das 18h' });
// { id: '…', title: 'Comprar pão', …, version: 1, completed: false }
```

O modelo é serializável em JSON de propósito, para não travar a escolha futura de persistência.

## Tecnologias

- [Node.js](https://nodejs.org/) 20 ou superior.
- [TypeScript](https://www.typescriptlang.org/) para o código-fonte, em modo `strict`.
- [Vitest](https://vitest.dev/) para os testes.

Não há framework de interface nem dependências de produção. A forma de persistência
segue em aberto, ver o checklist em [Status do projeto](#status-do-projeto).

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior (inclui o `npm`)

## Instalação

```bash
git clone https://github.com/dionesiojr/todo-list-runtable.git
cd todo-list-runtable
npm install
```

Não há dependências de produção. O `npm install` instala apenas as ferramentas de
desenvolvimento (TypeScript e Vitest).

## Como rodar localmente

```bash
npm start        # sobe o servidor HTTP
npm test         # roda os testes uma vez
npm run test:watch   # roda os testes em modo observador
npm run typecheck    # verifica os tipos sem gerar build
```

O servidor sobe em <http://localhost:3000>. A porta pode ser trocada pela variável de
ambiente `PORT`.

## Estrutura do projeto

```
.
├── README.md              # este arquivo
├── CONTRIBUTING.md        # fluxo de contribuição (branches, commits, PRs)
├── CHANGELOG.md           # histórico de mudanças
├── LICENSE                # licença MIT
├── package.json           # metadados e scripts do projeto
├── tsconfig.json          # configuração do TypeScript
├── src/                   # todo o código-fonte da aplicação
│   ├── index.js           # ponto de entrada: servidor HTTP
│   └── models/            # modelos de dados
│       └── task.ts        # modelo de uma tarefa
├── tests/                 # testes, espelhando a estrutura de src/
│   └── models/
│       └── task.test.ts
└── docs/
    └── tasks/             # histórico de análise/validação das tasks
```

Todo o código-fonte da aplicação fica dentro de `src/`, separado de arquivos de configuração, documentação e testes. Os testes ficam em `tests/`, espelhando a estrutura de `src/`.

## Como contribuir

1. Crie uma branch a partir da `main` para sua alteração.
2. Se a alteração envolver uma decisão pendente (stack, escopo, licença etc.), registre o raciocínio em um novo arquivo em [`docs/tasks/`](docs/tasks/), seguindo o padrão dos arquivos existentes.
3. Faça commits pequenos e descritivos.
4. Abra um Pull Request descrevendo o que foi feito e por quê, referenciando o arquivo de decisão quando aplicável.

## Licença

Este projeto está licenciado sob a licença MIT. O texto completo está no arquivo [LICENSE](LICENSE) na raiz do repositório.

## Autor

Mantido por [@dionesiojr](https://github.com/dionesiojr). Dúvidas, sugestões e bugs devem ser abertos como [issues](https://github.com/dionesiojr/todo-list-runtable/issues) neste repositório, para manter o histórico de discussão público e vinculado ao projeto.
