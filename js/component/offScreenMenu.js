import { updateCurrentSelectedUser } from "../constants.js";
import { pickUserMenu } from "./pickUserMenu.js";

export function OffScreenMenu() {
    const changeUser = document.querySelector("#change-user")
    const logout = document.querySelector("#logout");

    changeUser.addEventListener("click", () => { pickUserMenu(); });
    logout.addEventListener("click", () => { updateCurrentSelectedUser(null) })
}