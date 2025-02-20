export function createPostButton() {
    const createButton = document.getElementById("create-post");
    const createArea = document.getElementById("create-post-area");
    createButton.addEventListener("click", (event) => {
        event.stopPropagation();
        createArea.classList.toggle("hidden");

        createArea.addEventListener("click", (event) => { event.stopPropagation(); })
        document.addEventListener("click", () => {
            createArea.classList.add("hidden");
        });
    })
}

