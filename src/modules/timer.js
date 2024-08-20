const timer = (dedline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");
  let intervalId;

  const getTimeRemaining = () => {
    let dateStop = new Date(dedline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours;
    let minutes;
    let seconds;
    Math.floor(timeRemaining / 60 / 60).toString().length === 1
      ? (hours = `0${Math.floor(timeRemaining / 60 / 60)}`)
      : (hours = Math.floor(timeRemaining / 60 / 60));

    Math.floor((timeRemaining / 60) % 60).toString().length === 1
      ? (minutes = `0${Math.floor((timeRemaining / 60) % 60)}`)
      : (minutes = Math.floor((timeRemaining / 60) % 60));

    Math.floor(timeRemaining % 60).toString().length === 1
      ? (seconds = `0${Math.floor(timeRemaining % 60)}`)
      : (seconds = Math.floor(timeRemaining % 60));
    return { timeRemaining, hours, minutes, seconds };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();
    timerHours.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.seconds;

    if (getTime.timeRemaining < 0) {
      clearInterval(intervalId);
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    }
  };
  setInterval(updateClock, 1000);
};

export default timer;
