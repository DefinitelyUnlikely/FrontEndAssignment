export function renderPosts() {
    // Function to render posts on the main pages
    const postArea = document.getElementsByClassName("post-area")[0]

    // Fetch Dummy data from dummyJSON.com
    let posts = [];

    fetch('https://dummyjson.com/posts')
        .then(res => posts = res.json())
        .then(console.log(posts))


}

export function renderPopularPosts() { }

export function renderSinglePost(postArea) {
    // function that will render a single post, when selected.
}
