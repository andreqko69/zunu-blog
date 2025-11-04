// Todo App - Vanilla JavaScript Implementation

class TodoApp {
  constructor() {
    this.todos = this.loadFromLocalStorage();
    this.currentFilter = "all";
    this.init();
  }

  init() {
    this.cacheElements();
    this.bindEvents();
    this.render();
  }

  cacheElements() {
    this.todoInput = document.getElementById("todoInput");
    this.addBtn = document.getElementById("addBtn");
    this.todoList = document.getElementById("todoList");
    this.totalCount = document.getElementById("totalCount");
    this.activeCount = document.getElementById("activeCount");
    this.completedCount = document.getElementById("completedCount");
    this.clearBtn = document.getElementById("clearBtn");
    this.filterBtns = document.querySelectorAll(".filter-btn");
  }

  bindEvents() {
    this.addBtn.addEventListener("click", () => this.addTodo());
    this.todoInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.addTodo();
    });
    this.clearBtn.addEventListener("click", () => this.clearCompleted());

    this.filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => this.setFilter(e.target.dataset.filter));
    });
  }

  addTodo() {
    const text = this.todoInput.value.trim();

    if (!text) {
      alert("Введіть текст справи");
      return;
    }

    const todo = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date().toLocaleString("uk-UA"),
    };

    this.todos.push(todo);
    this.todoInput.value = "";
    this.todoInput.focus();
    this.saveToLocalStorage();
    this.render();
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.saveToLocalStorage();
    this.render();
  }

  toggleTodo(id) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.saveToLocalStorage();
      this.render();
    }
  }

  clearCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
    this.saveToLocalStorage();
    this.render();
  }

  setFilter(filter) {
    this.currentFilter = filter;

    this.filterBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.filter === filter);
    });

    this.render();
  }

  getFilteredTodos() {
    switch (this.currentFilter) {
      case "active":
        return this.todos.filter((todo) => !todo.completed);
      case "completed":
        return this.todos.filter((todo) => todo.completed);
      case "all":
      default:
        return this.todos;
    }
  }

  updateStats() {
    const total = this.todos.length;
    const completed = this.todos.filter((todo) => todo.completed).length;
    const active = total - completed;

    this.totalCount.textContent = total;
    this.activeCount.textContent = active;
    this.completedCount.textContent = completed;
  }

  render() {
    this.updateStats();
    this.renderTodos();
  }

  renderTodos() {
    const filtered = this.getFilteredTodos();

    if (filtered.length === 0) {
      this.todoList.innerHTML = '<li class="empty-state">Немає справ</li>';
      return;
    }

    this.todoList.innerHTML = filtered
      .map(
        (todo) => `
      <li class="todo-item ${todo.completed ? "completed" : ""}">
        <input
          type="checkbox"
          class="todo-checkbox"
          ${todo.completed ? "checked" : ""}
          data-id="${todo.id}"
        >
        <div class="todo-content">
          <span class="todo-text">${this.escapeHtml(todo.text)}</span>
          <span class="todo-date">${todo.createdAt}</span>
        </div>
        <button class="delete-btn" data-id="${todo.id}" aria-label="Видалити">
          🗑️
        </button>
      </li>
    `,
      )
      .join("");

    this.bindTodoEvents();
  }

  bindTodoEvents() {
    const checkboxes = document.querySelectorAll(".todo-checkbox");
    const deleteButtons = document.querySelectorAll(".delete-btn");

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", (e) => {
        this.toggleTodo(parseInt(e.target.dataset.id));
      });
    });

    deleteButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        if (confirm("Ви впевнені?")) {
          this.deleteTodo(parseInt(e.target.dataset.id));
        }
      });
    });
  }

  saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  loadFromLocalStorage() {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  }

  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
}

// Ініціалізація застосунку коли DOM готовий
document.addEventListener("DOMContentLoaded", () => {
  new TodoApp();
});
