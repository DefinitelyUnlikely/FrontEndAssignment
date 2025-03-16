import { updateCurrentSelectedUser, getCurrentlySelectedUser } from "../constants.js";
import { pickUserMenu } from "./pickUserMenu.js";

export function OffScreenMenu() {
    const selectedUser = document.querySelector("#selected-user");
    const changeUser = document.querySelector("#change-user")
    const logout = document.querySelector("#logout");

    let user = getCurrentlySelectedUser();

    if (user) {
        selectedUser.innerText = user.username;
    }

    changeUser.addEventListener("click", () => { pickUserMenu(); });
    logout.addEventListener("click", () => { updateCurrentSelectedUser(null) });
}