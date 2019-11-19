'use strict';

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: "",
    income: [],
    savings: false
};

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if (typeof (a) != null && a != '' && typeof (b) != null && b != '' && a.length < 50) {
//         console.log("Условия выполнены");
//         appData.expenses[a] = b;
//     } else {
//         alert("Пожалуйста введите данные корректно!");
//         i--;
//     }
// };

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

let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    if (typeof (a) === 'string' && typeof (a) != null && a != '' && typeof (b) != null && b != '' && a.length < 50) {
        console.log("Условия выполнены");
        appData.expenses[a] = b;
    } else {
        alert("Пожалуйста введите данные корректно!");
        i--;
    }
    i++;
} while (i < 2);

appData.budgetForOneDay = appData.budget / 30;
alert(`Бюджет на 1 день составляет ${appData.budgetForOneDay} руб.`);

if (appData.budgetForOneDay < 200) {
    console.log("Вы находитесь за чертой бедности");
} else if (appData.budgetForOneDay > 200 && appData.budgetForOneDay < 2000) {
    console.log("Ого вы средний класс!");
} else if (appData.budgetForOneDay > 2000) {
    console.log("Да вы богач!");
} else {
    console.log(`Some system error! Value of appData.budgetForOneDay: ${appData.budgetForOneDay}`);
}