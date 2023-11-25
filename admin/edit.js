if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
}

let existingUsersJSON = localStorage.getItem('users');
let existingUsers = JSON.parse(existingUsersJSON);

function Edit(user) {

    const form = document.querySelector("#user-id-form");

    const errorName = document.getElementById("errorName");
    const errorNewName = document.getElementById("errorNewName");
    const errorPassword = document.getElementById("errorPassword");
    const errorPhone = document.getElementById("errorPhone");

    const usernameInput = form.elements["name"];
    usernameInput.value = user.username;
    const passwordInput = form.elements["password"];
    passwordInput.value = user.password;
    const phoneInput = form.elements["phone"];
    phoneInput.value = user.phone;

    const editBtn = document.getElementById("editBtn");
    
    const phoneMask = IMask(phoneInput, { mask: '+{7}(000)000-00-00' });
    let nameValid = true;
    let passwordValid = true;
    let phoneValid = true;
    let errorPasswordArr = [];

    usernameInput.addEventListener("input", function() {
        const newUsername = usernameInput.value;
        if (newUsername.trim() === "") {
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

    editBtn.addEventListener("click", (event) => {
        event.preventDefault();

        if (nameValid && passwordValid && phoneValid) {

            alert("work");
        
            if (existingUsers.find(u => u.username === usernameInput.value && u.username !== user.username)) {
                errorPassword.innerText = "User with this name exist";
            } else {
                existingUsers[user.id].username = usernameInput.value;
                existingUsers[user.id].phone = phoneInput.value;
                existingUsers[user.id].password = passwordInput.value;
                
                localStorage.setItem('users', JSON.stringify(existingUsers));
                alert("edited user");
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
};

export { Edit }
