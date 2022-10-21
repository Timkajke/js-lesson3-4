// while исполняется пока условие истинно
/* var limit = 3;
var counter = 0;
var number;
while (counter < limit) {
    number = +prompt('Enter number: ');
    console.log(number);
    counter++;
} */

// do while - выполнится хотя бы один раз, вне зависимости от условия
/* var txt = '';
do {
    txt = prompt('Confirm: Yes or No');
} 
while (txt !== 'yes' && txt !== 'no');*/

// Синтаксис цикла for:
/* for (var i = 0, j = 10; i !== j; i++, j--) {
    console.log(i, j);
} */

// Программа генерирует случайное число от 1 до 7.
// Пользователь вводит целое число и если угадывает его,
// то появляется сообщение о победе
// Доп условие, у пользователя 5 попыток

/* var rnd = Math.round(Math.random() * 6) + 1; // случайное число от 1 до 7
console.log(rnd);

var counter = 5;
for (var i = 0; i < counter; i++) {
    var number = +prompt('Enter:'); // если без + писать, то будет в строку переводить
    if (number === rnd) {
        alert('!!!');
        break;
    }
    else {
        alert('...');
    }
} */

// Использование меток
// Пример, внутри  цикла по i находится цикл по j
// при выполнении некоторого условия происходит выход из обоих циклов
/* outer: // метка
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        var input = prompt(`Значение в координатах (${i}, ${j})`);
        if (!input) break outer; // при выполнении условия (не правда, если не строка), мы возвращаемся к метке 
        // брейкаем и возвращаемся к метке
    }
} */

// Вывести ряд простых чисел с использованием метки и оператора continue
/* next: for (var i = 2; i <= 100; i++) {
    for (var j = 2; j < i; j++) {
        if (i % j === 0) continue next; // если простое число, то это число записывается в документ
        // и происходит переход к метке при выполнении условия.
    }
    document.write(i + '<br>');
} */

/*
var iterable = [1, 2, 3, 4, 5, 6];
var sum = 0;
// Императивный подход перебора массива данных
for (var i = 0; i < iterable.length; i++) {
    sum += iterable[i];
}
console.log(`Summa = ${sum}`);

// Декларативный подход перебора массива данных
var sum2 = 0;
for (const value of iterable) { // for of. Этот цикл ТОЛЬКО для массивов. Используется для прохода по массиву
    sum2 += value;
}
console.log(`Summa2 = ${sum2}`);

// Декларативный подход. Вариант 2.
var sum3 = iterable.reduce(
    (previousValue, currentValue) => previousValue + currentValue
)
console.log(`Summa3 = ${sum2}`);
*/

// Пример с for in. Этот цикл ТОЛЬКО для объектов. Используется для прохода по объекту
var student = {
    'name': 'Kirill', 
    'surname': 'Anisimov',
    'age': '17',
    'status': (() => 'student')()
};

for (const key in student) {
    // либо так:
    document.write(`${key}: ${student[key]} <br>`);
    // либо так:
    if (Object.hasOwnProperty.call(student, key)) {
        const element = student[key];    
        document.write(`${key}: ${element} <br>`);   
    }
}