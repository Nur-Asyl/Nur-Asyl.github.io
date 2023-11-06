const username = document.getElementById("username");
const watchedTitles = document.getElementById("watched-titles");

const userStored = localStorage.getItem("user");

username.innerText = JSON.parse(userStored).username;
watchedTitles.innerText += "\t" + JSON.parse(userStored).watchedTitles;
