if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
}

let existingUsersJSON = localStorage.getItem('users');
let existingUsers = JSON.parse(existingUsersJSON);

const createContent = document.getElementById("create-content");

createContent.addEventListener("click", () => {

    const form = document.querySelector("#user-creation-form");

    const errorName = document.getElementById("createErrorName");
    const errorPassword = document.getElementById("createErrorPassword");
    const errorPhone = document.getElementById("createErrorPhone");
    const usernameInput = form.elements["createName"];
    const passwordInput = form.elements["createPassword"];
    const phoneInput = form.elements["createPhone"];
    
    const phoneMask = IMask(phoneInput, { mask: '+{7}(000)000-00-00' });
    let nameValid = false;
    let passwordValid = false;
    let phoneValid = false;
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
        const phone = phoneInput.value;
        if (phone.trim().length < 16) {
            errorPhone.innerText = "Invalid phone";
            phoneValid = false;
        } 
        if (phoneValid) {
            errorPhone.innerText = null;
        }
        phoneValid = true;
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        if (nameValid && passwordValid && phoneValid) {
            
            let newUser = {
                id: existingUsers.length,
                username: usernameInput.value,
                password: passwordInput.value,
                phone: phoneInput.value,
                isUserRegistered: false,
                watchedTitles: 0,
                likedTitles: []
            };
            
            
            let loggedInUser = existingUsers.find(user => user.username === newUser.username);
            if(loggedInUser) {
                errorPassword.innerText = "User already exist";
            } else {
                existingUsers.push(newUser);
                
                localStorage.setItem('users', JSON.stringify(existingUsers));
                alert("added user");
            }
            
        }
    });
});
