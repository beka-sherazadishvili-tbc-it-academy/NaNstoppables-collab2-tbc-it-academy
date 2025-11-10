var quizCurrentScore = 100;
let quizCurrentQuestion = 1;
let quizTime = "10:00";
let quizTimeInSeconds = 600;
let totalQuestions = domQuestions.length;

const currentAnswer = document.querySelector(".quiz__section__answer-wrapper");

let currentUserAnswer;
let questionId;

const buttonWrapper = document.querySelector(".info__section__buttons");

function updateScores() {
  buttonWrapper.addEventListener("click", (e) => {
    const div = e.target.closest("button");
    if (div.innerText === "Verify") {
      checkAnswer(currentAnswer, questionId);
    } else if (div.innerText === "Hint (-50)") {
      if (quizCurrentScore >= 50) {
        quizCurrentScore = quizCurrentScore - 50;
        currentScoreElement.innerHTML = `${quizCurrentScore}`;
      } else {
        alert("You dont have enough points");
      }
    } else if (div.innerText === "Skip (-100)") {
      if (quizCurrentScore >= 100) {
        quizCurrentScore -= 100;
        currentScoreElement.innerHTML = `${quizCurrentScore}`;
      } else {
        alert("You dont have enough points");
      }
    } else if (div.innerText === "Reset Challenge") {
      // placeholder
    } else if (div.innerText === "Restart Run") {
      // placeholder
    }
  });
}

function checkAnswer(currentAnswer, questionId) {
  questionAnswer = domQuestions.filter((item) => {
    item.id === questionId;
  });

  let currentUserAnswer = currentAnswer.innerHTML.replaceAll(" ", "");

  questionAnswerParsed = questionAnswer.questionHTML.replaceAll(" ", "");

  if (currentUserAnswer === questionAnswerParsed) {
    return true;
  } else {
    return false;
  }
}
