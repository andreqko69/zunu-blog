# Завдання

## Завдання 1

**Дано:**
Функція, яка приймає значення, яке може бути будь-яким типом даних
Приклади вхідних значень: `"302"`, `null`, `128`, `60`

**Результат:**
- Вивести у консоль числа, які є степенем двійки та не більші за задане значення
- Якщо значення не є числом — вивести помилку про некоректний тип

**Приклади:**
- `60` → `1, 2, 4, 8, 16, 32`
- `64` → `1, 2, 4, 8, 16, 32, 64`
- `"32"` → `"incorrect type"`

**Шаблон коду:**
```javascript
function printPowsOf2(number) {
  // Write code here
}

printPowsOf2("302");
printPowsOf2(null);
printPowsOf2(128);
printPowsOf2(60);
```

---

## Завдання 2

**Дано:**
Масив: `[3, 2, "2", null, 1.5, 9.5, undefined]`

**Результат:**
Вивести у консоль суму чисел у масиві.

**Шаблон коду:**
```javascript
function calculateSumOfArray() {
  const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
  // Write code here
}

calculateSumOfArray();
```

---

## Завдання 3

**Дано:**
Функція, яка приймає назву місяця у форматі:
`"DECEMBER" | "FEBRUARY" | "JULY"` і т.д.

**Результат:**
Вивести у консоль назву пори року, якій відповідає даний місяць:
`"summer" | "autumn" | "winter" | "spring"`

**Приклади викликів:**
```javascript
printSeasonByMonth("SEPTEMBER"); // autumn
printSeasonByMonth("NOVEMBER");  // autumn
printSeasonByMonth("JULY");      // summer
printSeasonByMonth("APRIL");     // spring
```

**Шаблон коду:**
```javascript
function printSeasonByMonth(month) {
  // Write code here
}
```

---

## Завдання 4

**Дано:**
Функція, яка приймає стрічку, що містить мінімум **1 слово і пробіли**.
- Перший та останній символ — не пробіли
- Слова можуть бути розділені не лише одним пробілом

**Результат:**
Вивести у консоль кількість слів у стрічці.

**Приклади:**
- `"Easy string for count"` → `4 слова`
- `"Easy"` → `1 слово`
- `"Some string with a triple   space"` → `6 слів`
- `"Some?  string, with a triple   space"` → `6 слів`

**Шаблон коду:**
```javascript
function calculateWordsInString(string) {
  // Write code here
}

calculateWordsInString("Easy string for count");
calculateWordsInString("Easy");
calculateWordsInString("Some string with a triple   space");
calculateWordsInString("Some?  string, with a triple   space");
```
