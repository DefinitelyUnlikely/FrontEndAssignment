import { getAllUsers, getUsersPagination } from "../data/users.js";
import { scrollIndicators } from "./scrollIndiciators.js";
import { updateCurrentSelectedUser } from "../constants.js";
import { renderPosts } from "./posts.js";
import { getAllPosts } from "../data/posts.js";

export async function pickUserMenu() {

    // To prevent the function being called again and adding another window - if one already exists.
    if (document.querySelector(".pickUserWindow")) {
        return;
    }

    let usersJSON = await getUsersPagination();

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

    async function renderUsers(users) {
        usersDiv.innerHTML = "";
        for (let user of users) {
            const userPara = document.createElement("p");
            const userSpan = document.createElement("span");
            userSpan.innerText = user.username;
            userSpan.style.cursor = "pointer";
            userPara.appendChild(userSpan);
            usersDiv.append(userPara);

            userSpan.addEventListener("click", async () => {
                updateCurrentSelectedUser(user);
                renderPosts(await getAllPosts());
                pickUserModal.remove();
                pickUserWindow.remove();
            })
        }
    }

    await renderUsers(usersJSON.users);

    pickUserWindow.addEventListener("click", (event) => event.stopPropagation());

    pickUserModal.addEventListener("click", event => {
        event.stopPropagation();
        pickUserModal.remove();
        pickUserWindow.remove();
    })

    // To keep track of what we rendered the last page
    let lastPageSkip = 0;

    nextPage.addEventListener("click", async () => {
        lastPageSkip += 25;
        await renderUsers((await getUsersPagination(25, lastPageSkip)).users);
    });

    lastPage.addEventListener("click", async () => {
        if (lastPageSkip == 0) {
            return;
        }
        lastPageSkip -= 25;
        await renderUsers((await getUsersPagination(25, lastPageSkip)).users);
    });

}