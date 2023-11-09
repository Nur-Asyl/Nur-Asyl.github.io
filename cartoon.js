import { cartoons } from "./db_cartoons.js"

function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return Object.fromEntries(params.entries());
}

const queryParams = getQueryParams();
const cartoonId = queryParams.cartoonId;


const heading = document.getElementById("heading");
const description = document.getElementById("description");
const picture = document.getElementById("picture");

heading.innerText = cartoons[cartoonId].heading;
description.innerText = cartoons[cartoonId].description;
picture.src = cartoons[cartoonId].image;
picture.alt = cartoons[cartoonId].alt;

const charactersList = document.getElementById("character-list");
charactersList.style.display = "flex";

console.log("queryParams:", queryParams);
console.log("cartoonId:", cartoonId);



let characters = cartoons[cartoonId].characters;
const imageWidthPercentage = 100 / cartoons[cartoonId].characters.length;
for (let i = 0; i < cartoons[cartoonId].characters.length; i++) {
    const character = characters[i];

    const characterDiv = document.createElement("div");
    characterDiv.classList.add("character");
    //characterDiv.style.width = `${imageWidthPercentage}%`;
    characterDiv.style.width = `150px`;
    characterDiv.style.height = `200px`;

    const characterImage = document.createElement("img");
    characterImage.src = character.image;
    characterImage.alt = character.name;
    characterImage.style.width = "100%";
    characterImage.style.height = "100%";
    
    const characterName = document.createElement("p");
    characterName.innerText = character.name;
    
    characterDiv.appendChild(characterImage);
    characterDiv.appendChild(characterName);

    charactersList.appendChild(characterDiv);
}

