export function createPostButton() {
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

export function renderCreatePostArea() {
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
}
