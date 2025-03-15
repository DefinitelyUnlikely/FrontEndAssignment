import { getCommentsByPost } from "../data/comments.js";
import { renderSinglePost } from "./post.js";
import { changePostLikes } from "../services/likes.js";
import { changePostDislikes } from "../services/dislikes.js";



export async function hiddenPostSidebar(post) {
    const sidebar = document.createElement("div")
    sidebar.setAttribute("id", "hidden-sidebar");

    const postURL = '/posts?id=' + post.id;

    const upvote = document.createElement("div");
    upvote.setAttribute("id", "side-bar-upvote")
    const downvote = document.createElement("div");
    downvote.setAttribute("id", "side-bar-downvote")
    const share = document.createElement("div");
    const amountOfComments = document.createElement("div");

    sidebar.append(amountOfComments);
    sidebar.append(upvote);
    sidebar.append(downvote);
    sidebar.append(share);

    upvote.innerText = post.reactions.likes + (post.reactions.likes == 1 ? " Like" : " Likes")
    downvote.innerText = post.reactions.dislikes + (post.reactions.dislikes == 1 ? " Dislike" : " Dislikes")
    share.innerHTML = "Share";
    let totalComments = (await getCommentsByPost(post.id)).length;
    if (!totalComments) totalComments = 0;
    let commentsOrComment = totalComments != 1 ? " comments" : " comment";
    amountOfComments.innerText = totalComments + commentsOrComment;

    // Event listeners
    upvote.addEventListener("click", (event) => {
        event.stopPropagation();
        downvote.classList.remove("clicked-down");
        upvote.classList.toggle("clicked-up");
    });
    downvote.addEventListener("click", (event) => {
        event.stopPropagation();
        upvote.classList.remove("clicked-up");
        downvote.classList.toggle("clicked-down");
    });

    share.addEventListener("click", () => { });

    amountOfComments.addEventListener("click", (event) => {
        event.stopPropagation();
        renderSinglePost(post.id, post, true)
    });


    return sidebar;
}