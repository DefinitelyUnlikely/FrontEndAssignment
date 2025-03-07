import { getSinglePost } from "../data/posts.js";
import { getSingleUser } from "../data/users.js";
import { getCommentsByPost } from "../data/comments.js";
import { renderPostCommentBox } from "./createComment.js";

/**
 * Render single post as a overlay window.
 * @param {*} postId - Id of the post to render.
 * @param {*} post - Optional. If post already in memory, one can send it as an argument to prevent an API/localStorage call.
 * @param {*} showComments - Optional. If turned true, will show all comments on a post when rendering.
 * Otherwise, add a show comment clickable paragraph.
 */
export async function renderSinglePost(postId, post = null, showComments = false) {

    if (post == null) {
        post = await getSinglePost(postId);
    }

    const singlePostRender = document.createElement("div");
    singlePostRender.classList.add("single-post");

    const title = document.createElement("h2");
    const postedBy = document.createElement("p");
    const tagArea = document.createElement("span")
    const postBody = document.createElement("p");
    const commentArea = document.createElement("div");
    commentArea.classList.add("comment-area");

    title.innerText = post.title;
    postedBy.innerHTML = `<a href="/users?id=${post.userId}">Posted by ${(await getSingleUser(post.userId)).username}</a>`;
    postBody.innerText = post.body;

    singlePostRender.append(title);
    singlePostRender.append(postedBy);
    singlePostRender.append(tagArea);
    singlePostRender.append(postBody);
    singlePostRender.append(commentArea);

    document.body.append(singlePostRender);

    const renderComments = async () => {
        let comments = await getCommentsByPost(postId);

        for (let comment of comments.comments) {
            const singleComment = document.createElement("div");
            singleComment.classList.add("single-comment");
            commentArea.append(singleComment);

            const commentPostedBy = document.createElement("p");
            const lineOne = document.createElement("hr");
            const commentBody = document.createElement("p");
            const lineTwo = document.createElement("hr");
            const commentLikes = document.createElement("p");

            commentPostedBy.innerText = (await getSingleUser(comment.user.id)).username;
            commentBody.innerText = comment.body;
            commentLikes.innerText = comment.likes + (comment.likes == 1 ? " Like" : " Likes");

            singleComment.append(commentPostedBy);
            singleComment.append(lineOne);
            singleComment.append(commentBody);
            singleComment.append(lineTwo);
            singleComment.append(commentLikes);
        }
    };

    singlePostRender.addEventListener("click", (event) => event.stopPropagation());

    function removeSinglePost(event) {
        event.stopPropagation();
        singlePostRender.remove();
        document.body.removeEventListener("click", removeSinglePost);
    }
    document.body.addEventListener("click", removeSinglePost);

    if (!showComments) {
        const showCommentsText = document.createElement("p");
        showCommentsText.innerText = "Show comments...";
        showCommentsText.addEventListener("click", (event) => {
            event.stopPropagation();
            showCommentsText.innerText = "Comments";
            renderComments();
        }, { once: true })

        commentArea.append(showCommentsText);
    }

    if (showComments) {
        renderComments();
    }

    // Bottom div with likes, dislikes and the button for adding a comment.
    const bottomDiv = document.createElement("div");
    bottomDiv.classList.add("bottom-div");

    singlePostRender.append(bottomDiv);

    const leftBottom = document.createElement("div");
    const rightBottom = document.createElement("div");

    bottomDiv.append(leftBottom)
    bottomDiv.append(rightBottom)

    const likes = document.createElement("button");
    const dislikes = document.createElement("button");
    const addComment = document.createElement("button");

    likes.innerText = post.reactions.likes + (post.reactions.likes == 1 ? " Like" : " Likes")
    dislikes.innerText = (post.reactions).dislikes + (post.reactions.dislikes == 1 ? " Dislike" : " Dislikes")
    addComment.innerText = "Comment"

    leftBottom.append(likes);
    leftBottom.append(dislikes);
    rightBottom.append(addComment);

    // Add logic for comment button: 
    addComment.addEventListener("click", () => {
        renderPostCommentBox(singlePostRender, post)
    }, { once: true })
}
