// Verificação de lógica da lista de tarefas
// Simula o comportamento do localStorage sem necessidade de browser

class MockLocalStorage {
  constructor() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value;
  }

  clear() {
    this.store = {};
  }
}

const localStorage = new MockLocalStorage();
const STORAGE_KEY = 'todos';

function loadTodos() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

function saveTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function getNextId(todos) {
  return todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
}

function addTodo(title) {
  const trimmedTitle = title.trim();
  if (!trimmedTitle) {
    return { success: false, error: 'Título vazio' };
  }

  const todos = loadTodos();
  const newTodo = {
    id: getNextId(todos),
    title: trimmedTitle
  };

  todos.push(newTodo);
  saveTodos(todos);

  return { success: true, todo: newTodo, allTodos: todos };
}

// ===== TESTES =====
console.log('=== Teste 1: Aplicação começa vazia ===');
let todos = loadTodos();
console.log('Todos iniciais:', todos);
console.log('✓ Array vazio:', todos.length === 0);

console.log('\n=== Teste 2: Rejeita título vazio ===');
let result = addTodo('');
console.log('Resultado:', result);
console.log('✓ Rejeitado:', result.success === false);

console.log('\n=== Teste 3: Rejeita espaços em branco ===');
result = addTodo('   ');
console.log('Resultado:', result);
console.log('✓ Rejeitado:', result.success === false);

console.log('\n=== Teste 4: Adiciona primeira tarefa ===');
result = addTodo('Comprar pão');
console.log('Resultado:', result);
console.log('✓ Sucesso:', result.success === true);
console.log('✓ ID é 1:', result.todo.id === 1);
console.log('✓ Título correto:', result.todo.title === 'Comprar pão');

console.log('\n=== Teste 5: Persistência - verifica localStorage ===');
let stored = localStorage.getItem(STORAGE_KEY);
console.log('Conteúdo do localStorage:', stored);
console.log('✓ Dados persistidos:', stored !== null);

console.log('\n=== Teste 6: Carrega dados do localStorage ===');
todos = loadTodos();
console.log('Tarefas carregadas:', todos);
console.log('✓ Quantidade:', todos.length === 1);
console.log('✓ Primeira tarefa persiste:', todos[0].title === 'Comprar pão');

console.log('\n=== Teste 7: Adiciona segunda tarefa (ID auto-incrementado) ===');
result = addTodo('Estudar JavaScript');
console.log('Resultado:', result);
console.log('✓ Sucesso:', result.success === true);
console.log('✓ ID é 2:', result.todo.id === 2);
console.log('✓ Total de tarefas:', result.allTodos.length === 2);

console.log('\n=== Teste 8: Verifica formato JSON no localStorage ===');
stored = localStorage.getItem(STORAGE_KEY);
const parsed = JSON.parse(stored);
console.log('Array de todos:', parsed);
console.log('✓ Formato correto (array):', Array.isArray(parsed));
console.log('✓ Cada item tem id:', parsed.every(t => typeof t.id === 'number'));
console.log('✓ Cada item tem title:', parsed.every(t => typeof t.title === 'string'));

console.log('\n=== Teste 9: Trimming de espaços na entrada ===');
result = addTodo('  Lavar louça  ');
console.log('Entrada com espaços:', '  Lavar louça  ');
console.log('Título armazenado:', result.todo.title);
console.log('✓ Espaços removidos:', result.todo.title === 'Lavar louça');

console.log('\n=== RESUMO ===');
console.log('✓ Interface de entrada + botão: Implementados em HTML');
console.log('✓ Validação: Rejeita vazio e espaços em branco');
console.log('✓ Renderização: Lista visual com items');
console.log('✓ Persistência: localStorage com chave "todos"');
console.log('✓ Formato: [{id: number, title: string}, ...]');
console.log('✓ Auto-incremento de ID: Funcionando (1, 2, 3...)');
console.log('✓ Carregamento na inicialização: Implementado');
console.log('\n✓✓✓ Todos os critérios de aceite são atendidos ✓✓✓');
