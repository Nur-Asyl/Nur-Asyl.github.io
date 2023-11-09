if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
}

let existingUsersJSON = localStorage.getItem('users');
let existingUsers = JSON.parse(existingUsersJSON);

document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector("#user-creation-form");

    const errorName = document.getElementById("errorName");
    const errorNewname = document.getElementById("errorNewName");
    const errorPassword = document.getElementById("errorPassword");
    const errorPhone = document.getElementById("errorPhone");

    const usernameInput = form.elements["name"];
    const newUsernameInput = form.elements["newName"];
    const passwordInput = form.elements["password"];
    const phoneInput = form.elements["phone"];

    const usernameEditBtn = document.getElementById("usernameEditBtn");
    const passwordEditBtn = document.getElementById("passwordEditBtn");
    const phoneEditBtn = document.getElementById("phoneEditBtn");
    
    const phoneMask = IMask(phoneInput, { mask: '+{7}(000)000-00-00' });
    let nameValid = false;
    let newNameValid = false;
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

    newUsernameInput.addEventListener("input", function() {
        const newUsername = newUsernameInput.value;
        if (newUsername.trim() === "") {
            errorNewName.innerText = "Empty name";
            newNameValid = false;
        } 
        if (newNameValid) {
            errorNewName.innerText = null;
        }
        newNameValid = true;
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

    usernameEditBtn.addEventListener("click", (event) => {
        event.preventDefault();

        let loggedInUser = existingUsers.find(user => user.username === usernameInput.value);
        
        if (nameValid) {

            alert("work");
            
            if(loggedInUser) {
                if (existingUsers.find(user => user.username === newUsernameInput.value)) {
                    errorPassword.innerText = "User with this name exist";
                } else {
                    existingUsers[existingUsers.indexOf(loggedInUser)].username = newUsernameInput.value;
                    
                    localStorage.setItem('users', JSON.stringify(existingUsers));
                    alert("edited user");
                }
            } else {
                errorPassword.innerText = "User doesnt exist";
            }
            
        }
    });

    passwordEditBtn.addEventListener("click", (event) => {
        event.preventDefault();

        let loggedInUser = existingUsers.find(user => user.username === usernameInput.value);
        
        if (nameValid) {

            alert("work");
            
            if(loggedInUser) {
                
                existingUsers[existingUsers.indexOf(loggedInUser)].password = passwordInput.value;
                
                localStorage.setItem('users', JSON.stringify(existingUsers));
                alert("edited user");
                
            } else {
                errorPassword.innerText = "User doesnt exist";
            }
            
        }
    });

    phoneEditBtn.addEventListener("click", (event) => {
        event.preventDefault();

        let loggedInUser = existingUsers.find(user => user.username === usernameInput.value);
        
        if (nameValid) {

            alert("work");
            
            if(loggedInUser) {
                
                existingUsers[existingUsers.indexOf(loggedInUser)].phone = phoneInput.value;
                
                localStorage.setItem('users', JSON.stringify(existingUsers));
                alert("edited user");
                
            } else {
                errorPassword.innerText = "User doesnt exist";
            }
            
        }
    });

    // form.addEventListener('submit', (event) => {
    //     event.preventDefault();
        
    //     if (nameValid && passwordValid && phoneValid) {
            
    //         if(loggedInUser) {
    //             let newUser = {
    //                 username: usernameInput.value,
    //                 password: passwordInput.value,
    //                 phone: phoneInput.value,
    //                 isUserRegistered: loggedInUser.isUserRegistered,
    //                 watchedTitles: loggedInUser.watchedTitles,
    //                 likedTitles: loggedInUser.likedTitles
    //             };
    //             existingUsers[existingUsers.indexOf(loggedInUser)] = newUser;
                
    //             localStorage.setItem('users', JSON.stringify(existingUsers));
    //             alert("edited user");
    //         } else {
    //             errorPassword.innerText = "User doesnt exist";
    //         }
            
    //     }
    // });
});
