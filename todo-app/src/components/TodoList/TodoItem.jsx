import React from "react";

export default React.memo(function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div className="flex justify-between items-center gap-3 rounded p-2 cursor-pointer  hover:bg-gray-500" onClick={() => onToggle(todo.id)}>
      <div className={`${todo.completed ? "line-through" : ""}`}>{todo.text}</div>
      <button
        className="btn btn-error btn-sm"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(todo.id);
        }}
      >
        X
      </button>
    </div>
  );
});
