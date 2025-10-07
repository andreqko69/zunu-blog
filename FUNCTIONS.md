# 💡 Лекція: Функції в JavaScript

> **Мета:** Розібратись, що таке функції в JavaScript, як їх оголошувати, викликати, передавати параметри та використовувати нові можливості сучасного JS.

---

## 🧩 Зміст

1. [Що таке функція](#-що-таке-функція)
2. [Способи оголошення функцій](#-способи-оголошення-функцій)
   - Function Declaration
   - Function Expression
   - Arrow Function
3. [Параметри та аргументи](#-параметри-та-аргументи)
4. [Повернення значень](#-повернення-значень)
5. [Стрілкові функції (`=>`)](#-стрілкові-функції-)
6. [`this` у звичайних і стрілкових функціях](#-this-у-звичайних-і-стрілкових-функціях)
7. [Параметри за замовчуванням і Rest/Spread](#-параметри-за-замовчуванням-і-restspread)
8. [Анонімні, колбек та самовикличні функції (IIFE)](#-анонімні-колбек-та-самовикличні-функції-iife)
9. [Висновки](#-висновки)

---

## 🔹 Що таке функція

**Функція** — це блок коду, який виконує певну дію та може бути повторно використаний.

```js
function greet() {
  console.log("Привіт, світ!");
}

greet(); // Виклик функції
```

- Функція допомагає **уникати дублювання коду**
- Має власну **область видимості (scope)**
- Може **приймати дані (параметри)** та **повертати результат**

---

## 🔹 Способи оголошення функцій

### 1. Function Declaration

```js
function sayHello(name) {
  console.log("Привіт, " + name + "!");
}

sayHello("Олег");
```

✅ Може бути викликана **до оголошення** завдяки *hoisting*.

---

### 2. Function Expression

```js
const sayHi = function (name) {
  console.log("Привіт, " + name + "!");
};

sayHi("Анна");
```

🧠 Не піднімається (не hoisted) — її можна викликати тільки **після** оголошення.

---

### 3. Arrow Function (ES6+)

```js
const multiply = (a, b) => a * b;

console.log(multiply(2, 3)); // 6
```

- Має **коротший синтаксис**
- Автоматично **повертає** результат, якщо тіло — один рядок

---

## 🔹 Параметри та аргументи

Функції можуть приймати необмежену кількість параметрів.

```js
function sum(a, b) {
  return a + b;
}

console.log(sum(5, 10)); // 15
```

🧩 **Аргументи** — це конкретні значення, які передаються у функцію при виклику.

---

## 🔹 Повернення значень

Оператор `return` завершує виконання функції та повертає результат.

```js
function square(x) {
  return x * x;
}

const result = square(4);
console.log(result); // 16
```

Без `return` функція повертає `undefined`.

---

## 🔹 Стрілкові функції (`=>`)

```js
// Звичайна функція
function double(x) {
  return x * 2;
}

// Стрілкова
const doubleArrow = (x) => x * 2;

console.log(doubleArrow(5)); // 10
```

- Не мають власного `this`
- Не можуть бути використані як конструктори (`new`)

---

## 🔹 `this` у звичайних і стрілкових функціях

```js
const user = {
  name: "Іван",
  showName: function () {
    console.log(this.name);
  },
  showNameArrow: () => console.log(this.name),
};

user.showName(); // "Іван"
user.showNameArrow(); // undefined (this у стрілкових не прив’язаний)
```

🧠 `this` у стрілкових функціях береться з **зовнішнього контексту**.

---

## 🔹 Параметри за замовчуванням і Rest/Spread

### Параметри за замовчуванням:
```js
function greet(name = "Гість") {
  console.log("Привіт, " + name);
}

greet(); // "Привіт, Гість"
```

### Rest-параметри (`...`)
```js
function sumAll(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sumAll(1, 2, 3, 4)); // 10
```

### Spread-оператор у виклику:
```js
const nums = [1, 2, 3];
console.log(Math.max(...nums)); // 3
```

---

## 🔹 Анонімні, колбек та самовикличні функції (IIFE)

- **Анонімні функції** — без імені:
  ```js
  setTimeout(function () {
    console.log("Через 2 секунди...");
  }, 2000);
  ```

- **Колбек-функції** — передаються як аргументи:
  ```js
  function processData(value, callback) {
    callback(value * 2);
  }

  processData(5, (result) => console.log(result)); // 10
  ```

- **IIFE (Immediately Invoked Function Expression)**:
  ```js
  (function () {
    console.log("Виконано одразу!");
  })();
  ```

---

## 🧠 Висновки

- ✅ Функції — основа повторного використання коду
- ✅ Є три основні способи створення функцій
- ✅ Стрілкові функції зручні, але без власного `this`
- ✅ Можна використовувати параметри за замовчуванням, Rest і Spread
- ✅ IIFE та колбеки — важливі патерни у JS

---

📘 **Рекомендовано почитати:**
- [MDN — Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [MDN — Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
