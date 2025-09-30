# 📘 Лекція: Об’єкти, масиви та механізми пам’яті в JavaScript (ES2025)

---

## 1. Об’єкти в JavaScript

Об’єкт — це базова структура для збереження даних у форматі **ключ–значення**.

```js
const user = {
  name: "Іван",
  age: 25,
  isAdmin: false,
  greet() {
    console.log(`Привіт, мене звати ${this.name}`);
  },
};
```

### Особливості:
- Доступ до властивостей: `user.name` або `user["name"]`
- Додавання / видалення властивостей:
  ```js
  user.city = "Київ";
  delete user.age;
  ```
- Перебирання:
  ```js
  for (const key in user) {
    console.log(key, user[key]);
  }
  ```
- Сучасні методи:
  ```js
  Object.keys(user);    // ["name", "age", "isAdmin", "greet", "city"]
  Object.values(user);  // ["Іван", 25, false, ƒ, "Київ"]
  Object.entries(user); // [["name", "Іван"], ["age", 25], ...]
  ```

---

## 2. Масиви

Масив — впорядкована структура з числовими індексами.

```js
const numbers = [1, 2, 3, 4];
```

### Методи:
- **Додавання/видалення:**
  ```js
  numbers.push(5);
  numbers.pop();
  numbers.shift();
  numbers.unshift(0);
  ```
- **Пошук і перетворення:**
  ```js
  numbers.includes(3);
  numbers.indexOf(2);
  numbers.join(" - ");
  ```
- **Функціональні методи:**
  ```js
  const doubled = numbers.map(n => n * 2);
  const even = numbers.filter(n => n % 2 === 0);
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  ```
- **Нові методи (ES2023+):**
  - `toSorted()`
  - `toReversed()`
  - `toSpliced()`

---

## 3. Примітиви та обгортки (String, Number, Boolean...)

Примітиви: `string`, `number`, `boolean`, `bigint`, `symbol`, `undefined`, `null`.

Чому є методи у рядків/чисел?

```js
"hello".toUpperCase(); // "HELLO"
```

JS тимчасово створює **об’єкт-обгортку**:
- `String` для рядків
- `Number` для чисел
- `Boolean` для булевих
- `BigInt` і `Symbol` мають свої обгортки

Приклад:
```js
const n = 100;
console.log(n.toFixed(2)); // "100.00"
```

❌ Не варто використовувати `new String()` чи `new Number()` — краще прості примітиви.

---

## 4. Деструктуризація

### Об’єкти:
```js
const person = { name: "Марія", age: 30, city: "Львів" };
const { name, age } = person;
console.log(name, age); // "Марія", 30
```

З дефолтами та перейменуванням:
```js
const { city: hometown = "Київ" } = person;
```

### Масиви:
```js
const colors = ["red", "green", "blue"];
const [first, second] = colors;
```

Пропуски:
```js
const [,, third] = colors; // "blue"
```

### У функціях:
```js
function showUser({ name, age }) {
  console.log(`${name}, ${age} років`);
}
```

---

## 5. Об’єкти і посилання

Об’єкти і масиви передаються **за посиланням**.

```js
const user = { name: "Іван" };
const admin = user;

admin.name = "Марія";
console.log(user.name); // "Марія"
```

### Копіювання:
- **Поверхневе:**
  ```js
  const copy1 = { ...user };
  const copy2 = Object.assign({}, user);
  ```
- **Глибоке:**
  ```js
  const deep = structuredClone(user);
  ```

---

## 6. Garbage Collection (збірка сміття)

JS має **автоматичне управління пам’яттю**:
об’єкти без посилань видаляються збирачем сміття.

### Алгоритм `mark-and-sweep`:
1. Помічаються всі об’єкти, що доступні з коренів (глобальні змінні, стек функцій).
2. Інші видаляються.

```js
let user = { name: "Іван" };
user = null; // стає недосяжним
```

💡 Розробник **не має прямого доступу** до GC.

---

## 7. Оператор `new`

Створює екземпляри функцій-конструкторів або класів.

### Функція-конструктор:
```js
function User(name) {
  this.name = name;
}
const u1 = new User("Марія");
```

### Клас:
```js
class User {
  constructor(name) {
    this.name = name;
  }
}
const u2 = new User("Петро");
```

### Під капотом:
1. Створюється новий об’єкт `{}`
2. Його `[[Prototype]]` вказує на `Constructor.prototype`
3. Конструктор виконується з `this`
4. Повертається об’єкт

---

## 8. Способи ініціалізації об’єктів

### 1. Літерал
```js
const obj = { a: 1, b: 2 };
```

### 2. `new Object()`
```js
const obj = new Object();
obj.a = 1;
```

### 3. Функція-конструктор
```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}
const p = new Point(1,2);
```

### 4. Класи
```js
class Point {
  constructor(x, y) { this.x = x; this.y = y; }
}
const p = new Point(1, 2);
```

### 5. `Object.create()`
Метод створює об’єкт із вказаним **прототипом**.

```js
const personProto = {
  greet() {
    console.log(`Привіт, мене звати ${this.name}`);
  }
};

const user = Object.create(personProto);
user.name = "Олег";
user.greet(); // "Привіт, мене звати Олег"
```

**Особливості:**
- Якщо аргумент `null`, створюється об’єкт без прототипу:
  ```js
  const dict = Object.create(null);
  dict.word = "hello";
  console.log(dict.toString); // undefined
  ```
- Можна одразу визначати властивості:
  ```js
  const u = Object.create(personProto, {
    name: { value: "Іван", writable: true, enumerable: true }
  });
  ```

---

## 9. Способи ініціалізації масивів

### Літерал:
```js
const arr = [1, 2, 3];
```

### Конструктор:
```js
const arr = new Array(3);     // довжина 3, елементи undefined
const arr2 = new Array(1, 2); // [1, 2]
```

### `Array.of()`:
```js
Array.of(3); // [3]
```

### `Array.from()`:
```js
Array.from("hello"); // ["h","e","l","l","o"]
Array.from({ length: 5 }, (_, i) => i*2); // [0,2,4,6,8]
```

---

## 🔑 Підсумки

- **Об’єкти і масиви** передаються за посиланням.
- Копіювання: поверхневе (`{...obj}`) чи глибоке (`structuredClone`).
- **Garbage Collector** керує пам’яттю автоматично.
- **`new`** створює екземпляри класів чи конструкторів.
- **Об’єкти** можна створювати через літерали, конструктори, класи або `Object.create()`.
- **Масиви** створюються через літерал, конструктор, `Array.of`, `Array.from`.
- Примітиви мають методи завдяки тимчасовим **обгорткам (String, Number, Boolean)**.
- **Деструктуризація** спрощує витягування даних.

---
