# 💡 Лекція: Нові оператори в JavaScript (ES2020+)

> **Мета:** Ознайомитися з новими корисними операторами JavaScript, які спрощують синтаксис, роблять код більш безпечним і зменшують потребу в додаткових перевірках.

---

## 🧩 Зміст

1. [Оператор нульового злиття (`??`)](#-оператор-нульового-злиття-)
2. [Опціональне ланцюжіння (`?.`)](#-опціональне-ланцюжіння-)
3. [Логічні оператори присвоєння (`||=`, `&&=`, `??=`)](#-логічні-оператори-присвоєння-)
4. [Приклади використання](#-приклади-використання)
5. [Висновки](#-висновки)

---

## 🔹 Оператор нульового злиття (`??`)

Оператор **`??` (nullish coalescing)** перевіряє значення **на `null` або `undefined`**. Якщо операнд зліва не є жодним з цих значень — він повертається; інакше — використовується операнд справа.

```js
const userName = null ?? "Guest";
console.log(userName); // "Guest"

const age = 0 ?? 18;
console.log(age); // 0, бо 0 не є null або undefined
```

🧠 **Відмінність від `||`**:
- `||` повертає праве значення, якщо ліве — *falsy* (`0`, `''`, `false`, `null`, `undefined`, `NaN`);
- `??` реагує **лише** на `null` або `undefined`.

---

## 🔹 Опціональне ланцюжіння (`?.`)

Опціональне ланцюжіння дозволяє **безпечний доступ до вкладених властивостей** без необхідності перевіряти, існують вони чи ні.

```js
const user = {
  profile: {
    name: "Alex",
  },
};

console.log(user?.profile?.name); // "Alex"
console.log(user?.contact?.email); // undefined (без помилки!)
```

Також може використовуватись із викликом функцій чи елементів масиву:

```js
user.getName?.(); // Викликає тільки якщо функція існує
user.friends?.[0]; // Отримає перший елемент, якщо friends існує
```

---

## 🔹 Логічні оператори присвоєння (`||=`, `&&=`, `??=`)

Ці оператори поєднують логічні оператори з присвоєнням. Вони дозволяють компактно оновлювати змінну лише за певних умов.

### `||=` — присвоєння за замовчуванням (якщо значення "falsy")
```js
let name = "";
name ||= "Guest";
console.log(name); // "Guest"
```

### `&&=` — присвоєння, якщо значення *truthy*
```js
let isLogged = true;
isLogged &&= "User is active";
console.log(isLogged); // "User is active"
```

### `??=` — присвоєння, якщо значення **null або undefined**
```js
let settings = null;
settings ??= { theme: "dark" };
console.log(settings); // { theme: 'dark' }
```

---

## 🧠 Приклади використання

```js
// Без ?? та ?.
const theme = user && user.settings && user.settings.theme
  ? user.settings.theme
  : "light";

// З новими операторами
const theme2 = user?.settings?.theme ?? "light";
console.log(theme2);
```

---

## 🧠 Висновки

- ✅ `??` — безпечна альтернатива `||` для роботи з `null`/`undefined`
- ✅ `?.` — зручний спосіб уникнути помилок при доступі до вкладених властивостей
- ✅ `||=`, `&&=`, `??=` — роблять логіку присвоєння більш компактною

> Нові оператори підвищують **зручність, надійність і читабельність** коду.

---

📘 **Рекомендовано почитати:**
- [MDN Web Docs — Nullish Coalescing Operator (`??`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- [MDN — Optional Chaining (`?.`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [MDN — Logical Assignment Operators (`||=`, `&&=`, `??=`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)
