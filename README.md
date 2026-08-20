# Todo List

Aplicação de lista de tarefas (to-do list) para criar, organizar e acompanhar tarefas do dia a dia.

![status](https://img.shields.io/badge/status-planejamento-yellow)
![licença](https://img.shields.io/badge/licença-a%20definir-lightgrey)
![PRs](https://img.shields.io/badge/PRs-bem--vindas-blue)

## Índice

- [Sobre o projeto](#sobre-o-projeto)
- [Status do projeto](#status-do-projeto)
- [Funcionalidades (planejadas)](#funcionalidades-planejadas)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como rodar localmente](#como-rodar-localmente)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como contribuir](#como-contribuir)
- [Licença](#licença)
- [Autor](#autor)

## Sobre o projeto

O **Todo List** é um projeto em fase inicial: já existe um esqueleto executável em Node.js, mas as funcionalidades da lista de tarefas ainda não foram implementadas. Este README documenta o que já se sabe sobre o projeto e sinaliza claramente o que ainda depende de decisões futuras.

## Status do projeto

🚧 **Em construção.** O repositório já sobe um servidor HTTP mínimo (`src/index.js`), mas nenhuma funcionalidade de tarefas foi implementada. As próximas decisões necessárias são:

- [x] Definir a stack técnica: Node.js, sem dependências externas por enquanto. A forma de persistência ainda está em aberto.
- [ ] Definir a plataforma-alvo (web, mobile, CLI, desktop).
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

## Tecnologias

A definir — depende da stack escolhida (linguagem, framework(s) e forma de persistência). Ver checklist em [Status do projeto](#status-do-projeto).

## Pré-requisitos

- [Node.js](https://nodejs.org/) (inclui o `npm`)

## Instalação

```bash
git clone https://github.com/dionesiojr/todo-list-runtable.git
cd todo-list-runtable
npm install
```

O projeto ainda não tem dependências externas, então `npm install` apenas prepara o
ambiente.

## Como rodar localmente

```bash
npm start
```

O servidor sobe em <http://localhost:3000>. A porta pode ser trocada pela variável de
ambiente `PORT`.

## Estrutura do projeto

```
.
├── README.md              # este arquivo
├── CONTRIBUTING.md        # fluxo de contribuição (branches, commits, PRs)
├── LICENSE                # licença MIT
├── package.json           # metadados e scripts do projeto
├── src/                   # todo o código-fonte da aplicação
│   └── index.js           # ponto de entrada: servidor HTTP
└── docs/
    └── tasks/             # histórico de análise/validação das tasks
```

Todo o código-fonte da aplicação deve ser adicionado dentro de `src/`, separado de arquivos de configuração, documentação e testes. Conforme o projeto crescer, esta seção deve ser atualizada para refletir a organização real (ex.: subpastas de `src/`, pasta `tests/`).

## Como contribuir

1. Crie uma branch a partir da `main` para sua alteração.
2. Se a alteração envolver uma decisão pendente (stack, escopo, licença etc.), registre o raciocínio em um novo arquivo em [`docs/tasks/`](docs/tasks/), seguindo o padrão dos arquivos existentes.
3. Faça commits pequenos e descritivos.
4. Abra um Pull Request descrevendo o que foi feito e por quê, referenciando o arquivo de decisão quando aplicável.

## Licença

Este projeto está licenciado sob a licença MIT. O texto completo está no arquivo [LICENSE](LICENSE) na raiz do repositório.

## Autor

Mantido por [@dionesiojr](https://github.com/dionesiojr). Dúvidas, sugestões e bugs devem ser abertos como [issues](https://github.com/dionesiojr/todo-list-runtable/issues) neste repositório, para manter o histórico de discussão público e vinculado ao projeto.
