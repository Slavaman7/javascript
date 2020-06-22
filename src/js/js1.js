'use strict';

// let arr = ['plum.jpg','apple.bmp','pear.png'];

// console.log(arr[0]);

// alert('Hello World!');

// let answer = confirm('Are you here?');

// console.log(answer); /* после нажатия выдаст True или Faults */


let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
// let answer = +prompt('Are you already 18?', 'Yes');
// console.log('arr' + +' - object');  '+' перед prompt и перед ' - object' превращает строку в число

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

console.log('money: ' + appData.budget);
console.log('time: ' + time);

/* appData = money;
timeData = time;
optionalExpenses = false;
income = false;
savings = false; */

let e1 = prompt('Введите обязательную статью расходов в этом месяце', '');
let e2 = prompt('Во сколько обойдется?', '');

console.log("expenses: " + e1);
console.log('expenses2: ' + e2);
console.log(appData.budget/30);
alert('Бюджет на 1 день: ' + appData.budget/30);

// console.log(typeof(null));

// console.log('arr' + ' - object');

/* let incr = 10,
    decr = 10; */

// incr++; // увеличиваем переменную на 1
// decr--; // уменьшаем переменную на 1
// incr++; // увеличиваем переменную на 1
/* то же самое что и 
console.log(++incr);
console.log(--decr); */
// && - оператор и
// || - оператор или
/* console.log(incr);
console.log(decr); */