

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#signup");
    const errorName = document.getElementById("errorName");
    const errorPassword = document.getElementById("errorPassword");
    const usernameInput = form.elements["name"];
    const passwordInput = form.elements["password"];
    const phoneInput = form.elements["phone"];
    const phoneMask = IMask(
        phoneInput, {
            mask: '+{7}(000)000-00-00'
        }
    );
    let nameValid = false;
    let passwordValid = false;
    let errorPasswordArr = [];

    usernameInput.addEventListener("input", function() {
        const username = usernameInput.value;
        if (username.trim() === "") {
            errorName.innerText = "Empty name";
            nameValid = false;
        } 
        if (nameValid) {
            errorName.innerText = null;
        }
        nameValid = true;
    });

    passwordInput.addEventListener("input", function() {
        const password = passwordInput.value;
        if (password.trim() === "") {
            errorPasswordArr[0] = "Empty Password";
            passwordValid = false;
        } else {
            errorPasswordArr[0] = null;
        }
        if (password.search(/[0-9]/) === -1) { 
            errorPasswordArr[1] = "Password must contain at least one number";
            passwordValid = false;
        } else {
            errorPasswordArr[1] = null;
        }
        if (password.search(/[A-Za-z]/) === -1) { 
            errorPasswordArr[2] = "Password must contain at least one character";
            passwordValid = false;
        } else {
            errorPasswordArr[2] = null;
        }
        if (password.length < 8) {
            errorPasswordArr[3] = "Password length must be 8 characters";
            passwordValid = false;
        }  else {
            errorPasswordArr[3] = null;
        }
        if (passwordValid) {
            errorPassword.innerText = null;
        } else {
            errorPassword.innerText = errorPasswordArr.join("\n");
        }
        passwordValid = true;
    });

    phoneInput.addEventListener("input", function() {
        
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        if (nameValid && passwordValid) {
            window.location.href = '/home.html';

            const user = {
                username: usernameInput.value,
                password: passwordInput.value,
                isUserRegistered: false,
                watchedTitles: 0,
                likedTitles: []
              };
        
              localStorage.setItem("user", JSON.stringify(user));
        }
    });
});


