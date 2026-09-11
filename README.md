# To-Do List Runtable

Uma aplicação simples de lista de tarefas com persistência em localStorage.

## Funcionalidades

✅ Adicionar itens à lista de tarefas
✅ Validação de título vazio com mensagem de erro
✅ Itens adicionados aparecem na lista imediatamente
✅ Persistência via localStorage - itens são mantidos após recarregar a página
✅ Suporte a submissão via clique no botão ou tecla Enter

## Como executar

```bash
# Opção 1: Usar http-server (se instalado)
npx http-server -p 8080 -o

# Opção 2: Abrir o arquivo diretamente no navegador
Abra index.html em seu navegador
```

## Testes manuais

### Critério 1: Adicionar item válido
1. Digite "Teste tarefa 1" no campo de entrada
2. Clique em "Adicionar" ou pressione Enter
3. Verifique se o item aparece na lista

### Critério 2: Rejeitar título vazio
1. Deixe o campo vazio
2. Clique em "Adicionar"
3. Verifique a mensagem de erro: "Por favor, insira um título para a tarefa."

### Critério 3: Persistência
1. Adicione alguns itens ("Teste 1", "Teste 2")
2. Recarregue a página (F5 ou Ctrl+R)
3. Verifique que todos os itens continuam listados

### Critério 4: Múltiplos itens
1. Adicione vários itens diferentes
2. Verifique que todos aparecem na lista sem sobrescrever

## Estrutura do projeto

- `index.html` - Página principal com HTML e CSS
- `app.js` - Lógica JavaScript da aplicação
- `package.json` - Configuração do projeto

## Armazenamento

Os itens são armazenados em `localStorage` com a chave `todos` como um array JSON.

```javascript
// Exemplo do armazenamento:
localStorage.getItem('todos')
// ["Implementar to-do list", "Testar aplicação", ...]
```
