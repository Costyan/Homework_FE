var timerDOM = document.querySelector('.timer');
var btnStart = document.querySelector('.btn-start');
var btnPause = document.querySelector('.btn-pause');
var btnClear = document.querySelector('.btn-clear');
var outputTimer = null;

function outputTime() {
  timerDOM.innerHTML = Timer.getTimerValue();
}

function startTimer() {
  btnStart.classList.add('btn-hide');
  btnPause.classList.remove('btn-hide');
  Timer.start();
  outputTimer = setInterval(outputTime, 13);
}

function clearTimer() {
  btnPause.classList.add('btn-hide');
  btnStart.classList.remove('btn-hide');
  btnStart.innerHTML = 'Start';
  Timer.clear();
}

function pauseTimer() {
  btnStart.classList.remove('btn-hide');
  btnStart.innerHTML = 'Continue';
  btnPause.classList.add('btn-hide');
  Timer.pause();
}

btnStart.addEventListener('click', startTimer);
btnClear.addEventListener('click', clearTimer);
btnPause.addEventListener('click', pauseTimer);
