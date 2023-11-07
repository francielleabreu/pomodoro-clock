const shortBreakButton = document.getElementById("shortBreak");
const longBreakButton = document.getElementById("longBreak");
const minutesClock = document.getElementById("minutes");
const secondsClock = document.getElementById("seconds");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

// Clock control
let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

// Update screen
function updateClock() {
    minutesClock.textContent = minutes.toString().padStart(2, "0");
    secondsClock.textContent = seconds.toString().padStart(2, "0");
}

// Start clock
function startClock() {
    if (!isRunning) {
        isRunning = true;
        startButton.disabled = true;
        stopButton.disabled = false;
        resetButton.disabled = false;
        shortBreakButton.disabled = true;
        longBreakButton.disabled = true;

        timer = setInterval(function () {
            if (minutes === 0 && seconds === 0) {
                clearInterval(timer);
                isRunning = false;
                stopButton.disabled = true;
                startButton.disabled = false;
                shortBreakButton.disabled = false;
                longBreakButton.disabled = false;
            } else {
                if (seconds === 0) {
                    minutes--;
                    seconds = 59;
                } else {
                    seconds--;
                }
                updateClock();
            }
        }, 1000);
    }
}

// Stop Clock
function stopClock() {
    clearInterval(timer);
    isRunning = false;
    startButton.disabled = false;
    stopButton.disabled = true;
    shortBreakButton.disabled = false;
    longBreakButton.disabled = false;
}

// Reset Clock
function resetClock() {
    stopClock();
    minutes = 25;
    seconds = 0;
    updateClock();
    resetButton.disabled = true;
    shortBreakButton.disabled = false;
    longBreakButton.disabled = false;
}

// Events
startButton.addEventListener("click", startClock);
stopButton.addEventListener("click", stopClock);
resetButton.addEventListener("click", resetClock);
shortBreakButton.addEventListener("click", () => {
    minutes = 5;
    seconds = 0;
    startClock();
});
longBreakButton.addEventListener("click", () => {
    minutes = 15;
    seconds = 0;
    startClock();
});