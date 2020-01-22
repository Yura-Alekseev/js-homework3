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
    savings: true
};

function chooseExpenses() {
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
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
}

function detectLevel() {
    detectDayBudget();
    if (appData.moneyPerDay <= 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}

detectLevel();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let optExpQuest = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i+1] = optExpQuest;
    }
    console.log(appData.optionalExpenses);
}

chooseOptExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();
console.log(appData.expenses);

alert('Ваш бюджет на один день: ' + appData.moneyPerDay);


function checkSavings() {
    if (appData.savings === true ) {
        let save = +prompt("Какова сумма накоплений?");
        let percent = +prompt("Под какой процент?");
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();
