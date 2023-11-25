

if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
}

let existingUsersJSON = localStorage.getItem('users');
let existingUsers = JSON.parse(existingUsersJSON);

function renderUserCards() {
    const userContainer = document.getElementById('userContainer');
    userContainer.innerHTML = '';

    existingUsers.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('col-md-4', 'mb-3');

        userCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                    <div class="d-flex justify-content-end">
                        <span class="mx-2" style="cursor: pointer;" onclick="openEditModal(${user.id})">
                            <i class="bi bi-pencil"></i>
                        </span>
                        <span class="mx-2" style="cursor: pointer;" onclick="openDeleteModal(${user.id})">
                            <i class="bi bi-trash"></i>
                        </span>
                    </div>
                </div>
            </div>
        `;

        userContainer.appendChild(userCard);
    });
}

// Function to open edit modal
function openEditModal(userId) {
    // Add logic to fetch user data and populate the edit form
    const user = existingUsers.find(u => u.id === userId);
    const editUserNameInput = document.getElementById('editUserName');
    editUserNameInput.value = user.name;

    // Open the edit modal
    const editUserModal = new bootstrap.Modal(document.getElementById('editUserModal'));
    editUserModal.show();
}

// Function to open delete modal
function openDeleteModal(userId) {
    // Add logic to fetch user data and display confirmation message
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    confirmDeleteBtn.onclick = function () {
        // Add logic to delete the user
        // For demonstration, let's just remove the user from the array
        const index = existingUsers.findIndex(u => u.id === userId);
        users.splice(index, 1);

        // Close the delete modal
        const deleteUserModal = new bootstrap.Modal(document.getElementById('deleteUserModal'));
        deleteUserModal.hide();

        // Render updated user cards
        renderUserCards();
    };

    // Open the delete modal
    const deleteUserModal = new bootstrap.Modal(document.getElementById('deleteUserModal'));
    deleteUserModal.show();
}

// Initial rendering of user cards
renderUserCards();