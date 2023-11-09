import {cartoons, genres} from "./db_cartoons.js";
import {filterCartoonsByGenre} from "./filterByGenre.js"

const cartoonsList = document.getElementById("cartoons-list");
// const filter = document.getElementById("filter");
const adventure = document.getElementById("adventure");
const action = document.getElementById("action");
const mystic = document.getElementById("mystic");
const fantasy = document.getElementById("fantasy");

let filteredCartoons = cartoons;

adventure.addEventListener("click", () => {
    filteredCartoons = filterCartoonsByGenre(genres.adventure);
    displayContent();
});

action.addEventListener("click", () => {
    filteredCartoons = filterCartoonsByGenre(genres.action);
    displayContent();
});

mystic.addEventListener("click", () => {
    filteredCartoons = filterCartoonsByGenre(genres.mystic);
    displayContent();
});

fantasy.addEventListener("click", () => {
    filteredCartoons = filterCartoonsByGenre(genres.fantasy);
    displayContent();
});

document.addEventListener("DOMContentLoaded", () => {
    displayContent();
});

function generateCartoon(id) {
    window.location.href = `cartoon.html?cartoonId=${id}`;
}

function displayContent() {
    cartoonsList.innerHTML = "";
    for (let i = 0; i < filteredCartoons.length; i++) {
        const imageWidthPercentage = 100 / filteredCartoons[i].length;
    
        const cartoonDiv = document.createElement("div");
        cartoonDiv.classList.add("col", "g-3");
    
        const cartoonImage = document.createElement("img");
        cartoonImage.src = filteredCartoons[i].image;
        cartoonImage.alt = filteredCartoons[i].heading;
        cartoonImage.style.width = "100%";
        cartoonImage.style.height = "100%";
    
        cartoonImage.classList.add("img-fluid", "my-cartoon-container");
        
        const cartoonHeading = document.createElement("h4");
        cartoonHeading.classList.add("text-white");
        cartoonHeading.innerText = filteredCartoons[i].heading;
    
        const cartoonDesc = document.createElement("p");
        cartoonDesc.classList.add("text-white");
        cartoonDesc.innerText = filteredCartoons[i].description;
    
    
        const cartoonPlay = document.createElement("button");
        cartoonPlay.classList.add("btn", "btn-black");
        const cartoonPlayI = document.createElement("i");
    
        cartoonPlayI.classList.add("fa-regular", "fa-circle-play", "display-4", "my-btn-play");
        cartoonPlay.addEventListener("click", () => generateCartoon(filteredCartoons[i].id));
        
        cartoonPlay.appendChild(cartoonPlayI);
        cartoonDiv.appendChild(cartoonImage);
        cartoonDiv.appendChild(cartoonHeading);
        cartoonDiv.appendChild(cartoonDesc);
        cartoonDiv.appendChild(cartoonPlay);
    
        cartoonsList.appendChild(cartoonDiv);
    }
}
