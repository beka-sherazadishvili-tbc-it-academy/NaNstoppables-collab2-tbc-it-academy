const toggleQuestion  = document.querySelector(".quiz__section__header-wrapper p");
const toggle = document.querySelector(".toggle");
const html = document.querySelector("html");

function secondQuestion(){
    toggle.addEventListener("click", () => {
        html.classList.toggle("dark");
    })
    
}

secondQuestion()