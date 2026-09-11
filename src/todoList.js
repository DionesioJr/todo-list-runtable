/**
 * Lista de tarefas em memória.
 *
 * Regras:
 * - addItem(title) adiciona um item novo à lista.
 * - Título vazio, ou composto só de espaços em branco, é recusado com uma
 *   mensagem de erro (lança Error) — não falha silenciosamente.
 * - Itens adicionados ficam visíveis via getItems().
 */
export class TodoList {
  constructor() {
    this.items = [];
    this._nextId = 1;
  }

  addItem(title) {
    if (typeof title !== "string" || title.trim().length === 0) {
      throw new Error("Título não pode ser vazio.");
    }

    const item = {
      id: this._nextId++,
      title: title.trim(),
    };

    this.items.push(item);
    return item;
  }

  getItems() {
    return [...this.items];
  }
}
