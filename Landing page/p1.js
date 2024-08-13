let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId;

document.getElementById('start').addEventListener('click', startStopwatch);
document.getElementById('stop').addEventListener('click', stopStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);

function startStopwatch() {
    intervalId = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        updateDisplay();
    }, 1000);
}

function stopStopwatch() {
    clearInterval(intervalId);
}

function resetStopwatch() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('hours').textContent = padZero(hours);
    document.getElementById('minutes').textContent = padZero(minutes);
    document.getElementById('seconds').textContent = padZero(seconds);
}

function padZero(number) {
    return (number < 10 ? '0' : '') + number;
}