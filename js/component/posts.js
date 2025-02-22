import { getAllPosts } from "../API/posts.js";

export async function renderAllPosts() {
    // Function to render posts on the main pages
    const postArea = document.getElementsByClassName("post-area")[0]

    // Fetch Dummy data from dummyJSON.com
    let postArray = await getAllPosts();

    for (let post of postArray.posts) {
        const renderedPost = document.createElement("article");

        const title = document.createElement("h3");
        const body = document.createElement("p");

        const bottomDiv = document.createElement("div");
        const leftBottom = document.createElement("div");
        const rightBottom = document.createElement("div");
        const upvote = document.createElement("button");
        const downvote = document.createElement("button");
        const share = document.createElement("button");

        title.innerText = post.title;
        body.innerText = post.body.slice(0, 79) + "..."
        upvote.innerText = "Like";
        downvote.innerText = "Dislike";
        share.innerText = "Share";

        postArea.append(renderedPost)
        renderedPost.append(title);
        renderedPost.append(body);
        renderedPost.append(bottomDiv);

        bottomDiv.append(leftBottom);
        bottomDiv.append(rightBottom);
        leftBottom.append(upvote);
        leftBottom.append(downvote);
        rightBottom.append(share);

    }
}

export function renderHomePosts() { }

export function renderPopularPosts() { }

export function renderSinglePost(postArea) {
    // function that will render a single post, when selected.
}
