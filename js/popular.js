import { renderPosts } from "./component/posts.js";
import { hamburgerMenu } from "./component/hamburger.js"
import { createPostButton } from "./component/createPost.js";
import { OffScreenMenu } from "./component/offscreenmenu.js";
import { getAllPosts } from "./data/posts.js";

async function popular() {
    let posts = await getAllPosts()
    let popularPosts = [];

    for (let post of posts) {
        if (post.reactions.likes > 600 && (post.reactions.likes + post.reactions.dislikes) * 0.8 <= post.reactions.likes) {
            popularPosts.push(post);
        }
    }

    hamburgerMenu();
    OffScreenMenu();
    createPostButton();
    renderPosts(popularPosts);
}

popular();