if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
}

let existingUsersJSON = localStorage.getItem('users');
let existingUsers = JSON.parse(existingUsersJSON);

document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector("#user-creation-form");
    const errorName = document.getElementById("errorName");
    const errorPassword = document.getElementById("errorPassword");
    const usernameInput = form.elements["name"];
    
    
    let nameValid = false;

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

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        
        
        if (nameValid) {
            alert("work");
            
            
            let loggedInUser = existingUsers.find(user => user.username === usernameInput.value);
            if(loggedInUser) {
                existingUsers.splice(existingUsers.indexOf(loggedInUser), 1);
                localStorage.setItem('users', JSON.stringify(existingUsers));
                alert("deleted");
            } else {
                errorPassword.innerText = "User already exist";
            }
            
        }
    });
});
