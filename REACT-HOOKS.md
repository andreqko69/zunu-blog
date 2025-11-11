# Лекція: React Хуки

## Вступ

React-хуки (Hooks) були вперше представлені у версії React 16.8.
Вони дозволяють використовувати стан (state) та інші можливості React без написання класових компонентів.

Раніше, щоб працювати зі станом компонента або з життєвим циклом, потрібно було створювати **class component**.
Тепер усе це можливо реалізувати за допомогою **функціональних компонентів**.

---

## Чому були створені хуки?

1. **Повторне використання логіки стану.**
   У класових компонентах було складно ділитися логікою між ними без HOC або render props.

2. **Зменшення складності коду.**
   Класи часто важчі для розуміння, тестування та оптимізації.

3. **Краща організація коду.**
   Логіку можна розділяти на незалежні функції (хуки), замість монолітних класів.

---

## Правила хуків

Хуки потрібно використовувати правильно:

1. **Викликай хуки лише на верхньому рівні функції.**
   Не можна викликати хуки всередині циклів, умов або вкладених функцій.

2. **Викликай хуки лише у React-функціональних компонентах або власних хуках.**
   Не можна викликати хуки поза компонентом (наприклад, у звичайному JS-файлі).

---

## Основні хуки React

### 1. useState

Хук `useState` дозволяє додати стан у функціональний компонент.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Ви натиснули {count} разів</p>
      <button onClick={() => setCount(count + 1)}>Додати</button>
    </div>
  );
}
```

**Що відбувається:**
- `useState(0)` створює змінну `count` зі значенням `0` і функцію `setCount`, яка оновлює стан.
- При кожному оновленні React перемальовує компонент.

---

### 2. useEffect

Хук `useEffect` використовується для побічних ефектів: запитів до API, роботи з DOM або таймерів.

```jsx
import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []); // Порожній масив означає, що ефект виконується 1 раз — після монтування

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

Ефект може також повертати **функцію очищення**, яка виконується під час демонтування:

```jsx
useEffect(() => {
  const timer = setInterval(() => console.log("Тік..."), 1000);
  return () => clearInterval(timer);
}, []);
```

---

### 3. useContext

Використовується для доступу до контексту без `Context.Consumer`.

```jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Header() {
  const theme = useContext(ThemeContext);
  return <h1 style={{ color: theme.text }}>Вітаю у темі: {theme.name}</h1>;
}
```

---

### 4. useRef

Зберігає **мутабельне** посилання, яке не викликає ререндер при зміні.

```jsx
import { useRef, useEffect } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} placeholder="Автофокус при завантаженні" />;
}
```

---

### 5. useMemo

Оптимізує важкі обчислення — зберігає результат між реренедерами.

```jsx
import { useMemo, useState } from "react";

function FactorialCalculator() {
  const [number, setNumber] = useState(5);

  const factorial = useMemo(() => {
    console.log("Обчислення факторіала...");
    return number <= 1 ? 1 : number * factorial(number - 1);
  }, [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(Number(e.target.value))}
      />
      <p>Факторіал: {factorial}</p>
    </div>
  );
}
```

---

### 6. useCallback

Повертає мемоізовану функцію, щоб уникнути її створення при кожному ререндері.
Корисно при передачі функцій у дочірні компоненти.

```jsx
import { useState, useCallback } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}
```

---

### 7. useReducer

Альтернатива `useState` для складних логік оновлення стану.

```jsx
import { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Лічильник: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
```

---

### 8. useLayoutEffect

Працює як `useEffect`, але викликається **до** відображення результату на екрані.
Використовується для вимірювання елементів перед рендером або синхронних оновлень DOM.

---

### 9. useImperativeHandle

Дозволяє контролювати, що саме передає `ref` при використанні `forwardRef`.

```jsx
import { useImperativeHandle, useRef, forwardRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }));

  return <input ref={inputRef} />;
});

function Parent() {
  const inputRef = useRef();
  return (
    <>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Фокус!</button>
    </>
  );
}
```

---

## Створення власних хуків

Власний хук — це функція, що починається з `use` та може використовувати інші хуки.

```jsx
import { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

function WidthDisplay() {
  const width = useWindowWidth();
  return <p>Ширина вікна: {width}px</p>;
}
```

---

## Висновок

Хуки — потужна й елегантна система, що відкрила нову еру у React‑розробці.
Вони дозволяють:

- Використовувати стан без класів
- Перевикористовувати логіку компонентів
- Спрощувати структуру коду
- Покращувати читабельність і тестованість

---

### Корисні посилання

- [Офіційна документація React Hooks](https://react.dev/reference/react)
- [React Beta Docs (новіша документація)](https://beta.react.dev)

---

**Автор лекції:**
T3 Chat (AI-асистент на базі GPT‑5)
Дата: 11 листопада 2025 року
