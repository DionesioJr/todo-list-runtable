# Changelog

Todas as mudanças relevantes deste projeto são documentadas neste arquivo.

O formato é baseado no [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Unreleased]

Nada foi publicado ainda: o projeto **não teve nenhuma release**. Tudo o que está
listado abaixo entra na primeira versão quando ela for cortada.

### Added

- `README.md` na raiz, apresentando o projeto Todo List, com índice, status do
  projeto, funcionalidades planejadas, tecnologias, estrutura de pastas e seções
  de contribuição, licença e autor.
- Seção "Como rodar localmente" no `README.md`, com os pré-requisitos e os
  comandos `npm install` e `npm start`, iguais aos scripts reais do
  `package.json`.
- `package.json` mínimo (Node.js, sem dependências externas) com o script
  `start`, acompanhado do `package-lock.json`.
- `src/index.js` com um servidor HTTP mínimo, que responde na porta `3000` (ou na
  porta definida pela variável de ambiente `PORT`).
- Pasta `src/` como local único do código-fonte da aplicação.
- `CONTRIBUTING.md` com o fluxo de contribuição do projeto: padrão de nomes de
  branch, mensagens de commit no formato
  [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/) e
  passos para abrir um Pull Request, incluindo revisão.
- `LICENSE` com o texto completo da licença MIT, e a seção "Licença" do
  `README.md` apontando para ele.
- Pasta `docs/tasks/` com o registro de validação e refinamento de cada task do
  projeto.
- Este `CHANGELOG.md`, no padrão Keep a Changelog.

[Unreleased]: https://github.com/dionesiojr/todo-list-runtable/commits/main
