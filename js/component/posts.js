import { getAllPosts } from "../API/posts.js";

export async function renderAllPosts() {
    // Function to render posts on the main pages
    const postArea = document.getElementsByClassName("post-area")[0]

    // Fetch Dummy data from dummyJSON.com
    let postArray = await getAllPosts();

    for (let post of postArray.posts) {
        console.log(post)
    }
}

export function renderHomePosts() { }

export function renderPopularPosts() { }

export function renderSinglePost(postArea) {
    // function that will render a single post, when selected.
}
