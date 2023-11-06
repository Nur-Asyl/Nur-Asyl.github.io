import {cartoons} from "./db_cartoons.js";

const cartoonsList = document.getElementById("cartoons-list");
// cartoonsList.style.display = "flex";


for (let i = 0; i < cartoons.length; i++) {
    const imageWidthPercentage = 100 / cartoons[i].length;

    const cartoonDiv = document.createElement("div");
    cartoonDiv.classList.add("col", "g-3");
    //characterDiv.style.width = `${imageWidthPercentage}%`;
    // characterDiv.style.width = `150px`;
    // characterDiv.style.height = `200px`;

    const cartoonImage = document.createElement("img");
    cartoonImage.src = cartoons[i].image;
    cartoonImage.alt = cartoons[i].heading;
    cartoonImage.style.width = "100%";
    cartoonImage.style.height = "100%";

    cartoonImage.classList.add("img-fluid", "my-cartoon-container");
    
    const cartoonHeading = document.createElement("h4");
    cartoonHeading.classList.add("text-white");
    cartoonHeading.innerText = cartoons[i].heading;

    const cartoonDesc = document.createElement("p");
    cartoonDesc.classList.add("text-white");
    cartoonDesc.innerText = cartoons[i].description;

    // <button onclick="redirectToDetailsPage(1)">View Details</button>

    const cartoonPlay = document.createElement("button");
    cartoonPlay.setAttribute("onclick", `generateCharacters(${i})`);
    
    cartoonDiv.appendChild(cartoonImage);
    cartoonDiv.appendChild(cartoonHeading);
    cartoonDiv.appendChild(cartoonDesc);

    cartoonsList.appendChild(cartoonDiv);
}
