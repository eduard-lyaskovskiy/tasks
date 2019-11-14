"use strict";
// 2
var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
//4
var oblExp = prompt("Введите обязательную статью расходов в этом месяце"); 
var totalExp = prompt("Во сколько обойдется?");

var expenses = {
    oblExp : totalExp
};
console.log(expenses);
//3
var appData = {
    budget : money,
    timeData : time,
    obligatoryExpenses : oblExp,
    optionalExpenses : "",
    income : [],
    savings : false
};
console.log(appData);

var budgetForOneDay = alert(+money/30);