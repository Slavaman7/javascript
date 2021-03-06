let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money =='' || money == null) { /* на тот случай если чел-ек введёт пустую строку или отменит, ему следующий вопрос задастся снова: */
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}
start(); /* активизирует данную функцию */

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true /* если будет стоять false, то параметр не будет активирован */
};

function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
	
		if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
			&& a != '' && b != '' && a.length < 50) {
			console.log('done');
			appData.expenses[a] = b;
		} else {
			console.log ("bad result");
			i--; /* тоже самое, что и i - 1 */
		}
	};
}
chooseExpenses(); /* активизирует данную функцию */


appData.moneyPerDay = (appData.budget / 30).toFixed(); /* toFixed округлит значение */

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
	console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка");
} else {
	console.log('Произошла ошибка')
}

function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова суммы накоплений?"),
			percent = +prompt("Под какой процент?");

		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
	}
}
checkSavings();