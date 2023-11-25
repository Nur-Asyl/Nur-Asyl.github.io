import { cartoons } from "db_cartoons.js";

const searchInput = document.getElementById("searchField");
const btn = document.getElementById("searchBtn");
const cartoonList = document.getElementById("cartoons-list");


displayCartoons(cartoons);


searchInput.addEventListener('input', updateSearch);

function updateSearch() {
    window.location.href = 'search.html';
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCartoons = cartoons.filter(cartoon =>
        cartoon.heading.toLowerCase().includes(searchTerm) ||
        cartoon.description.toLowerCase().includes(searchTerm)
    );
    displayCartoons(filteredCartoons);
}

function displayCartoons(cartoonArray) {
    cartoonList.innerHTML = '';

    cartoonArray.forEach(cartoon => {
        const cartoonDiv = document.createElement("div");
        cartoonDiv.classList.add("col", "g-3");

        const cartoonImage = document.createElement("img");
        cartoonImage.src = cartoon.image;
        cartoonImage.alt = cartoon.heading;
        cartoonImage.style.width = "100%";
        cartoonImage.style.height = "100%";

        cartoonImage.classList.add("img-fluid", "my-cartoon-container");
        
        const cartoonHeading = document.createElement("h4");
        cartoonHeading.classList.add("text-white");
        cartoonHeading.innerText = cartoon.heading;

        const cartoonDesc = document.createElement("p");
        cartoonDesc.classList.add("text-white");
        cartoonDesc.innerText = cartoon.description;

        const cartoonPlay = document.createElement("button");
        cartoonPlay.classList.add("btn", "btn-black");
        const cartoonPlayI = document.createElement("i");

        cartoonPlayI.classList.add("fa-regular", "fa-circle-play", "display-4", "my-btn-play");
        cartoonPlay.addEventListener("click", () => generateCartoon(cartoon.id));
        
        cartoonPlay.appendChild(cartoonPlayI);
        cartoonDiv.appendChild(cartoonImage);
        cartoonDiv.appendChild(cartoonHeading);
        cartoonDiv.appendChild(cartoonDesc);
        cartoonDiv.appendChild(cartoonPlay);

        cartoonList.appendChild(cartoonDiv);
    });
}
