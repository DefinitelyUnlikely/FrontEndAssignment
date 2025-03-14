import { getSingleUser } from "./data/users.js";

function getUserParameter() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');

    return userId;
}

async function renderUserInfo() {

    let userId = getUserParameter();
    let user = await getSingleUser(userId);
    console.log(user)

    let userArea = document.querySelector(".user-area");

    for (let field in user) {
        let div = document.createElement("div");
        div.innerText = field + ": " + user[field];
        userArea.append(div);
    }

}

renderUserInfo();