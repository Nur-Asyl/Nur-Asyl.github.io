import { Edit } from "../admin/edit.js";

if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
}

const userList = document.getElementById("user-list");
const existingUsersJSON = localStorage.getItem('users');
let existingUsers = JSON.parse(existingUsersJSON);

document.addEventListener("DOMContentLoaded", function() {
    displayUserList();
});

function Delete(user) {
    existingUsers.splice(existingUsers.indexOf(user), 1);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    alert("deleted");
}

function openEditModal(user) {
    Edit(user);
}

function displayUserList() {
    userList.innerHTML = '';

    existingUsers.forEach(user => {
        const divUser = document.createElement('div');
        const divUserProp = document.createElement('div');
        const divUserManage = document.createElement('div');
        const editBtn = document.createElement('button');
        const editIcon = document.createElement('i');
        const deleteBtn = document.createElement('button');
        const deleteIcon = document.createElement('i');

        editBtn.classList.add("mx-2", "ms-5");
        editBtn.style.cursor = "pointer";
        editBtn.style.fontSize = "3rem";

        deleteBtn.classList.add("mx-2", "ms-5");
        deleteBtn.style.cursor = "pointer";
        deleteBtn.style.fontSize = "3rem";
        
        editIcon.classList.add("fa-solid", "fa-pen-to-square");
        deleteBtn.classList.add("fa-solid", "fa-xmark");
        
        // <a class="mt-2 mx-3 text-white" id="edit-content" data-bs-toggle="modal" href="#" data-bs-target="#signupModal" role="button" aria-expanded="false">
        //     <i class="fa-solid fa-user"></i>
        // </a>

        editBtn.setAttribute("data-bs-toggle", "modal");
        editBtn.setAttribute("data-bs-target", "#editUserModal");
        editBtn.setAttribute("aria-expanded", "false");
        editBtn.setAttribute("id", "edit-content");

        editBtn.addEventListener("click", () => openEditModal(user));
        deleteBtn.addEventListener("click", () => Delete(user));
 

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
        divUserProp.appendChild(ulUser);

        deleteBtn.appendChild(deleteIcon);
        editBtn.appendChild(editIcon);
        divUserManage.appendChild(deleteBtn);
        divUserManage.appendChild(editBtn);
        divUser.appendChild(divUserProp);
        divUser.appendChild(divUserManage);
        userList.appendChild(divUser);
    });
}



