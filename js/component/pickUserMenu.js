import { getAllUsers } from "../API/users.js";
import { scrollIndicators } from "./scrollIndiciators.js";

export async function pickUserMenu() {

    let users = await getAllUsers();

    const pickUserModal = document.createElement("div");
    pickUserModal.classList.add("pickUserModal");

    const pickUserWindow = document.createElement("div");
    pickUserWindow.classList.add("pickUserWindow");

    if (document.querySelector(".pickUserWindow")) {
        return;
    }

    document.body.append(pickUserModal);
    pickUserModal.append(pickUserWindow);
    for (let user of users.users) {
        const userPara = document.createElement("p");
        const userSpan = document.createElement("span");
        userSpan.innerText = user.username;
        userSpan.style.cursor = "pointer";
        userPara.appendChild(userSpan);
        pickUserWindow.append(userPara);
    }

    pickUserWindow.addEventListener("click", (event) => event.stopPropagation());

    pickUserModal.addEventListener("click", (event) => {
        event.stopPropagation();
        pickUserModal.remove();
        pickUserWindow.remove();
    })

    scrollIndicators(pickUserWindow);

}