import { renderAllPosts } from "./component/posts.js";
import { hamburgerMenu } from "./component/hamburger.js"
import { createPostButton } from "./component/createPost.js";
import { OffScreenMenu } from "./component/offscreenmenu.js";

function main() {
    hamburgerMenu();
    OffScreenMenu();
    createPostButton();

    renderAllPosts();
}

main();