let currentSelectedUser = null;

export function getCurrentlySelectedUser() {
    return currentSelectedUser;
}

export function updateCurrentSelectedUser(user) {

    if (user == null) {
        currentSelectedUser = null;
        updateSelectedUserHTML(null);
        console.log("Updated user to null");
        return;
    }

    currentSelectedUser = user;
    updateSelectedUserHTML(user.username);
    console.log("You've updated the user to " + user.username);
}

function updateSelectedUserHTML(newValue) {
    document.querySelector("#selected-user").innerText = newValue != null ? newValue : "None";
}