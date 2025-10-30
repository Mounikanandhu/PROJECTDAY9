let seconds = 0;
let timer = null;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// Start Timer
startBtn.addEventListener("click", () => {
  if (timer !== null) return; // Prevent multiple timers
  timer = setInterval(() => {
    seconds++;
    display.textContent = seconds;
  }, 1000);
});

// Stop Timer
stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

// Reset Timer
resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  display.textContent = seconds;
});
