# 🧭 Лекція: Classes, Prototypes та ключове слово `this` у класах

## 🎯 Мета
- Зрозуміти, як працюють **класи** в JavaScript.
- Навчитися використовувати **прототипи** для розширення функціональності.
- Розібратись у поведінці **ключового слова `this`** у класах.
- Освоїти використання **статичних методів**.
- Навчитись розширювати можливості вбудованих об'єктів через **прототипи**.

---

## 🏗️ 1. Класи в JavaScript

Класи — це *синтаксичний цукор* над прототипно-орієнтованою моделлю JavaScript.
Вони спрощують створення об’єктів та наслідування.

```js
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const user1 = new User("Alice", 25);
user1.sayHello(); // Hello, my name is Alice
```

---

## ⚙️ 2. Прототипи

Кожен об’єкт у JavaScript має внутрішнє посилання на свій **прототип** (`[[Prototype]]`).

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hi, I'm ${this.name}`);
};

const person1 = new Person("Bob");
person1.sayHello(); // Hi, I'm Bob
```

> **Важливо:** Класи в JavaScript побудовані поверх прототипів.

---

## 🧬 3. Наслідування класів

```js
class Animal {
  speak() {
    console.log("Some generic sound...");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.speak(); // Woof!
```

---

## 🧭 4. Ключове слово `this`

`this` — це контекст, що вказує на об’єкт, який викликає метод.

```js
class Counter {
  constructor() {
    this.value = 0;
  }

  increment() {
    this.value++;
    console.log(this.value);
  }
}

const counter = new Counter();
counter.increment(); // 1
```

---

## 🧩 5. Приватні поля та методи

```js
class Account {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new Account();
acc.deposit(100);
console.log(acc.getBalance()); // 100
```

---

## 🧰 6. Зв’язок між класами та прототипами

```js
console.log(User.prototype.__proto__ === Object.prototype); // true
```

![Prototype chain](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes/js-prototype-chain.svg)

---

## ⚡ 7. Статичні методи

Статичні методи викликаються **на класі**, а не на його екземплярах.

```js
class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

console.log(MathUtils.add(5, 3)); // 8
```

> Викликаються як `ClassName.method()`, а не `instance.method()`.

### 🧩 Наслідування
```js
class Animal {
  static kingdom() {
    return "Animalia";
  }
}

class Dog extends Animal {}

console.log(Dog.kingdom()); // Animalia
```

---

## 🧮 8. Розширення вбудованих прототипів

JavaScript дозволяє вручну додавати нові методи до прототипу вбудованих об'єктів, як-от `Array`, `String`, тощо.
Це **потужно**, але може **спричинити конфлікти**, якщо інші бібліотеки використовують ті самі імена.

### 🔹 Приклад: додаємо метод `.sum()` до всіх масивів

```js
Array.prototype.sum = function () {
  return this.reduce((total, num) => total + num, 0);
};

const nums = [1, 2, 3, 4, 5];
console.log(nums.sum()); // 15
```

🔸 Тут:

- Ми додаємо метод `sum` до `Array.prototype`.
- Тепер **будь-який масив** має доступ до методу `.sum()`.

```js
console.log([10, 20, 30].sum()); // 60
```

> ⚠️ **Увага:** Розширюйте вбудовані прототипи *обережно* — це може спричинити конфлікти у великих проєктах або бібліотеках.

---

## 📚 9. Підсумок

| Тема | Основна ідея |
|------|---------------|
| **Class** | Спрощення створення конструкторів і прототипів |
| **Prototype** | Об’єкти наслідують властивості один від одного |
| **this** | Контекст виклику методу |
| **extends / super** | Наслідування між класами |
| **#privateField** | Інкапсуляція даних |
| **static** | Виклик методу напряму від класу |
| **Array.prototype.sum()** | Приклад розширення вбудованого об’єкта |

---

## 🧩 10. Завдання для практики

1. Створіть клас `Student` з властивостями `name`, `grade`, і методом `displayInfo()`.
2. Створіть підклас `GraduateStudent`, який додає поле `thesisTitle` і перевизначає `displayInfo()`.
3. Реалізуйте приватне поле для кількості відвідувань і метод, який його збільшує.
4. Продемонструйте різні варіанти втрати контексту `this` та їх вирішення.
5. Додайте до `Student` **статичний метод** `compareGrades(a, b)`.
6. Створіть власний метод `avg()` для `Array.prototype`, який обчислює середнє значення чисел.

---

## 📎 Ресурси

- [MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [MDN: Static methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
- [MDN: Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [MDN: Extending built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)
- [JavaScript.info – Classes](https://javascript.info/class)
