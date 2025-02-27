import { getAllPosts, getSinglePost } from "../API/posts.js";
import { getSingleUser } from "../API/users.js";
import { getCommentsByPost } from "../API/comments.js";
import { hiddenPostSidebar } from "./postSidebar.js";
import { renderPostCommentBox } from "./createComment.js";

export async function renderAllPosts() {
    // Function to render posts on the main pages
    const postArea = document.getElementsByClassName("post-area")[0]

    // Fetch Dummy data from dummyJSON.com
    let postArray = await getAllPosts();

    for (let post of postArray.posts) {
        const postAndSidebar = document.createElement("div");
        postArea.append(postAndSidebar);

        const renderedPost = document.createElement("article");
        postAndSidebar.append(renderedPost)

        // Main post body
        const title = document.createElement("h3");
        const postedBy = document.createElement("p");
        const tagArea = document.createElement("span")
        const body = document.createElement("p");

        renderedPost.append(title);
        renderedPost.append(tagArea);
        renderedPost.append(postedBy);
        renderedPost.append(body);

        let user = await getSingleUser(post.userId);
        title.innerText = post.title;
        body.innerText = post.body.slice(0, 60) + "..."
        postedBy.innerHTML = `<a href="/users?id=${post.userId}">Posted by ${user.username}</a>`;
        postedBy.addEventListener("click", () => { console.log("Placeholder") })

        for (let t of post.tags) {
            const tag = document.createElement("button");
            tagArea.append(tag);
            tag.innerText = t
        }

        // sidebar
        const sidebar = await hiddenPostSidebar(post);
        postAndSidebar.append(sidebar);

        // Add sidebar functionallity
        renderedPost.addEventListener("mouseover", (event) => {
            event.stopPropagation();
            sidebar.removeAttribute("id", "hidden-sidebar");
        });

        postAndSidebar.addEventListener("mouseleave", (event) => {
            event.stopPropagation();
            sidebar.setAttribute("id", "hidden-sidebar");
        })

        // Adding ability to get single post
        renderedPost.addEventListener("click", (event) => {
            event.stopPropagation();
            renderSinglePost(post.id, post);
        });

    }
}

export async function renderHomePosts() { }

export async function renderPopularPosts() { }

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
        for (let comment of (await getCommentsByPost(postId)).comments) {
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

    function removeSinlePost(event) {
        event.stopPropagation();
        singlePostRender.remove();
        document.body.removeEventListener("click", removeSinlePost);
    }
    document.body.addEventListener("click", removeSinlePost);

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
