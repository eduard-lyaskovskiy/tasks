"use strict";
// 2
var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
//4
var oblExp = prompt("Введите обязательную статью расходов в этом месяце"); 
var totalExp = prompt("Во сколько обойдется?");

//3
var appData = {
    budget : money,
    timeData : time,
    expenses : { [oblExp] : totalExp },
    obligatoryExpenses : oblExp,
    optionalExpenses : "",
    income : [],
    savings : false
};
console.log(appData);
console.log(appData["expenses"]);
var budgetForOneDay = alert(+money/30);