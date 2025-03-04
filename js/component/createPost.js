import { getAllPostTagsList, getAllPosts } from "../data/posts.js";
import { getLocalPostData, saveLocalPostData } from "../services/localStorage.js";
import { getCurrentlySelectedUser } from "../constants.js"

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

    function submitButtonEvent() {
        let title = titleInput.value;
        let body = bodyInput.value;
        let userId = getCurrentlySelectedUser().id;
        let tags = [];
        let tagsHTML = document.getElementsByClassName("picked");

        console.log(tagsHTML);
        for (let t of tagsHTML) {
            tags.push(t.innerText);
        }

        let post = {
            "id": 2131,
            "title": title,
            "body": body,
            "tags": tags,
            "reactions": { "likes": 0, "dislikes": 0 },
            "views": 0,
            "userId": userId
        }

        console.log(post);
        saveLocalPostData(post, true);
    }

    submitButton.addEventListener("click", submitButtonEvent)
}
