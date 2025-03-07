import { getAllComments } from "./data/comments.js";
import { getAllPosts } from "./data/posts.js";

let currentlySelectedUser = null;

export function getCurrentlySelectedUser() {
    if (!currentlySelectedUser) {
        currentlySelectedUser = JSON.parse(localStorage.getItem("current-user"));
    }

    return currentlySelectedUser;
}

export function updateCurrentSelectedUser(user) {

    // To logout and catch any unexpected behavior
    if (user == null) {
        currentlySelectedUser = null;
        localStorage.removeItem("current-user");
        updateSelectedUserHTML(null);
        return;
    }

    currentlySelectedUser = user;
    localStorage.setItem("current-user", JSON.stringify(user));
    updateSelectedUserHTML(user.username);

}

function updateSelectedUserHTML(newValue) {
    document.querySelector("#selected-user").innerText = newValue != null ? newValue : "None";
}


export async function getNewPostId() {
    let posts = (await getAllPosts()).posts;
    return (Number("12345" + posts.length));
}

export async function getNewCommentId() {
    let comments = getAllComments();
}