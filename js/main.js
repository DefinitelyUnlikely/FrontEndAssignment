import { renderPosts } from "./component/posts.js";
import { hamburgerMenu } from "./component/hamburger.js"
import { createPostButton } from "./component/createPost.js";
import { OffScreenMenu } from "./component/offscreenmenu.js";
import { getAllPosts } from "./data/posts.js";

async function main() {
    hamburgerMenu();
    OffScreenMenu();
    createPostButton();
    renderPosts(await getAllPosts());
}

main();