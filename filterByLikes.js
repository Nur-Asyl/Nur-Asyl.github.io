import { cartoons } from "./db_cartoons.js";

const popularCartoons = cartoons.sort((a, b) => {
    return b.likes - a.likes;
});

const cartoonsList = document.getElementById("popular-cartoons-list");

function generateCartoon(id) {
    window.location.href = `cartoon.html?cartoonId=${id}`;
}


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
    cartoonPlay.classList.add("btn", "btn-black");
    const cartoonPlayI = document.createElement("i");

    cartoonPlayI.classList.add("fa-regular", "fa-circle-play", "display-4", "my-btn-play");
    
    cartoonPlay.addEventListener("click", () => generateCartoon(popularCartoons[i].id));
    
    cartoonPlay.appendChild(cartoonPlayI);
    cartoonDiv.appendChild(cartoonImage);
    cartoonDiv.appendChild(cartoonHeading);
    cartoonDiv.appendChild(cartoonDesc);
    cartoonDiv.appendChild(cartoonPlay);

    cartoonsList.appendChild(cartoonDiv);
}