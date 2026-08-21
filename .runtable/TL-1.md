# TL-1 Definir e implementar o modelo mínimo de dados

## Objetivo

Ter um esquema de tarefa com id, title, description, createdAt, lastModified, version e completed disponível no código.

Pronto quando: Existe código (interface/objeto) que define os campos exigidos; há um pequeno teste unitário que instancia uma tarefa com todos os campos e verifica tipos/formatos (ISO 8601 para timestamps).

## De onde veio

- REQ-001 — Lista de tarefas : Primeira da frente do modelo. Libera t2 e t11.

## Decisões já tomadas

- Tech manager: claim preso por falha antiga do execution-context (403) - liberado manualmente apos corrigir permissao

## Depende dew

- Implementar camada de persistência em localStorage — A Fazer
- Implementar formulário e fluxo para criar nova tarefa — A Fazer
- Implementar edição de título e descrição de tarefa — A Fazer
- Adicionar ação de excluir tarefa — A Fazer
- Implementar marcar/desmarcar tarefa como concluída — A Fazer
- Implementar resolução de conflitos por lastModified com opção manual — A Fazer
- Adicionar campo version e lógica simples de migração de formato — A Fazer
- Escrever e rodar testes manuais e automatizados para os fluxos principais — A Fazer
- Garantir atualização de createdAt/lastModified em todas as operações — A Fazer