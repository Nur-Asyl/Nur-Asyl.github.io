const username = document.getElementById("username");
const watchedTitles = document.getElementById("watched-titles");

const existingUsersJSON = localStorage.getItem("users");
let existingUsers = JSON.parse(existingUsersJSON);
let loggedInUser = existingUsers.find(user => user.isUserRegistered === true);

username.innerText = loggedInUser.username;
watchedTitles.innerText += "\t" + loggedInUser.watchedTitles;
