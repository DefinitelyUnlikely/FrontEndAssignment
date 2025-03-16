import { getAllPosts } from "../data/posts.js";
import { renderPosts } from "./posts.js";



export function searchBar() {
    let searchBarInput = document.querySelector("#nav-search-input");

    searchBarInput.addEventListener("keydown", async (event) => {
        if (event.key === "Enter" || event.keyCode === 13) {
            await searchPosts();
        }
    })

}

async function searchPosts() {
    let searchBarInput = document.querySelector("#nav-search-input");
    let posts = await getAllPosts();
    let matchingPosts = [];

    for (let post of posts) {
        let body = post.body;
        let title = post.title;

        if (title.includes(searchBarInput.value) || body.includes(searchBarInput.value)) {
            matchingPosts.push(post);
        }
    }

    renderPosts(matchingPosts);
}