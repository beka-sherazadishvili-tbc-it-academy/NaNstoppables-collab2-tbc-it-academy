
const currentCountElement = document.querySelector(
  ".info__section__card__count"
);
const currentScoreElement = document.querySelector(
  ".info__section__card__score"
);
const currentTimeElement = document.querySelector(".info__section__card__time");

currentCountElement.innerHTML = `${quizCurrentQuestion} / ${totalQuestions}`;
currentScoreElement.innerHTML = `${quizCurrentScore}`;
currentTimeElement.innerHTML = `${quizTime}`;

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
}

function startCountdown() {
  if (currentTimeElement) {
    currentTimeElement.innerHTML = formatTime(quizTimeInSeconds);
  }

  const timerInterval = setInterval(() => {
    quizTimeInSeconds--;

    if (currentTimeElement) {
      currentTimeElement.innerHTML = formatTime(quizTimeInSeconds);
    }

    if (quizTimeInSeconds <= 0) {
      clearInterval(timerInterval);
      handleTimeUp();
    }
  }, 1000);
}

updateScores();
startCountdown();
