import {cartoons} from "./db_cartoons.js";

const charactersList = document.getElementById("character-list");
charactersList.style.display = "flex";


function generateCharacters(id) {
    let characters = cartoons[id].characters;
    const imageWidthPercentage = 100 / cartoons[id].characters.length;
    for (let i = 0; i < cartoons.length; i++) {
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
}
