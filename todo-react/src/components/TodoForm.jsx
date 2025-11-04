import React from 'react';
import TodoInput from './TodoInput';

function TodoForm({ onAdd }) {
  return (
    <TodoInput onAddTodo={onAdd} />
  );
}

export default TodoForm;
