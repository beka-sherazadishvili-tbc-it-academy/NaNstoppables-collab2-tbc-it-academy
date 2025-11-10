let num1 = document.querySelector('.number-1');
let num2 = document.querySelector('.number-2');
let answer = document.querySelector('.answer');
let operator = document.querySelector('.quiz__section__answer-wrapper__solution p');

function returnSum(a, b) {
    const num1Random = getRandomInt(1, 10)
    const num2Random = getRandomInt(1, 10)
    num1.innerHTML = num1Random;
    num2.innerHTML = num2Random;;
    num1.style.color = "white";
    num2.style.color = "white";
    operator.style.color = "white";

    answer.addEventListener('input', (e) => {
        inputValue = e.target.value;
        console.log(inputValue);

        if(Number(inputValue) === (num1Random + num2Random)) {
            domQuestions[domQuestions.length - 1].answer = document.querySelector('.quiz__section__answer-wrapper');
        }
    })
}

returnSum();



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}