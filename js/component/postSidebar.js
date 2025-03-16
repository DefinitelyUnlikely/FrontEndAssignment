import { getCommentsByPost } from "../data/comments.js";
import { renderSinglePost } from "./post.js";
import { changePostLikes, getUserPostLike } from "../services/likes.js";
import { changePostDislikes, getUserPostDislike } from "../services/dislikes.js";
import { getCurrentlySelectedUser } from "../constants.js";
import { getSinglePost } from "../data/posts.js";



export async function hiddenPostSidebar(post) {
    let user = getCurrentlySelectedUser();

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

    const renderInnerText = async () => {
        let postInfo = await getSinglePost(post.id);
        upvote.innerText = postInfo.reactions.likes + (postInfo.reactions.likes == 1 ? " Like" : " Likes")
        downvote.innerText = postInfo.reactions.dislikes + (postInfo.reactions.dislikes == 1 ? " Dislike" : " Dislikes")
        share.innerHTML = "Share";
        let totalComments = (await getCommentsByPost(post.id)).length;
        if (!totalComments) totalComments = 0;
        let commentsOrComment = totalComments != 1 ? " comments" : " comment";
        amountOfComments.innerText = totalComments + commentsOrComment;


        if (user) {
            let liked = getUserPostLike(post.id, user.id);
            let disliked = getUserPostDislike(post.id, user.id);

            if (!liked) {
                upvote.classList.remove("clicked-up");
            }

            if (!disliked) {
                downvote.classList.remove("clicked-down");
            }

            if (liked) {
                upvote.classList.add("clicked-up");
                downvote.classList.remove("clicked-down");
            }

            if (disliked) {
                downvote.classList.add("clicked-down");
                upvote.classList.remove("clicked-up");
            }
        }
    }

    await renderInnerText();

    // Event listeners
    upvote.addEventListener("click", async (event) => {
        event.stopPropagation();
        await changePostLikes(post.id);
        await renderInnerText();
    });
    downvote.addEventListener("click", async (event) => {
        event.stopPropagation();
        await changePostDislikes(post.id);
        await renderInnerText();
    });

    share.addEventListener("click", () => { console.log(post) });

    amountOfComments.addEventListener("click", (event) => {
        event.stopPropagation();
        renderSinglePost(post.id, post, true)
    });


    return sidebar;
}