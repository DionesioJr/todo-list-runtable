# To-Do List

## Uso

```js
import { TodoList } from "./src/todoList.js";

const list = new TodoList();
list.addItem("Comprar leite"); // adiciona o item
list.getItems(); // [{ id: 1, title: "Comprar leite" }]

list.addItem(""); // lança Error: "Título não pode ser vazio."
```

## Testes

```
npm test
```
