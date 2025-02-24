import { getAllPosts } from "../API/posts.js";
import { getSingleUser } from "../API/users.js";
import { getCommentsByPost } from "../API/comments.js";
import { hiddenPostSidebar } from "./postSidebar.js";

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
        postedBy.innerHTML = '<a href="/users?id=' + post.userId + '">Posted by ' + user.username + '</a>';
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

export async function renderSinglePost(postId, post, showComments = false) {
    // function that will render a single post, when selected.
    const singlePostRender = document.createElement("div");
    singlePostRender.classList.add("single-post");

    console.log(post);

    const title = document.createElement("h2");
    const postedBy = document.createElement("p");
    const tagArea = document.createElement("span")
    const postBody = document.createElement("p");
    const commentArea = document.createElement("div");

    title.innerText = post.title;
    postedBy.innerHTML = '<a href="/users?id=' + post.userId + '">Posted by ' + (await getSingleUser(post.userId)).username + '</a>';
    postBody.innerText = post.body;

    singlePostRender.append(title);
    singlePostRender.append(postedBy);
    singlePostRender.append(tagArea);
    singlePostRender.append(postBody);
    singlePostRender.append(commentArea);

    document.body.append(singlePostRender);

    const renderComments = async () => {
        for (let comment of (await getCommentsByPost(postId)).comments) {
            console.log(comment);
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
            console.log(commentLikes);

            singleComment.append(commentPostedBy);
            singleComment.append(lineOne);
            singleComment.append(commentBody);
            singleComment.append(lineTwo);
            singleComment.append(commentLikes);
        }
    };

    singlePostRender.addEventListener("click", (event) => event.stopPropagation());
    document.body.addEventListener("click", (event) => {
        event.stopPropagation();
        singlePostRender.remove();
    });

    if (!showComments) {
        const showCommentsText = document.createElement("p");
        showCommentsText.innerText = "Show comments...";
        showCommentsText.addEventListener("click", (event) => {
            event.stopPropagation();
            renderComments();
        }, { once: true })

        commentArea.append(showCommentsText);
    }

    if (showComments) {
        renderComments();
    }
}
