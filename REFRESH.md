# 📒 Рефрешер з Web Programming (JavaScript)

---

## 1) Values and Variables
- **Values** — дані: `42`, `"Hello"`, `true`, `{}`, `[]`.
- **Variables** — "контейнери" для зберігання значень.

```js
let age = 25;      // змінна (можна перевизначати)
const name = "Anna"; // константа
var oldWay = "deprecated"; // історичний варіант
```

---

## 2) Data Types

### Примітивні (immutable)
- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `bigint`
- `symbol`

### Reference types (object-based)
- `object` (включає масиви, функції, дати, карти, множини тощо)

```js
let str = "Hello";
let num = 100;
let flag = true;
let empty = null;
let notDefined;
let id = Symbol("id");
let person = { name: "Olga", age: 28 };
```

---

## 3) Basic Syntax: Expression, Declaration, Assignment

- **Expression (вираз)** — обчислюється до значення:
  ```js
  3 + 4   // 7
  "Hi"    // "Hi"
  ```

- **Declaration (оголошення)** — створює змінну:
  ```js
  let x;
  const y = 5;
  ```

- **Assignment (присвоєння)** — задає значення:
  ```js
  let z;
  z = 10;
  ```

**🔑 Відмінності:**
- Declaration = створюю контейнер
- Assignment = кладу значення
- Expression = обчислюю

---

## 4) Особливості var

- **Function scope** — `var` доступна в усій функції, ігнорує `{}` блоки.
  ```js
  if (true) {
    var x = 10;
  }
  console.log(x); // 10
  ```

- **Hoisting** — оголошення підтягується на початок.
  ```js
  console.log(a); // undefined
  var a = 5;
  ```

- **Повторне оголошення допустиме:**
  ```js
  var test = 1;
  var test = 2; // допустимо, але небажано
  ```

👉 Використовуй `let` та `const`.

---

## 5) JS Operators

- **Арифметичні**: `+`, `-`, `*`, `/`, `%`, `**`
- **Присвоєння**: `=`, `+=`, `-=`, `*=`, `/=`
- **Порівняння**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Логічні**: `&&`, `||`, `!`, `??`
- **Інші**: `typeof`, `instanceof`, `?:`
- **Інкремент/Декремент**:
  - `++` збільшує значення на 1
  - `--` зменшує значення на 1

```js
let a = 10;
let b = 3;
console.log(a % b);           // 1
console.log(a === 10 && b <5) // true

let c = 5;
c++; // постфікс: спочатку використовує значення, потім збільшує
++c; // префікс: спочатку збільшує, потім повертає
console.log(c); // 7
```

---

## 6) Control Flow

### if / else
```js
let score = 85;
if (score > 90) {
  console.log("Excellent");
} else if (score > 70) {
  console.log("Good");
} else {
  console.log("Try again");
}
```

### switch
```js
let color = "red";
switch (color) {
  case "red": console.log("Stop"); break;
  case "green": console.log("Go"); break;
  default: console.log("Unknown color");
}
```

### Loops

#### for
```js
for (let i = 0; i < 5; i++) {
  if (i === 3) break;     // вихід з циклу повністю
  console.log(i);
}
// Виведе: 0,1,2
```

#### while
```js
let j = 0;
while (j < 5) {
  j++;
  if (j % 2 === 0) continue; // пропускає ітерацію
  console.log(j);
}
// Виведе непарні числа: 1,3,5
```

#### do...while
> Спочатку виконується тіло, потім перевіряється умова
```js
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 3);
// Виведе: 0,1,2
```

---

## 7) Falsy і Truthy значення

### Falsy (усього 8):
1. false
2. 0
3. -0
4. 0n (BigInt нуль)
5. "" (порожній рядок)
6. null
7. undefined
8. NaN

👉 Все інше — **truthy**

```js
if ("hello") console.log("truthy!"); // виконається
if (0) console.log("falsy!");        // не виконається
```

---
