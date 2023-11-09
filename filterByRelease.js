import { cartoons } from "./db_cartoons.js";

const sortCartoonsByReleaseDate = (cartoons) => {
    return cartoons.sort((a, b) => {
      const dateA = new Date(a.release);
      const dateB = new Date(b.release);
      return dateB - dateA;
    });
};

const sortedCartoons = sortCartoonsByReleaseDate(cartoons);

const newCartoonsList = document.getElementById("new-cartoons-list");

function generateCartoon(id) {
    window.location.href = `cartoon.html?cartoonId=${id}`;
}


for (let i = 0; i < sortedCartoons.length; i++) {
    const imageWidthPercentage = 100 / sortedCartoons[i].length;

    const cartoonDiv = document.createElement("div");
    cartoonDiv.classList.add("col", "g-3");

    const cartoonImage = document.createElement("img");
    cartoonImage.src = sortedCartoons[i].image;
    cartoonImage.alt = sortedCartoons[i].heading;
    cartoonImage.style.width = "100%";
    cartoonImage.style.height = "100%";

    cartoonImage.classList.add("img-fluid", "my-cartoon-container");
    
    const cartoonHeading = document.createElement("h4");
    cartoonHeading.classList.add("text-white");
    cartoonHeading.innerText = sortedCartoons[i].heading;

    const cartoonDesc = document.createElement("p");
    cartoonDesc.classList.add("text-white");
    cartoonDesc.innerText = sortedCartoons[i].description;

    const cartoonPlay = document.createElement("button");
    cartoonPlay.classList.add("btn", "btn-black");
    const cartoonPlayI = document.createElement("i");

    cartoonPlayI.classList.add("fa-regular", "fa-circle-play", "display-4", "my-btn-play");
    cartoonPlay.addEventListener("click", () => generateCartoon(sortedCartoons[i].id));
    
    cartoonPlay.appendChild(cartoonPlayI);
    cartoonDiv.appendChild(cartoonImage);
    cartoonDiv.appendChild(cartoonHeading);
    cartoonDiv.appendChild(cartoonDesc);
    cartoonDiv.appendChild(cartoonPlay);

    newCartoonsList.appendChild(cartoonDiv);
}


