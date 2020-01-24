let startBtn = document.getElementById('start');
let budgetValue = document.getElementsByClassName('.budget-value');
let dayBudgetValue = document.getElementsByClassName('.daybudget-value');
let levelValue = document.getElementsByClassName('.level-value');
let expensesValue = document.getElementsByClassName('.expenses-value');
let optionalExpensesValue = document.getElementsByClassName('.optionalexpenses-value');
let monthSavingsValue = document.getElementsByClassName('.monthsavings-value');
let yearSavingsValue = document.getElementsByClassName('.yearsavings-value');
let expensesItem = document.getElementsByClassName('.expenses-item');
let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');
let expensesItemBtn = document.getElementsByTagName('button')[0];
let optionalExpensesBtn = document.getElementsByTagName('button')[1];
let countBudgetBtn = document.getElementsByTagName('button')[2];
let chooseIncome = document.querySelector('.choose-income');
let savings = document.querySelector('#savings');
let chooseSum = document.querySelector('.choose-sum');
let choosePercent = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money;
let time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money === '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let firstQuestion = prompt('Введите обязательную статью расходов в этом месяце', '');
            let secondQuestion = prompt('Во сколько обойдется?', '');

            if ((typeof(firstQuestion) === 'string') && (typeof(firstQuestion) != null) && (typeof(secondQuestion) != null)
                && (firstQuestion !== '') && (secondQuestion !== '') && (firstQuestion.length < 50) &&  (secondQuestion.length < 50)) {
                appData.expenses[firstQuestion] = secondQuestion;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ваш бюджет на один день: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay <= 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function () {
        if (appData.savings === true ) {
            let save = +prompt("Какова сумма накоплений?");
            let percent = +prompt("Под какой процент?");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let optExpQuest = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i+1] = optExpQuest;
        }
        console.log(appData.optionalExpenses);
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
        if ((typeof(items) === 'string') && (typeof(items) != null) && (typeof(items) != null)) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt("Может что-то еще?", ''));
            appData.income.sort();
        }

        appData.income.forEach(function (item, i) {
            console.log('Способы доп. заработка: ' +  (i + 1) + ' - ' + item);
        });
    }
};
for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' и имеет значение ' + appData[key]);
}
