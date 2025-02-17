export function renderPosts() {
    // Function to render posts on the main pages
    const postArea = document.getElementsByClassName("post-area")[0]

    // Just for testing. This will be replaced with me importing data through the DummyJSON Api
    // And looping through it.
    for (let i = 0; i < 50; i++) {
        const post = document.createElement("article");
        postArea.append(post);

        const title = document.createElement("h4");
        title.innerText = "Title " + i;
        post.append(title);

        const hLine = document.createElement("hr");
        post.append(hLine)
    }


}

export function renderSinglePost(postArea) {
    // function that will render a single post, when selected.
}
