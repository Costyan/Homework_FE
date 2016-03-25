var Timer = (function() {
  var timer = null;
  var startTime = 0;
  var curTime = 0;
  var prevTime = 0;
  var outputTime = 0;

  function getTimerValue() {
    return outputTime;
  }

  function getMyTime() {
    var tmpTime = new Date();
    return tmpTime.getTime();
  }

  function process() {
    curTime = getMyTime();
    outputTimer();
  }

  function outputTimer() {
    var outT = prevTime + curTime - startTime;
    milliseconds = outT % 1000;
    outT = (outT / 1000) >> 0;
    seconds = outT % 60;
    outT = (outT / 60) >> 0;
    minutes = outT % 60;
    outT = (outT / 60) >> 0;
    hours = outT % 24;
    outputTime = '' + ((hours / 10) >> 0) + (hours % 10) + ':' +
                      ((minutes / 10) >> 0) + (minutes % 10) + ':' +
                      ((seconds / 10) >> 0) + (seconds % 10) + '.' +
                      ((milliseconds / 100) >> 0) + ((milliseconds % 100 / 10) >> 0) + (milliseconds % 10);
  }

  function start() {
    startTime = getMyTime();
    timer = setInterval(process, 7);
  }

  function clear() {
    clearInterval(timer);
    startTime = 0;
    curTime = 0;
    prevTime = 0;
    outputTime = '00:00:00.000';
  }

  function pause() {
    clearInterval(timer);
    prevTime = prevTime + curTime - startTime;
  }

  return {
    getTimerValue: getTimerValue,
    start: start,
    clear: clear,
    pause: pause
  }
}) ();
