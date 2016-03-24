var hoursDOM = document.querySelector('.hours');
var minutesDOM = document.querySelector('.minutes');
var secondsDOM = document.querySelector('.seconds');
var millisecondsDOM = document.querySelector('.milliseconds');
var btnStart = document.querySelector('.btn-start');
var btnPause = document.querySelector('.btn-pause');
var btnClear = document.querySelector('.btn-clear');
var timer = null;
var startTime = 0;
var curTime = 0;
var prevTime = 0;
var outputTime = 0;

function getMyTime() {
  var tmpTime = new Date();
  return tmpTime.getTime();
}

function outputTimer() {
    outputTime = prevTime + curTime - startTime;
    var milliseconds = outputTime % 1000;
    outputTime = (outputTime / 1000) >> 0;
    var seconds = outputTime % 60;
    outputTime = (outputTime / 60) >> 0;
    var minutes = outputTime % 60;
    outputTime = (outputTime / 60) >> 0;
    var hours = outputTime % 24;
    millisecondsDOM.innerHTML = '' + ((milliseconds / 100) >> 0) + ((milliseconds % 100 / 10) >> 0) + (milliseconds % 10);
    secondsDOM.innerHTML = '' + ((seconds / 10) >> 0) + (seconds % 10);
    minutesDOM.innerHTML = '' + ((minutes / 10) >> 0) + (minutes % 10);
    hoursDOM.innerHTML = '' + ((hours / 10) >> 0) + (hours % 10);
}

function process() {
  curTime = getMyTime();
  outputTimer();
}

function startTimer() {
  btnStart.classList.add('btn-hide');
  btnPause.classList.remove('btn-hide');
  startTime = getMyTime();
  timer = setInterval(process, 7);
}

function clearTimer() {
  btnPause.classList.add('btn-hide');
  btnStart.classList.remove('btn-hide');
  btnStart.innerHTML = 'Start';
  clearInterval(timer);
  prevTime = 0;
  curTime = 0;
  startTime = 0;
  millisecondsDOM.innerHTML = '000';
  secondsDOM.innerHTML = '00';
  minutesDOM.innerHTML = '00';
  hoursDOM.innerHTML = '00';
}

function pauseTimer() {
  clearInterval(timer);
  prevTime = prevTime + curTime -startTime;
  btnStart.classList.remove('btn-hide');
  btnStart.innerHTML = 'Continue';
  btnPause.classList.add('btn-hide');
}

btnStart.addEventListener('click', startTimer);
btnClear.addEventListener('click', clearTimer);
btnPause.addEventListener('click', pauseTimer);
