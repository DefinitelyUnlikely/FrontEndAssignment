import { renderPosts } from "./component/posts.js";
import { hamburgerMenu } from "./component/hamburger.js"
import { createPostButton } from "./component/createPost.js";
import { getAllUsers, getSingleUser } from "./API/users.js";
import { getAllPosts, getSinglePost } from "./API/posts.js";
import { getCommentsByPost, getSingleComment } from "./API/comments.js";

function main() {
    renderPosts();
    hamburgerMenu();
    createPostButton();

    getAllUsers();
}

main();