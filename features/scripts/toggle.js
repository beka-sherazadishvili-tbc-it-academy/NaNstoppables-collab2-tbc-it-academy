const toggleQuestion  = document.querySelector(".quiz__section__header-wrapper p");
const toggle = document.querySelector(".toggle");
const html = document.querySelector("html");

function secondQuestion(){
    toggleQuestion.innerText = 'Toggle the theme switch to enable .dark on <html>';
    toggle.addEventListener("click", () => {
        html.classList.toggle("dark");
    })
    
}