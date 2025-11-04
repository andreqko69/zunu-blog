import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";
import TodoFilter from "./components/TodoFilter";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  // Завантажити todos з localStorage при монтуванні компонента
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      try {
        setTodos(JSON.parse(saved));
      } catch (error) {
        console.error("Помилка при завантаженні todos:", error);
      }
    }
  }, []);

  // Зберегти todos у localStorage при кожній зміні
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Додати новий todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date().toLocaleString("uk-UA"),
    };
    setTodos([...todos, newTodo]);
  };

  // Залишити/роззаліш todo
  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  // Видалити todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Видалити всі виконані todos
  const clearCompleted = () => {
    const count = todos.filter((t) => t.completed).length;
    if (count === 0) {
      alert("Немає виконаних справ!");
      return;
    }
    if (window.confirm(`Видалити ${count} виконаних справ?`)) {
      setTodos(todos.filter((todo) => !todo.completed));
    }
  };

  // Видалити все
  const deleteAll = () => {
    if (todos.length === 0) {
      alert("Список вже порожній!");
      return;
    }
    if (window.confirm("Видалити всі справи? Цю дію не можна скасувати!")) {
      setTodos([]);
    }
  };

  // Отримати відфільтровані todos
  const getFilteredTodos = () => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div className="app">
      <div className="todo-app">
        <h1>📝 Мої справи</h1>
        <p className="subtitle">Todo App з React</p>

        <TodoForm onAdd={addTodo} />

        <TodoFilter currentFilter={filter} onFilterChange={setFilter} />

        <TodoStats total={todos.length} completed={todos.filter((t) => t.completed).length} active={todos.filter((t) => !t.completed).length} />

        <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />

        <div className="actions">
          <button className="clear-btn" onClick={clearCompleted}>
            Очистити виконані
          </button>
          <button className="delete-all-btn" onClick={deleteAll}>
            Видалити все
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
