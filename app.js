const STORAGE_KEY = 'todos';

const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const errorMessage = document.getElementById('errorMessage');

function getTodos() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

function saveTodos(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function renderTodos() {
    const todos = getTodos();
    todoList.innerHTML = '';

    if (todos.length === 0) {
        todoList.innerHTML = '<li class="empty-state">Nenhuma tarefa ainda. Adicione uma acima!</li>';
        return;
    }

    todos.forEach((todo) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.textContent = todo;
        todoList.appendChild(li);
    });
}

function addTodo() {
    const title = todoInput.value.trim();

    clearError();

    if (!title) {
        showError('Por favor, insira um título para a tarefa.');
        return;
    }

    const todos = getTodos();
    todos.push(title);
    saveTodos(todos);

    todoInput.value = '';
    todoInput.focus();
    renderTodos();
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
}

function clearError() {
    errorMessage.classList.remove('show');
    errorMessage.textContent = '';
}

addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

renderTodos();
