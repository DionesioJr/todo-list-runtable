# To-Do List

Aplicação estática (HTML/CSS/JS puro, sem dependências) para gerenciar uma lista de itens de tarefa.

## Como rodar

Abra `index.html` diretamente no navegador. Não há build nem servidor necessário.

## Funcionalidade: marcar item como concluído

- Cada item da lista tem um checkbox.
- Marcar o checkbox altera o item de **pendente** para **concluído** (aplica um estilo riscado).
- Desmarcar o checkbox volta o item para **pendente**.
- O estado (`completed`) é persistido no `localStorage` do navegador a cada alteração, então recarregar a página mantém os itens e seus estados.

## Verificação manual dos critérios de aceite

1. Adicionar um item pelo formulário — ele começa pendente (sem checkbox marcado).
2. Marcar o checkbox — o item fica concluído (texto riscado).
3. Desmarcar o checkbox — o item volta a pendente.
4. Recarregar a página (F5) — o estado (pendente/concluído) de cada item permanece o mesmo de antes do reload.
