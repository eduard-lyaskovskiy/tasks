let start = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    daybudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthsavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0],
    expensesItems = document.getElementsByClassName("expenses-item"),
    expensesItemBtn = document.getElementsByTagName("button")[0],
    optionalexpensesBtn = document.getElementsByTagName("button")[1],
    countBudgetBtn = document.getElementsByTagName("button")[2],
    optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    chooseIncome = document.querySelector(".choose-income"),
    savings = document.querySelector("#savings"),
    sumValue = document.querySelector("#sum"),
    percentValue = document.querySelector("#percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");
    

expensesItemBtn.disabled = true;
optionalexpensesBtn.disabled = true;
countBudgetBtn.disabled = true;
chooseIncome.disabled = true;
sumValue.disabled = true;
percentValue.disabled = true;

let money, time;

start.addEventListener("click", function() {
    expensesItemBtn.disabled = false;
    optionalexpensesBtn.disabled = false;
    countBudgetBtn.disabled = false;
    chooseIncome.disabled = false;
    sumValue.disabled = false;
    percentValue.disabled = false;
    time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?", "");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.timeData = time;
    appData.budget = money;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});
let sum = 0;
expensesItemBtn.addEventListener("click", function () {
    for (let i = 0; i < expensesItems.length; i++) {
        let a = expensesItems[i].value,
            b = expensesItems[++i].value;
        appData.expenses[a] = b;
        sum += +b;
    }
    expensesValue.textContent = sum;
});

optionalexpensesBtn.addEventListener("click", function () {
    for (let i = 0; i < optionalexpensesItem.length; i++) {
        let a = optionalexpensesItem[i].value;
        appData.optionalExpenses[i] = a;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + " ";
    }
});

countBudgetBtn.addEventListener("click", function () {
    if (appData.budget != undefined) {
        appData.budgetForOneDay = +((appData.budget - sum)/ 30).toFixed(2);
        daybudgetValue.textContent = appData.budgetForOneDay;

        if (appData.budgetForOneDay <= 200) {
            levelValue.textContent = "Вы находитесь за чертой бедности";
        } else if (appData.budgetForOneDay > 200 && appData.budgetForOneDay <= 2000) {
            levelValue.textContent = "Ого вы средний класс!";
        } else if (appData.budgetForOneDay > 2000) {
            levelValue.textContent = "Да вы богач!";
        } else {
            levelValue.textContent = `Some system error! Value of appData.budgetForOneDay: ${appData.budgetForOneDay}`;
        }
    } else {
        daybudgetValue.textContent = "Произошла ошибка!"
    }
});

chooseIncome.addEventListener("input", function () {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income; 
});

savings.addEventListener("click", function () {
    if (savings == true) {
        savings = false;
    } else {
        savings = true;
    }
});

sumValue.addEventListener("input", function () {
    if (savings == true) {
        let sum = +sumValue.value;
            percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthsavingsValue.textContent = +appData.monthIncome.toFixed(2);
        yearsavingsValue.textContent = +appData.yearIncome.toFixed(2);
    }
});

percentValue.addEventListener("input", function () {
    if (savings == true) {
        let sum = +sumValue.value;
            percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthsavingsValue.textContent = +appData.monthIncome.toFixed(2);
        yearsavingsValue.textContent = +appData.yearIncome.toFixed(2);
    }
});

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

