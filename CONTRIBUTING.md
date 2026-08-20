# Como contribuir

Obrigado por contribuir com o **todo-list**! Este documento descreve o fluxo de
trabalho combinado no projeto: como nomear branches, como escrever mensagens de
commit e como abrir um Pull Request.

> **Observação:** o projeto ainda não tem stack definida, portanto este guia não
> descreve comandos de instalação, build ou testes. Assim que a stack for
> escolhida, esta seção deve ser substituída pelas instruções reais.

## Antes de começar

1. Confirme que existe uma issue descrevendo o que será feito. Se não existir,
   abra uma antes de codar — é ela que dá contexto à revisão.
2. Comente na issue que você vai assumi-la, para evitar trabalho duplicado.
3. Atualize sua cópia local da branch `main` e crie sua branch a partir dela.

## Nomes de branch

Toda branch parte de `main` e segue o formato:

```
<tipo>/<descricao-curta>
```

- `<tipo>`: o mesmo vocabulário dos commits — `feat`, `fix`, `docs`, `chore`,
  `refactor`, `test`.
- `<descricao-curta>`: em letras minúsculas, palavras separadas por hífen, sem
  acentos e sem caracteres especiais. Prefira até 4 ou 5 palavras.

Se a branch estiver ligada a uma issue, inclua o número dela no início da
descrição.

Exemplos:

```
feat/cadastro-de-tarefas
fix/123-corrige-data-de-vencimento
docs/fluxo-de-contribuicao
```

Evite nomes genéricos como `minha-branch`, `teste` ou `correcoes`.

## Mensagens de commit

O projeto adota o padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/).
A mensagem tem a forma:

```
<tipo>(<escopo opcional>): <descricao no imperativo>

<corpo opcional explicando o porquê da mudança>

<rodapé opcional, ex.: Closes #123>
```

Tipos usados no projeto:

| Tipo       | Quando usar                                                        |
| ---------- | ------------------------------------------------------------------ |
| `feat`     | Nova funcionalidade para o usuário                                  |
| `fix`      | Correção de um comportamento errado                                 |
| `docs`     | Apenas documentação                                                 |
| `refactor` | Mudança interna que não altera comportamento                        |
| `test`     | Criação ou ajuste de testes                                         |
| `chore`    | Tarefas de manutenção (configuração, dependências, arquivos de apoio) |

Regras práticas:

- Escreva a descrição no imperativo e em minúsculas: "adiciona", não
  "adicionado" nem "Adiciona".
- Não termine a primeira linha com ponto final; procure não passar de 72
  caracteres nela.
- Um commit por mudança lógica. Se precisar usar "e" na descrição, provavelmente
  são dois commits.
- Mudanças incompatíveis com o que já existe levam `!` após o tipo e um rodapé
  `BREAKING CHANGE:` explicando o impacto.

Exemplos:

```
feat(tarefas): permite marcar uma tarefa como concluida
```

```
fix(tarefas): corrige ordenacao por data de vencimento

A comparacao era feita como texto, entao 10/01 vinha antes de 09/01.
Passa a comparar as datas ja convertidas.

Closes #123
```

## Fluxo de Pull Request

1. **Parta de `main`.** Crie sua branch a partir da `main` atualizada, seguindo
   a convenção de nomes acima. Não commite diretamente na `main`.
2. **Abra o PR contra `main`** no repositório
   [dionesiojr/todo-list-runtable](https://github.com/dionesiojr/todo-list-runtable).
   Se você não tem permissão de escrita, trabalhe em um fork e abra o PR do seu
   fork para a `main` deste repositório.
3. **Use o mesmo padrão do commit no título do PR**, por exemplo:
   `feat(tarefas): permite marcar uma tarefa como concluida`.
4. **Descreva o PR** cobrindo:
   - **O que muda:** um resumo em uma ou duas frases.
   - **Por que:** o problema ou a necessidade que motivou a mudança.
   - **Issue relacionada:** referencie com `Closes #123` para fechar a issue
     automaticamente quando o PR for integrado.
   - **Como validar:** os passos que você seguiu para conferir que funciona,
     descritos de acordo com o que já existe no repositório.
   - **Pontos de atenção:** decisões em aberto, alternativas descartadas ou
     partes em que você quer uma revisão mais cuidadosa.
   - **Evidências:** capturas de tela ou trechos de saída, quando a mudança for
     visível.
5. **Marque como rascunho (draft)** enquanto o trabalho ainda estiver em
   andamento e peça revisão quando estiver pronto.
6. **Prefira PRs pequenos.** É melhor uma sequência de PRs focados do que um
   único PR grande — a revisão fica mais rápida e mais útil.

### Revisão

- Todo PR precisa da aprovação de pelo menos uma pessoa revisora antes de ser
  integrado.
- Responda a cada comentário, mesmo que seja para explicar por que a sugestão
  não foi aplicada. Resolva as conversas apenas depois de tratá-las.
- Ajustes pedidos na revisão entram como novos commits na mesma branch, seguindo
  o mesmo padrão de mensagem.
- Depois que o PR for integrado, apague a branch.

## Dúvidas

Não tem certeza sobre a melhor abordagem? Abra uma issue com a dúvida ou um PR
em rascunho para discutir antes de investir tempo na implementação.
