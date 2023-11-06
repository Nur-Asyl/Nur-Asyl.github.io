import {cartoons} from "./db_cartoons.js";

const slider = document.querySelector(".image-slider");
const arrLeft = document.querySelector(".arrow-left");
const arrRight = document.querySelector(".arrow-right");
const heading = document.querySelector(".description-box h1");
const description = document.querySelector(".description-box p");

let id = 0;
let transitionDelay = 4000;
let intervalId = 0;

slide(0);

document.addEventListener("DOMContentLoaded", function() {
    intervalId = setInterval(() => next(), transitionDelay);
    arrLeft.addEventListener('click', () => {
        clearInterval(intervalId);
        prev();
        intervalId = setInterval(() => next(), transitionDelay);
    })
    
    arrRight.addEventListener('click', () => {
        clearInterval(intervalId);
        next();
        intervalId = setInterval(() => next(), transitionDelay);
    })
});

function slide(id) {
    slider.style.backgroundImage = `url(${cartoons[id].image})`;

    slider.classList.add('image-fade');

    setTimeout(() => {
        slider.classList.remove('image-fade');
    }, 550);

    heading.innerText = cartoons[id].heading;

    description.innerText = cartoons[id].description;

}

function next() {
    id++;
    
    if (id > cartoons.length - 1) {
        id = 0;
    }

    slide(id);
}

function prev() {
    id--;
    
    if (id<0) {
        id = cartoons.length - 1;
    }

    slide(id);
}



