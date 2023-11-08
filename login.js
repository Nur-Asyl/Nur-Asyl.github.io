const form = document.querySelector("#login");
const logout = document.getElementById("logout");
const errorName = document.getElementById("errorName");
const errorPassword = document.getElementById("errorPassword");
const usernameInput = form.elements["name"];
const passwordInput = form.elements["password"];
const loginContent = document.getElementById("login-content");
const profileContent = document.getElementById("profile-content");

if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
}

let existingUsersJSON = localStorage.getItem('users');
let existingUsers = JSON.parse(existingUsersJSON);
let loggedInUser = null;

existingUsers = existingUsers.map(user => ({ ...user, isUserRegistered: false }));

function showLoginContent() {
    loginContent.style.display = "block";
    profileContent.style.display = "none";
}

function showProfileContent() {
    loginContent.style.display = "none";
    profileContent.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {

    if (!loggedInUser) {
        alert("shh");
        showProfileContent();
    } else {
        showLoginContent();
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        const userMatch = existingUsers.find(user => user.username === username);

        if (userMatch && userMatch.password === password) {
            userMatch.isUserRegistered = true;
            localStorage.setItem("users", JSON.stringify(existingUsers));
            loggedInUser = userMatch;
            showProfileContent();
            window.location.href = "index.html";
        } else {
            errorPassword.innerText = "Invalid username or password";
        }
    });

    logout.addEventListener("click", function() {
        if (loggedInUser) {
            loggedInUser.isUserRegistered = false;
            localStorage.setItem("users", JSON.stringify(existingUsers));
            loggedInUser = null;
            showLoginContent();
        }
    });
});
