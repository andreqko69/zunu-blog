import { useState } from "react";
import TodoItem from "./TodoItem";
import { useEffect } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { useRef } from "react";

const setTodosToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const inputEl = useRef();

  const handleAddTodo = () => {
    const newTodos = [...todos, { id: Date.now(), text: input, completed: false }];
    setTodos(newTodos);
    setInput("");

    setTodosToLocalStorage(todos);
  };

  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }

    const storedTodos = JSON.parse(localStorage.getItem("todos")) ?? [];
    setTodos(storedTodos);
  }, []);

  const handleDeleteTodo = useCallback(
    (id) => {
      const filteredTodos = todos.filter((todo) => todo.id !== id);

      setTodos(filteredTodos);
    },
    [todos],
  );

  const handleToggleTodo = useCallback(
    (id) => {
      const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));

      setTodos(updatedTodos);
    },
    [todos],
  );

  const handleSubmit = () => {
    if (!inputEl.current) return;

    console.log("inputEl.current.value", inputEl.current.value);
  };

  return (
    <div className="card  bg-base-100 w-96 shadow-sm card-body max-h-[500px]">
      <h1 className="card-title">Todo List</h1>
      <div className="flex items-center gap-3">
        <input ref={inputEl} className="input" type="text" placeholder="Add a todo" value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="btn" onClick={handleAddTodo} disabled={input.trim().length === 0}>
          Add
        </button>
      </div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} onToggle={handleToggleTodo} />
      ))}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
