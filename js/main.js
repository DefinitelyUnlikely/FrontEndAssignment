import { renderPosts } from "./component/posts.js";
import { hamburgerMenu } from "./component/hamburger.js"
import { createPostButton } from "./component/createPost.js";
import { OffScreenMenu } from "./component/offScreenMenu.js";
import { getAllPosts } from "./data/posts.js";
import { searchBar } from "./component/search.js";

async function main() {
    hamburgerMenu();
    OffScreenMenu();
    searchBar();
    createPostButton();
    renderPosts(await getAllPosts());
}

main();