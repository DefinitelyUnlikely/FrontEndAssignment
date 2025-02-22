export function OffScreenMenu() {
    const offScreen = document.querySelector(".off-screen-menu");
    const changeUser = document.querySelector("#change-user")

    changeUser.addEventListener("click", () => { console.log("Hey, you clicked the thing!"); })
}