import { getAllUsers } from "../API/users.js";
import { scrollIndicators } from "./scrollIndiciators.js";

export async function pickUserMenu() {

    // To prevent the function being called again and adding another window - if one already exists.
    if (document.querySelector(".pickUserWindow")) {
        return;
    }

    let users = await getAllUsers();

    const pickUserModal = document.createElement("div");
    pickUserModal.classList.add("pickUserModal");

    const pickUserWindow = document.createElement("div");
    pickUserWindow.classList.add("pickUserWindow");

    const usersDiv = document.createElement("div");
    const pickPageDiv = document.createElement("div");

    document.body.append(pickUserModal);
    pickUserModal.append(pickUserWindow);

    pickUserWindow.append(usersDiv);
    pickUserWindow.append(pickPageDiv);

    const nextPage = document.createElement("span");
    const lastPage = document.createElement("span");

    pickPageDiv.append(lastPage);
    pickPageDiv.append(nextPage);

    nextPage.innerText = "Next >"
    lastPage.innerText = "< Last"

    for (let user of users.users) {
        const userPara = document.createElement("p");
        const userSpan = document.createElement("span");
        userSpan.innerText = user.username;
        userSpan.style.cursor = "pointer";
        userPara.appendChild(userSpan);
        usersDiv.append(userPara);
    }

    pickUserWindow.addEventListener("click", (event) => event.stopPropagation());

    pickUserModal.addEventListener("click", (event) => {
        event.stopPropagation();
        pickUserModal.remove();
        pickUserWindow.remove();
    })

}