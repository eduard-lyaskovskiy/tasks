document.addEventListener("DOMContentLoaded", function() {
    
    'use strict';

    //-------------tabs-------------------
    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
            }
    }

    hideTabContent(1);
    
    function showTabContent(b) {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        }
    }
    
    info.addEventListener("click", function(e) {
        let target = e.target;
        if (target && e.target.classList.contains("info-header-tab")) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //------------------timer-----------------------
    let deadline = "12-08-2019";
    
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            sec = Math.floor((t/1000) % 60),
            min = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
        return {
            "total" : t,
            "sec" : sec,
            "min" : min,
            "hours" : hours
        };
    }
    
    function setCLock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000),
            timerActions = document.querySelector(".timer-action");

        function updateClock() {
            let t = getTimeRemaining(endtime);
            
            function addZero(num){
                if(num.length == 1) {
                    return '0' + num;
                } else return num;
            }

            hours.textContent = addZero(t.hours.toString());
            minutes.textContent = addZero(t.min.toString());
            seconds.textContent = addZero(t.sec.toString());
            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
                timerActions.textContent = "Акция закончилась!";
            }
        }
    }

    setCLock("timer", deadline);

    //---------------modal window-------------------
    let more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close"),
        infoBlock = document.querySelector(".info");

    more.addEventListener("click", function () {
        overlay.style.display = "block";
        this.classList.add("more-splash");
        document.body.style.overflow = "hidden";
    });

    infoBlock.addEventListener("click", function (event) {
        if (event.target.classList.contains('description-btn')) {
            overlay.style.display = "block";
            this.classList.add("more-splash");
            document.body.style.overflow = "hidden";
        }
    });

    close.addEventListener("click", function () {
        overlay.style.display = "none";
        more.classList.remove("more-splash");
        document.body.style.overflow = "";
    });

    class Options {
        constructor (height,width,bg,fontSize,textAlign) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }
        createDiv () {
            let div = document.createElement("div");
            div.innerHTML = "Да здравствует программирование!";
            div.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
            document.body.appendChild(div);
        }
    }

    const div = new Options("200px", "100%", "#fc0", "150%", "left");
    //div.createDiv();

    // form
    let message = {
        loading: "Загрузка...",
        sucsess: "Спасибо! Скоро мы с Вами свяжемся!",
        failure: "Что-то пошло не так..."
    };
     
    let form = document.querySelector('.main-form'),
        formDown = document.querySelector('#form'),
        input = form.getElementsByTagName ('input'),
        statusMessage = document.createElement('div');
         
     
        statusMessage.classList.add('status');
     
    function sendForm(elem){
     
        elem.addEventListener('submit', function (event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
            console.log(elem)
            let formData = new FormData(elem);
            let obj = {};
            formData.forEach(function(value, key) {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);
            console.log(json);
            function postData() {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', '/');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                    request.onreadystatechange = function () {
                        if(request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                resolve();
                            } else {
                                reject();
                            }
                        }
                    };
                    request.send(json); // Вот тут другое название переменной
                });
            }
            function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }
        postData (formData)
            .then (() => statusMessage.innerHTML = message.loading)
            .then (() => statusMessage.innerHTML = message.sucsess)
            .catch (() => statusMessage.innerHTML = message.failure)
            .then (clearInput);
        });
    }
    sendForm(form);
    sendForm(formDown);
        //fetch request with promise
        // (async () => { 
        // const request = fetch('/', {  
        //         method: 'POST',  
        //         headers: {  
        //         "Content-type": "application/json; charset=UTF-8"  
        //         },  
        //         body: json  
        //     }).then((response) => {
        //         response.json()
        //     })
        //     .catch(function (error) {  
        //         console.log('Request failed', error);  
        //     })
        // })();
})

