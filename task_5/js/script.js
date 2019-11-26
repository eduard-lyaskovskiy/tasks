document.body.style.background = "url(img/apple_true.jpg)";
let question = prompt("Что вы думаете о технике Apple?", "");
let menuItem = document.getElementsByClassName("menu-item"),
    menu = document.querySelector(".menu"),
    title = document.getElementById("title"),
    adv = document.querySelector(".adv"),
    iDprompt = document.getElementById("prompt");

let newMenuItem = document.createElement('li');
newMenuItem.classList.add('menu-item');
newMenuItem.innerHTML = "Пятый пункт";

menu.insertBefore(menuItem[2], menuItem[1]);
menu.appendChild(newMenuItem);

title.innerText = "Мы продаем только подлинную технику Apple";

adv.remove();

iDprompt.innerText = question;