import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  const handleDelete = () => {
    if (window.confirm('Ви впевнені?')) {
      onDelete(todo.id);
    }
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <div className="todo-content">
        <span className="todo-text">{todo.text}</span>
        <span className="todo-date">{todo.createdAt}</span>
      </div>
      <button className="delete-btn" onClick={handleDelete} title="Видалити">
        🗑️
      </button>
    </li>
  );
}

export default TodoItem;
