const domQuestions = [
    {
        id: 1,
        question: 'create new div item from 1..5',
        questionHTML: `
        <div class="quiz__section__answer-wrapper__solution">
                        <button>Add</button>
                        <button>Clear</button>
                    </div>
            <div class="quiz__section__answer-wrapper__buttons">
            </div>
        `,
        winScore: 50,
        hintMinus: 20,
        hint: "click add button five times",
        answer: `
                    <div class="quiz__section__answer-wrapper__solution">
                        <button>Add</button>
                        <button>Clear</button>
                    </div>
            <div class="quiz__section__answer-wrapper__buttons">
                <button data-btn="1">1</button>
                <button data-btn="2">2</button>
                <button data-btn="3">3</button>
                <button data-btn="4">4</button>
                <button data-btn="5">5</button>
            </div>
        `,

    },
    {
        id: 2,
        question: 'use master checkbox to select all the checkbox',
        questionHTML: '',
        winScore: 70,
        hintMinus: 25,
        hint: 'click the header checkbox',
        answer: '',
    },
    {
        id: 3,
        question: 'stop the counter while number is between 7 - 10',
        questionHTML: `<button class="q3_count_starter">Start</button>
                        <button class="q3__count_pause">pause</button>
                        <input type="number" min="0" class="q3_counter">`,
        winScore: 30,
        hintMinus: 10,
        hint: 'click stop once 7 is displayed and stop until 10',
        answer: '',
    },
    {
        id: 4,
        question: 'sort score ascending and descending',
        questionHTML: '',
        winScore: 100,
        hintMinus: 30,
        hint: 'sort conparing numbers',
        answer: '',
    },
    {
        id: 5,
        question: 'toggle to the light theme',
        questionHTML: '<button class="toggle">Toggle theme</button>',
        winScore: 100,
        hintMinus: 30,
        hint: 'click button to change theme',
        answer: '',
    },
    {
        id: 6,
        question: 'calculate sum of the numbers',
        questionHTML: `<div class="number-1"></div>
                      <p>+</p>
                      <div class="number-2"></div>
                      <input type="text" class="answer">`,
        winScore: 100,
        hintMinus: 30,
        hint: 'you should enter the number of the sum', 
        answer: '',
    },
]


var randomQuestions = [];
const taskTitle = document.querySelector(".quiz__section__header-wrapper");
const taskItems = document.querySelector(".quiz__section__answer-wrapper");

function startGame() {
  let randomIndex = Math.floor(Math.random() * (domQuestions.length - 1)) + 1;
  randomQuestions = [];
  let currentCount = 0;
  if (
    randomQuestions.some((element) => {
      element === randomIndex;
    })
  ) {
    randomIndex = Math.floor(Math.random() * 6) + 1;
  } else {
    randomQuestions.push(randomIndex);
    taskTitle.innerHTML = "";
    taskTitle.innerHTML = `<h2>Task:</h2> <p>${domQuestions[randomIndex].question}</p>`;
    taskItems.innerHTML = domQuestions[randomIndex].questionHTML;
    currentCount++;
  }
}
startGame();