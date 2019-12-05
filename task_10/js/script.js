document.addEventListener("DOMContentLoaded", function() {
    
    'use strict';
    //tabs
    
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
    //timer
    let deadline = "12-06-2019";
    
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
            /* Не колхозный вариант 
                    function addZero(num){
                        if(num <= 9) {
                            return '0' + num;
                        } else return num;
                    };
                    hours.textContent = addZero(t.hours);
                    minutes.textContent = addZero(t.minutes);
                    seconds.textContent = addZero(t.seconds);
            */
            hours.textContent = t.hours;
            if (hours.textContent.length == 1) {
                hours.textContent = "0" + hours.textContent;
            }
            minutes.textContent = t.min;
            if (minutes.textContent.length == 1) {
                minutes.textContent = "0" + minutes.textContent;
            }
            seconds.textContent = t.sec;
            if (seconds.textContent.length == 1) {
                seconds.textContent = "0" + seconds.textContent;
            }

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
});