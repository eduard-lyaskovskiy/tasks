"use strict";
// 2
let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
//4
let oblExp = prompt("Введите обязательную статью расходов в этом месяце"); 
let totalExp = prompt("Во сколько обойдется?");

let expenses = {
    oblExp : totalExp
};
console.log(expenses);
//3
let appData = {
    "budget" : money,
    "timeData" : time,
    "obligatoryExpenses" : oblExp,
    "optionalExpenses" : "",
    "income" : [],
    "savings" : false
};
console.log('%c appData', 'color: orange; font-weight: bold;' );
console.log({ budget, timeData, obligatoryExpenses, optionalExpenses, income, savings});