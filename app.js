let timer;
let running = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const timeDisplay = document.getElementById('time');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

function formatTime() {
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startStopwatch() {
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    timeDisplay.textContent = formatTime();
  }, 1000);

  running = true;
  startStopButton.textContent = 'Stop';
  resetButton.disabled = false;
}

function stopStopwatch() {
  clearInterval(timer);
  running = false;
  startStopButton.textContent = 'Start';
}

function resetStopwatch() {
  clearInterval(timer);
  running = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  timeDisplay.textContent = formatTime();
  startStopButton.textContent = 'Start';
  resetButton.disabled = true;
}

startStopButton.addEventListener('click', () => {
  if (running) {
    stopStopwatch();
  } else {
    startStopwatch();
  }
});

resetButton.addEventListener('click', resetStopwatch);