import React from 'react';

function TodoActions({ onClearCompleted, onDeleteAll }) {
  return (
    <div className="actions">
      <button className="clear-btn" onClick={onClearCompleted}>
        Очистити виконані
      </button>
      <button className="delete-all-btn" onClick={onDeleteAll}>
        Видалити все
      </button>
    </div>
  );
}

export default TodoActions;
