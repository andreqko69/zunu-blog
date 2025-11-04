import React, { useState } from 'react';

function TodoInput({ onAddTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAddTodo(input);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form className="input-section" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Введіть нову справу..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        autoComplete="off"
      />
      <button type="submit" className="add-btn">
        Додати
      </button>
    </form>
  );
}

export default TodoInput;
