function addNumericBalls() {
    const solutionButtonsSec = document.querySelector(
        ".quiz__section__answer-wrapper__solution"
    );

    const addBtn = solutionButtonsSec.querySelector(`[data-add-btn = "add"]`);
    const clearBtn = solutionButtonsSec.querySelector(
        `[data-clear-btn ="clear"]`
    );

    const answerOutput = document.querySelector(
        ".quiz__section__answer-wrapper__buttons"
    );
    answerOutput.style.display = "none";

    console.log(answerOutput);

    let counter = 0;
    clearBtn.addEventListener("click", () => {
        answerOutput.style.display = "none";
        answerOutput.innerHTML = "";
        counter = 0;
    });

    addBtn.addEventListener("click", (e) => {
        answerOutput.style.display = "flex";
        counter++;

        let button = document.createElement("button");

        button.innerText = String(counter);
        button.dataset.btn = counter;
        console.log(button);
        answerOutput.appendChild(button);
    });
}
