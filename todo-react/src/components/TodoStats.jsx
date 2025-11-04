import React from 'react';

function TodoStats({ total, completed, active }) {
  return (
    <div className="stats">
      <p>Всього: <span>{total}</span></p>
      <p>Активних: <span>{active}</span></p>
      <p>Виконаних: <span>{completed}</span></p>
    </div>
  );
}

export default TodoStats;
