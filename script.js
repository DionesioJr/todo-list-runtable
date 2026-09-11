const STORAGE_KEY = "todo-list-items";

/** @typedef {{ id: string, text: string, completed: boolean }} Item */

/** @returns {Item[]} */
function loadItems() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/** @param {Item[]} items */
function saveItems(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

let items = loadItems();

const listEl = document.getElementById("item-list");
const formEl = document.getElementById("add-form");
const inputEl = document.getElementById("new-item-text");

function render() {
  listEl.innerHTML = "";
  for (const item of items) {
    const li = document.createElement("li");
    li.className = item.completed ? "completed" : "";
    li.dataset.id = item.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.completed;
    checkbox.setAttribute("aria-label", "Marcar como concluído");
    checkbox.addEventListener("change", () => toggleItem(item.id));

    const text = document.createElement("span");
    text.className = "item-text";
    text.textContent = item.text;

    li.appendChild(checkbox);
    li.appendChild(text);
    listEl.appendChild(li);
  }
}

function toggleItem(id) {
  items = items.map((item) =>
    item.id === id ? { ...item, completed: !item.completed } : item
  );
  saveItems(items);
  render();
}

function addItem(text) {
  const trimmed = text.trim();
  if (!trimmed) return;
  items.push({ id: crypto.randomUUID(), text: trimmed, completed: false });
  saveItems(items);
  render();
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  addItem(inputEl.value);
  inputEl.value = "";
  inputEl.focus();
});

render();
