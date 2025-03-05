import { getCommentsByPost } from "../data/comments.js";
import { renderSinglePost } from "./post.js";



export async function hiddenPostSidebar(post) {
    const sidebar = document.createElement("div")
    sidebar.setAttribute("id", "hidden-sidebar");

    const postURL = '/posts?id=' + post.id;

    const upvote = document.createElement("div");
    const downvote = document.createElement("div");
    const share = document.createElement("div");
    const amountOfComments = document.createElement("div");

    sidebar.append(amountOfComments);
    sidebar.append(upvote);
    sidebar.append(downvote);
    sidebar.append(share);

    upvote.innerText = post.reactions.likes + (post.reactions.likes == 1 ? " Like" : " Likes")
    downvote.innerText = post.reactions.dislikes + (post.reactions.dislikes == 1 ? " Dislike" : " Dislikes")
    share.innerHTML = "Share";
    let totalComments = (await getCommentsByPost(post.id)).total;
    if (!totalComments) totalComments = 0;
    let commentsOrComment = totalComments != 1 ? " comments" : " comment";
    amountOfComments.innerText = totalComments + commentsOrComment;

    // Event listeners
    upvote.addEventListener("click", () => { });
    downvote.addEventListener("click", () => { });
    share.addEventListener("click", () => { });

    amountOfComments.addEventListener("click", (event) => {
        event.stopPropagation();
        renderSinglePost(post.id, post, true)
    });


    return sidebar;
}