# Validação de Task: Criar pasta de src para o código

## Task original

> Criar uma pasta de src para o codigo

## Avaliação (campos necessários para desenvolvimento)

| Campo | Presente? | Observação |
|---|---|---|
| Título claro | ✅ | Objetivo é entendível |
| Contexto/motivação | ❌ | Não explica por que a estrutura está sendo criada agora nem qual o projeto/stack |
| Stack/linguagem alvo | ❌ | Repositório está vazio; não há `package.json`, `pyproject.toml`, etc. que indiquem a stack |
| Estrutura esperada dentro de `src` | ❌ | Não define subpastas (ex.: `components`, `services`, `models`) nem convenção de organização |
| Critérios de aceite | ❌ | Não diz como validar que a task está concluída |
| Escopo / fora de escopo | ❌ | Não deixa claro se inclui configurar build/lint apontando para `src`, ou só criar a pasta |
| Dependências | ❌ | Não menciona se depende de outra task (ex.: escolha de stack, scaffold inicial) |
| Prioridade | ❌ | Não informada |

**Conclusão:** a task está mal especificada — é apenas uma ação isolada ("criar pasta"), sem contexto do projeto. Como o repositório `todo-list` está vazio (apenas commit inicial vazio), a task de criar `src/` é literal e de baixo risco, mas carece de definição de estrutura interna e de critérios de aceite para ser considerada "pronta para dev" em um time real.

## Task melhorada

**Título:** Criar estrutura inicial da pasta `src/` do projeto

**Contexto:** O repositório `todo-list` está vazio (apenas o commit inicial). Antes de iniciar o desenvolvimento das funcionalidades da lista de tarefas, é necessário padronizar onde o código-fonte da aplicação vai residir.

**Descrição:** Criar a pasta `src/` na raiz do repositório para concentrar todo o código-fonte da aplicação, separando-o de arquivos de configuração, documentação e testes.

**Critérios de aceite:**
- [ ] Pasta `src/` existe na raiz do repositório e está versionada no git.
- [ ] README (ou documento equivalente) indica que o código-fonte deve ser adicionado dentro de `src/`.
- [ ] Nenhum código de produção é adicionado fora de `src/` a partir desta task.

**Fora de escopo:**
- Definição da stack/linguagem do projeto (task separada).
- Configuração de build, lint ou testes apontando para `src/` (depende da stack escolhida).

**Notas técnicas:** Git não versiona pastas vazias; foi adicionado um `.gitkeep` em `src/` para garantir que a pasta seja rastreada até que o primeiro arquivo de código seja criado.

**Prioridade:** Alta (bloqueia o início do desenvolvimento).
