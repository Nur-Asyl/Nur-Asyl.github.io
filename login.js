
const form = document.querySelector("#login");
const logout = document.getElementById("logout");
const errorName = document.getElementById("errorName");
const errorPassword = document.getElementById("errorPassword");
const usernameInput = form.elements["name"];
const passwordInput = form.elements["password"];
const loginContent = document.getElementById("login-content");
const profileContent = document.getElementById("profile-content");
const modalBackdrop = document.querySelector(".modal-backdrop");

if (modalBackdrop) {
    modalBackdrop.style.zIndex = -1;
}

const storedUser = JSON.parse(localStorage.getItem("user"));


let isUserRegistered = (storedUser === null) ? false : storedUser.isUserRegistered; 


function showLoginContent() {
    loginContent.style.display = "block";
    profileContent.style.display = "none";
}

function showProfileContent() {
    loginContent.style.display = "none";
    profileContent.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {

    if(isUserRegistered) {
        showProfileContent();
    } else {
        showLoginContent();
    }


    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        if (storedUser.username === usernameInput.value) {
            if (passwordInput.value === storedUser.password) {
                storedUser.isUserRegistered = true;
                localStorage.setItem("user", JSON.stringify(storedUser));
                window.location.href = "/home.html";
            } else {
                errorPassword.innerText = "Invalid username or password";
            }
        } else {
            errorPassword.innerText = "No user found";
        }
    });
    
    logout.addEventListener("click", function() {
        storedUser.isUserRegistered = false;
        localStorage.setItem("user", JSON.stringify(storedUser));
    });
});




