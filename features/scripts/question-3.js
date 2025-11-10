const inputValue = document.querySelector('.q3_counter');
const startBtn = document.querySelector('.q3_count_starter');
const pauseBtn = document.querySelector('.q3__count_pause');

startBtn.addEventListener('click', () => {
    const inputValue = document.querySelector('.q3_counter');
    let counter = 0;
    let maxcCounter = 20;

    for (let i = 0; i < maxcCounter; i++) {
        setTimeout(() => {
            if (counter < maxcCounter) {
                setvalue(counter);
            }
        }, 1000);
    }

    // while(counter <= maxcCounter) {
    //     setTimeout(setvalue(counter), 50000);
    //     counter ++;
    // }
});

function setvalue(counter) {
    inputValue.value = counter;
}
