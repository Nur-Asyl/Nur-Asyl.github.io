const userList = document.getElementById("user-list");
const existingUsersJSON = localStorage.getItem('users');
let existingUsers = JSON.parse(existingUsersJSON);

document.addEventListener("DOMContentLoaded", function() {
    displayUserList();
});

function displayUserList() {
    userList.innerHTML = '';

    existingUsers.forEach(user => {
        const divUser = document.createElement('div');
        divUser.classList.add("user");
        const ulUser = document.createElement('ul');
        const listItem = document.createElement('li');
        listItem.classList.add("text-black");
        listItem.innerText = `Username: ${user.username}
         Registered: ${user.isUserRegistered ? 'Yes' : 'No'}
         Password: ${user.password}
         Liked Titles: ${user.likedTitles}
         Watched Titles: ${user.watchedTitles}`;
        ulUser.appendChild(listItem);
        divUser.appendChild(ulUser);
        userList.appendChild(divUser);
    });
}