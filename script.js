let hours = 0;
let minutes = 0;
let seconds = 0;
let millisecond = 0;

let cron;

startButton = document.querySelector("#start").onclick = () => start();
pauseButton = document.querySelector("#pause").onclick = () => pause();
resetButton = document.querySelector("#reset").onclick = () => reset();

function start() {
    pause();
    cron = setInterval(() => {
        timer();
    }, 10);
}

function pause() {
    clearInterval(cron);
}

function reset() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    millisecond = 0;
    document.querySelector("#hours").innerText = "00";
    document.querySelector("#minutes").innerText = "00";
    document.querySelector("#seconds").innerText = "00";
}

function timer() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        seconds++;
      }
      if (seconds == 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }

      document.querySelector("#hours").innerText = returnData(hours);
      document.querySelector("#minutes").innerText = returnData(minutes);
      document.querySelector("#seconds").innerText = returnData(seconds);
}

function returnData(input) {
    return input > 10 ? input : `0${input}`
  }


