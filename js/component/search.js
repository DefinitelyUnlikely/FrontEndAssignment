import { getAllPosts } from "../data/posts.js";
import { renderPosts } from "./posts.js";



export async function searchBar() {
    const searchBar = document.querySelector("nav-search");
}

export async function searchPosts() {
    let searchBarInput = document.querySelector("nav-search-input");
    let posts = await getAllPosts();
    let matchingPosts = [];

    for (let post in posts) {
        let body = post.body;
        let title = post.title;

        if (title.includes(searchBarInput.value) || body.includes(searchBarInput.value)) {
            matchingPosts.push(post);
        }
    }

    renderPosts(matchingPosts);
}