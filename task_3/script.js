'use strict';

let money, time;
function start () {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
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
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
        if (typeof (a) != null && a != '' && typeof (b) != null && b != '' && a.length < 50) {
            console.log("Условия выполнены");
            appData.expenses[a] = b;
        } else {
            alert("Пожалуйста введите данные корректно!");
            i--;
        }
    }
}
chooseExpenses();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let a = prompt("Статья необязательных расходов?", "");
        if (typeof (a) != null && a != '') {
            console.log("Условия выполнены");
            appData.optionalExpenses[i] = a;
        } else {
            alert("Пожалуйста введите данные корректно!");
            i--;
        }
    }
}
chooseOptExpenses();

function detectDayBudget() {
    appData.budgetForOneDay = +(appData.budget / 30).toFixed(2);
    alert(`Бюджет на 1 день составляет ${appData.budgetForOneDay} руб.`);
}
detectDayBudget();

function detectLevel() {
    if (appData.budgetForOneDay < 200) {
        console.log("Вы находитесь за чертой бедности");
    } else if (appData.budgetForOneDay > 200 && appData.budgetForOneDay < 2000) {
        console.log("Ого вы средний класс!");
    } else if (appData.budgetForOneDay > 2000) {
        console.log("Да вы богач!");
    } else {
        console.log(`Some system error! Value of appData.budgetForOneDay: ${appData.budgetForOneDay}`);
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Какой процент накоплений?");
        appData.monthIncome = save/100/12*percent;
        alert(`Доход с депозита в месяц: ${appData.monthIncome} руб.`);
    }
}
checkSavings();
// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if (typeof (a) != null && a != '' && typeof (b) != null && b != '' && a.length < 50) {
//         console.log("Условия выполнены");
//         appData.expenses[a] = b;
//     } else {
//         alert("Пожалуйста введите данные корректно!");
//         i--;
//     }
//    i++;
// };

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if (typeof (a) === 'string' && typeof (a) != null && a != '' && typeof (b) != null && b != '' && a.length < 50) {
//         console.log("Условия выполнены");
//         appData.expenses[a] = b;
//     } else {
//         alert("Пожалуйста введите данные корректно!");
//         i--;
//     }
//     i++;
// } while (i < 2);
