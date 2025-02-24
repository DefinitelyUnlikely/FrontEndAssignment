import { pickUserMenu } from "./pickUserMenu.js";

export function OffScreenMenu() {
    const offScreen = document.querySelector(".off-screen-menu");
    const changeUser = document.querySelector("#change-user")

    changeUser.addEventListener("click", () => { pickUserMenu(); })
}