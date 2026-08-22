# Validação de Task: Criar CHANGELOG.md no padrão Keep a Changelog

## Task original

> Criar CHANGELOG.md no padrao Keep a Changelog
>
> - Existe o arquivo CHANGELOG.md na raiz do repositorio.
> - O cabecalho referencia o padrao Keep a Changelog e o Semantic Versioning, com links.
> - Existe uma secao Unreleased com a subsecao Added listando o que ja foi entregue no repositorio ate agora.
> - Nao ha versoes ficticias listadas: o projeto ainda nao teve release.
> - O texto esta em portugues do Brasil.

## Avaliação (campos necessários para o desenvolvimento)

| Campo | Presente? | Observação |
|---|---|---|
| Título claro | ✅ | Objetivo inequívoco: um arquivo, um padrão conhecido |
| Critérios de aceite | ✅ | Os 5 bullets já são verificáveis um a um |
| Padrão de referência | ✅ | Keep a Changelog + Semantic Versioning, nomeados explicitamente |
| Regra anti-invenção | ✅ | "Não há versões fictícias" evita o erro mais comum (inventar um `1.0.0`) |
| Idioma | ✅ | Português do Brasil |
| Versão do padrão | ❌ | Não diz se é Keep a Changelog 1.0.0 ou 1.1.0 — ver decisão 1 |
| Idioma dos **títulos de seção** | ⚠️ | Conflito interno: pede texto em pt-BR, mas nomeia as seções em inglês (`Unreleased`, `Added`) — ver decisão 2 |
| Fonte da verdade de "o que já foi entregue" | ❌ | Não define se é a `main`, o histórico de commits ou as branches em aberto — **esta é a lacuna real da task**, ver decisão 3 |
| Granularidade das entradas | ❌ | Não diz se cada bullet é um commit, uma task ou um arquivo entregue — ver decisão 4 |
| Link de comparação no rodapé | ❌ | O padrão usa `[Unreleased]: .../compare/v1.0.0...HEAD`, o que não existe sem release — ver decisão 5 |
| Contexto/motivação | ❌ | Não explica por que agora (preencher a seção 4) |
| Escopo (o que fica de fora) | ❌ | Não delimita se inclui automação, tags ou política de versionamento (ver seção 5) |
| Prioridade / estimativa / responsável | ❌ | Não informados |

**Conclusão:** a task está **bem escrita e pronta para desenvolvimento**. Os critérios
de aceite são objetivos e verificáveis, e a regra "não há versões fictícias" já bloqueia
o pior desvio possível. As lacunas encontradas são de detalhamento, não de viabilidade —
todas foram resolvidas com um padrão seguro (seção 3) em vez de bloquear a entrega. A
única que exige atenção do solicitante é a decisão 3, porque muda o *conteúdo* do arquivo.

## Decisões assumidas (confirmar com o solicitante)

1. **Versão do padrão.** Adotada a **Keep a Changelog 1.1.0** (versão corrente), com link
   para a tradução pt-BR: <https://keepachangelog.com/pt-BR/1.1.0/>. O Semantic
   Versioning aponta para <https://semver.org/lang/pt-BR/>, também em pt-BR, coerente com
   o último critério de aceite.
2. **Títulos de seção em inglês, corpo em pt-BR.** Os critérios nomeiam literalmente as
   seções `Unreleased` e `Added`, e é assim que ferramentas de release (release-please,
   git-cliff, changesets) fazem o parsing do arquivo. Então os títulos ficam em inglês e
   **todo o texto descritivo** fica em português do Brasil. Alternativa, caso o
   solicitante prefira 100% em português: usar `## [Não lançado]` e `### Adicionado`,
   como na tradução oficial pt-BR — mas isso quebra o parsing automático.
3. **O que conta como "já entregue".** ⚠️ **Ponto de atenção.** A branch `main` está
   **vazia** — contém apenas o commit inicial (`489bda4 chore: commit inicial vazio`).
   Tudo o que foi produzido até agora vive em branches `agent/*` ainda **não mergeadas**.
   Interpretar "entregue" como "está na `main`" produziria um `CHANGELOG.md` com a seção
   `Added` vazia, o que contraria o terceiro critério de aceite. *Assumido:* "entregue" =
   trabalho já concluído e commitado no repositório (histórico das branches de task), que
   é o que de fato entra na primeira release quando essas branches forem integradas.
4. **Granularidade.** Uma entrada por artefato entregue (arquivo ou pasta relevante),
   descrita pelo valor para quem lê, e não por commit — commits repetidos de iterações da
   mesma task (ex.: as quatro passadas no README) viram uma única linha.
5. **Rodapé de links.** Sem release, não existe tag para o `compare/vX.Y.Z...HEAD` do
   padrão. *Assumido:* `[Unreleased]` aponta para a lista de commits da `main`. Quando a
   primeira tag existir, trocar pelo link de comparação canônico.

## Escopo

### Incluído

- Criar `CHANGELOG.md` na raiz, no padrão Keep a Changelog.
- Preencher `## [Unreleased]` / `### Added` com o que já foi entregue.
- Este documento de validação da task.

### Fora de escopo

- Criar tags git ou publicar a versão `1.0.0`.
- Automatizar a geração do changelog (release-please, git-cliff, changesets).
- Definir a política de versionamento e o critério de corte de release.
- Atualizar o `README.md` para linkar o changelog (bom follow-up, mas não é critério aqui).

## Critérios de aceite (refinados)

- [x] **CA1** — Existe `CHANGELOG.md` na raiz do repositório, versionado no git.
- [x] **CA2** — O cabeçalho referencia Keep a Changelog e Versionamento Semântico, ambos
      com links funcionais.
- [x] **CA3** — Existe uma seção `## [Unreleased]` com a subseção `### Added`, listando o
      que já foi entregue (README, seção de execução local, `package.json`, `src/`,
      `CONTRIBUTING.md`, `LICENSE`, `docs/tasks/` e o próprio changelog).
- [x] **CA4** — Não há nenhuma versão listada além de `Unreleased`: nenhum `## [1.0.0]`,
      nenhuma data de release, nenhum número de versão inventado.
- [x] **CA5** — Todo o texto descritivo está em português do Brasil (títulos de seção em
      inglês por decisão 2).
- [x] **CA6** — Nenhuma entrada descreve algo que não existe no repositório.

## Como validar

```sh
# CA1
git ls-files CHANGELOG.md

# CA2
grep -F "keepachangelog.com" CHANGELOG.md
grep -F "semver.org" CHANGELOG.md

# CA3
grep -n "^## \[Unreleased\]" CHANGELOG.md
grep -n "^### Added" CHANGELOG.md

# CA4 — deve retornar apenas a linha de [Unreleased] (nenhuma versão numerada)
grep -nE "^## " CHANGELOG.md
```

## Pendências identificadas durante a análise

- **`LICENSE` — resolvido.** Na primeira análise o commit
  `6a04b89 Adicionar arquivo LICENSE com a licenca MIT` havia entregue apenas
  `docs/tasks/adicionar-license-mit.md`, sem o arquivo `LICENSE`. A task foi refeita e o
  commit `d34c055` entregou o `LICENSE` (MIT) mais a seção "Licença" do `README.md`
  apontando para ele. A licença passou a constar no `### Added`.
- **Branches não integradas.** Enquanto as branches `agent/*` não forem mergeadas na
  `main`, o `CHANGELOG.md` descreve trabalho que não está visível na branch principal.
  Revisar a lista de `Added` no momento do merge para a `main`.
