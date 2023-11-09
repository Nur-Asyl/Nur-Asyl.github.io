import { cartoons } from "./db_cartoons.js";


function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return Object.fromEntries(params.entries());
}

const queryParams = getQueryParams();
const cartoonId = queryParams.cartoonId;

document.addEventListener("DOMContentLoaded", function () {
    const likeButton = document.getElementById("likeButton");
    const likeCount = document.getElementById("likeCount");

    let likes = cartoons[cartoonId].likes;
    let isLiked = false;

    function toggleLike() {
        if (isLiked) {
            likes--;
            likeButton.classList.remove("fas");
            likeButton.classList.add("far");
        } else {
            likes++;
            likeButton.classList.remove("far");
            likeButton.classList.add("fas");
        }
        isLiked = !isLiked;
        updateLikeDisplay();
    }

    function updateLikeDisplay() {
        likeCount.textContent = likes;
    }

    likeButton.addEventListener("click", toggleLike);
});
