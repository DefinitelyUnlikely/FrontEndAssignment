import { getCommentsByPost } from "../API/comments.js";



export async function hiddenPostSidebar(post) {
    const sidebar = document.createElement("div")
    sidebar.setAttribute("id", "hidden-sidebar");

    const upvote = document.createElement("div");
    const downvote = document.createElement("div");
    const share = document.createElement("div");
    const amountOfComments = document.createElement("div");

    sidebar.append(amountOfComments);
    sidebar.append(upvote);
    sidebar.append(downvote);
    sidebar.append(share);

    upvote.innerText = "Like";
    downvote.innerText = "Dislike";
    share.innerText = "Share";
    let totalComments = (await getCommentsByPost(post.id)).total;
    let commentsOrComment = totalComments != 1 ? " comments" : " comment";
    amountOfComments.innerText = totalComments + commentsOrComment;

    return sidebar;
}