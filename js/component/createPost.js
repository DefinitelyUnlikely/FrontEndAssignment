import { getAllPostTagsList, getAllPosts } from "../data/posts.js";
import { getLocalPostData, saveLocalPostData } from "../services/posts.js";
import { getCurrentlySelectedUser, getNewPostId } from "../constants.js"
import { renderPosts } from "./posts.js";
import { changePostLikes } from "../services/likes.js";

export async function createPostButton() {
    const createButton = document.getElementById("create-post");
    const createArea = document.getElementById("create-post-area");
    createButton.addEventListener("click", (event) => {
        event.stopPropagation();
        createArea.classList.remove("hidden");
        createArea.classList.add("unhidden-flex");
        renderCreatePostArea();

        createArea.addEventListener("click", (event) => { event.stopPropagation(); })
        document.addEventListener("click", () => {
            createArea.classList.add("hidden");
            createArea.classList.remove("unhidden-flex");
            createArea.innerHTML = "";
        });
    })
}

export async function renderCreatePostArea() {
    const createArea = document.getElementById("create-post-area");

    if (createArea.innerHTML.trim() != "") {
        return;
    }

    const createPostHeader = document.createElement("h2");
    createPostHeader.innerText = "Create a new post"
    createArea.append(createPostHeader);

    // Title
    const titleLabel = document.createElement("label");
    titleLabel.innerText = "Add a title"
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.placeholder = "Input a title..."
    titleInput.id = "title-input"
    titleLabel.htmlFor = "title-input";

    createArea.append(titleLabel);
    createArea.append(titleInput);

    // Body of text
    const bodyLabel = document.createElement("label");
    bodyLabel.innerText = "Add of body of text"
    const bodyInput = document.createElement("textarea");
    bodyInput.placeholder = "Input a body..."
    bodyInput.id = "body-input"
    bodyLabel.htmlFor = "body-input";

    createArea.append(bodyLabel);
    createArea.append(bodyInput);

    // Tags
    const tagAreaLabel = document.createElement("span");
    tagAreaLabel.innerText = "Choose tags"
    createArea.append(tagAreaLabel)
    const tagArea = document.createElement("div");
    const tags = await getAllPostTagsList();
    for (let tag of tags) {
        const tagButton = document.createElement("button");
        tagButton.innerText = tag;
        tagArea.append(tagButton);

        tagButton.addEventListener("click", () => {
            tagButton.classList.toggle("picked");
        })
    }
    createArea.append(tagArea);

    // Submit button and logic
    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    createArea.append(submitButton);

    async function submitButtonEvent() {
        let title = titleInput.value;
        let body = bodyInput.value;
        let userId = getCurrentlySelectedUser() ? getCurrentlySelectedUser().id : "No user selected"
        let tags = [];
        let tagsHTML = document.getElementsByClassName("picked");

        for (let t of tagsHTML) {
            tags.push(t.innerText);
        }

        if (typeof (userId) != "number") {
            bodyInput.placeholder = "No user!";
            return;
        }

        if (!title) {
            titleInput.placeholder = "Please add a title";
            return;
        }

        if (!body) {
            bodyInput.placeholder = "Please add text to your post!";
            return;
        }

        if (tags.length == 0) {
            return;
        }

        let nid = await getNewPostId();
        let post = {
            "id": nid,
            "title": title,
            "body": body,
            "tags": tags,
            "reactions": { "likes": 0, "dislikes": 0 },
            "views": 0,
            "userId": userId
        }

        saveLocalPostData(post, true);
        await changePostLikes(nid); // Let's assume users like their own content.
        renderPosts(await getAllPosts());
        createArea.classList.add("hidden");
        createArea.classList.remove("unhidden-flex");
        createArea.innerHTML = "";
    }

    submitButton.addEventListener("click", submitButtonEvent)
}
