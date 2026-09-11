import { test } from "node:test";
import assert from "node:assert/strict";
import { TodoList } from "../src/todoList.js";

test("adiciona um item informando um título e ele aparece na lista", () => {
  const list = new TodoList();

  const item = list.addItem("Comprar leite");

  assert.equal(item.title, "Comprar leite");
  assert.deepEqual(
    list.getItems().map((i) => i.title),
    ["Comprar leite"]
  );
});

test("recusa título vazio com mensagem", () => {
  const list = new TodoList();

  assert.throws(() => list.addItem(""), /Título não pode ser vazio/);
  assert.deepEqual(list.getItems(), []);
});

test("recusa título composto só de espaços em branco", () => {
  const list = new TodoList();

  assert.throws(() => list.addItem("   "), /Título não pode ser vazio/);
  assert.deepEqual(list.getItems(), []);
});

test("cada item adicionado aparece na lista, na ordem em que foi incluído", () => {
  const list = new TodoList();

  list.addItem("Primeira tarefa");
  list.addItem("Segunda tarefa");

  assert.deepEqual(
    list.getItems().map((i) => i.title),
    ["Primeira tarefa", "Segunda tarefa"]
  );
});
