# 🧩 Завдання з JavaScript

---

## ✅ Завдання 1

**Умова:**
Дано функцію, яка приймає масив чисел або стрічок.

**Результат:**
Вивести у консоль масив **унікальних значень** початкового масиву.

**Приклад:**
`[2, 3, 1, 3, 3, 7] => [2, 3, 1, 7]`

```javascript
function unicFn(initialArray) {
  // Write code here
}

// 🔹 Приклади викликів:
unicFn([2, 3, 1, 3, 3, 7]); // => [2, 3, 1, 7]
unicFn(["a", "b", "a", "c"]); // => ["a", "b", "c"]
```

---

## ✅ Завдання 2

**Умова:**
Дано функцію, яка приймає масив чисел.

**Результат:**
Вивести у консоль `"YES"`, якщо всі числа у масиві **парні**, та `"NO"` — в іншому випадку.

**Приклад:**
`[1, 2, 3, 9] => "NO"`
`[2, 4, 6] => "YES"`

```javascript
function isEvenArray(initialArray) {
  // Write code here
}

// 🔹 Приклади викликів:
isEvenArray([1, 2, 3, 9]); // => "NO"
isEvenArray([2, 4, 6]); // => "YES"
```

---

## ✅ Завдання 3

**Умова:**
Дано функцію, яка приймає масив елементів будь-яких типів.

**Результат:**
Вивести у консоль масив, який містить лише **стрічки** з початкового масиву.

**Приклад:**
`[2, "string", 3, "", "test"] => ["string", "test"]`

```javascript
function filterArray(initialArray) {
  // Write code here
}

// 🔹 Приклади викликів:
filterArray([2, "string", 3, "", "test"]); // => ["string", "test"]
filterArray(["hi", null, 5, "bye"]); // => ["hi", "bye"]
```

---

## ✅ Завдання 4

**Умова:**
Дано функцію, що приймає об’єкт типу:
`{ [name]: { age: number, city: string } }`

**Результат:**
Вивести у консоль масив із **іменами людей**, які живуть у місті `"London"` та **старше 18 років**.

**Приклад:**
`{ Max: { age: 23, city: "London" }, Mike: { age: 20, city: "NY" } } => ["Max"]`

```javascript
function findUser(initialObject) {
  // Write code here
}

// 🔹 Приклади викликів:
findUser({
  Max: { age: 23, city: "London" },
  Mike: { age: 20, city: "NY" },
  Anna: { age: 17, city: "London" },
}); // => ["Max"]
```

---

## ✅ Завдання 5

**Умова:**
Дано функцію, яка приймає **три параметри**:
1. Масив об’єктів `[{}, {}, ...]`
2. Назву поля об’єкта `(string)`
3. Значення `(string | number)`

**Результат:**
Вивести у консоль **новий масив**, з якого видалено всі об’єкти, в яких `keyName` дорівнює `value`.

**Приклад:**
`removeObj([{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }], "age", 2) => [ { age: 1 }, { year: 2 } ]`

```javascript
function removeObj(arrayOfObj, keyName, value) {
  // Write code here
}

// 🔹 Приклади викликів:
const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];

removeObj(arr, "age", 2); // => [{ age: 1 }, { year: 2 }]
removeObj(arr, "year", 2); // => [{ age: 1 }, { age: 2 }, { age: 2 }]
```

---
