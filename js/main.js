import { renderPosts } from "./component/posts.js";
import { hamburgerMenu } from "./component/hamburger.js"
import { createPostButton } from "./component/createPost.js";

function main() {
    renderPosts();
    hamburgerMenu();
    createPostButton();
}

main();