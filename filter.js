import { cartoons } from "./db_cartoons.js";

const popularCartoons = cartoons.sort((a, b) => {
    return b.likes - a.likes;
});

const cartoonsList = document.getElementById("popularCartoons-list");


for (let i = 0; i < popularCartoons.length; i++) {
    const imageWidthPercentage = 100 / popularCartoons[i].length;

    const cartoonDiv = document.createElement("div");
    cartoonDiv.classList.add("col", "g-3");

    const cartoonImage = document.createElement("img");
    cartoonImage.src = popularCartoons[i].image;
    cartoonImage.alt = popularCartoons[i].heading;
    cartoonImage.style.width = "100%";
    cartoonImage.style.height = "100%";

    cartoonImage.classList.add("img-fluid", "my-cartoon-container");
    
    const cartoonHeading = document.createElement("h4");
    cartoonHeading.classList.add("text-white");
    cartoonHeading.innerText = popularCartoons[i].heading;

    const cartoonDesc = document.createElement("p");
    cartoonDesc.classList.add("text-white");
    cartoonDesc.innerText = popularCartoons[i].description;

    const cartoonPlay = document.createElement("button");
    cartoonPlay.setAttribute("onclick", `generateCharacters(${i})`);
    
    cartoonDiv.appendChild(cartoonImage);
    cartoonDiv.appendChild(cartoonHeading);
    cartoonDiv.appendChild(cartoonDesc);

    cartoonsList.appendChild(cartoonDiv);
}