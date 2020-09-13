const timer = document.getElementById("timer");

const interval = function() {
    timer.textContent--;

    if (timer.textContent <= 0) {
        clearInterval(timerFunc);
        alert('Вы победили в конкурсе!');
    }
}

const timerFunc = setInterval(interval, 1000);