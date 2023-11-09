import {cartoons} from "./db_cartoons.js"

function filterCartoonsByGenre(genre) {
    return cartoons.filter(cartoon => cartoon.genres.includes(genre));
}

export {filterCartoonsByGenre}