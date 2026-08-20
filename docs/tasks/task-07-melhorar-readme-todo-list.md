# Task 7 — Melhorar o README do projeto Todo List

## Status da validação

**Task original:** "Melhorar o readme do projeto Todo List"

**Resultado:** ⚠️ Mesma limitação das tasks [5](task-05-melhorar-readme-todo-list.md) e [6](task-06-melhorar-readme-todo-list.md) — a task continua genérica e o repositório continua sem código-fonte, então stack, escopo, plataforma e licença seguem indefinidos.

### O que já estava resolvido (herdado das tasks 5 e 6)

- README completo em pt-BR, com todas as seções padrão.
- Pendências reais sinalizadas como "a definir", sem conteúdo inventado.
- Checklist de decisões pendentes com instrução de onde registrá-las (`docs/tasks/`, referenciado em PR).

### Melhoria aplicada nesta rodada

Como o conteúdo já estava completo dentro do que é possível saber, esta rodada focou em **limpeza e coerência do documento**, não em novo conteúdo técnico:

- Removidos comentários HTML `<!-- TODO: ... -->` redundantes, que duplicavam a mesma informação já coberta pelo checklist em "Status do projeto".
- Seção "Estrutura do projeto" atualizada para listar os arquivos reais existentes em `docs/tasks/` (antes usava um comentário genérico "notas de análise/validação de tasks").
- Seção "Como contribuir" passou a instruir explicitamente a registrar o raciocínio de decisões pendentes em `docs/tasks/` antes de abrir o PR, fechando o ciclo já descrito em "Status do projeto".
- Adicionado badge de licença ("a definir") para deixar visualmente explícito, junto ao badge de status, que a licença ainda não foi escolhida.
- Seção "Licença" deixou de ser só "A definir" e passou a explicar a implicação prática (código não licenciado para reuso por terceiros até que uma licença seja adicionada).

### Campos que ainda faltam para o desenvolvimento (inalterados)

- Stack técnica, plataforma-alvo, escopo funcional detalhado e licença — continuam dependendo de decisão do responsável pelo projeto, não de quem escreve o README.

## Entregável desta etapa

`README.md` revisado: mesmas seções e mesmas pendências reais da task 6, porém sem duplicação entre comentários `TODO` e o checklist de "Status do projeto", com a estrutura de pastas refletindo os arquivos reais do repositório e um fluxo de contribuição mais explícito sobre como registrar decisões pendentes.
