import { getAllPosts } from "../API/posts.js";
import { getSingleUser } from "../API/users.js";

export async function renderAllPosts() {
    // Function to render posts on the main pages
    const postArea = document.getElementsByClassName("post-area")[0]

    // Fetch Dummy data from dummyJSON.com
    let postArray = await getAllPosts();

    for (let post of postArray.posts) {
        const postURL = '/posts?id=' + post.id;

        const renderedPost = document.createElement("article");

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

        // const bottomDiv = document.createElement("div");
        // const leftBottom = document.createElement("div");
        // const rightBottom = document.createElement("div");

        // sidebar
        const sidebar = document.createElement("div")

        const upvote = document.createElement("button");
        const downvote = document.createElement("button");
        const share = document.createElement("button");
        const amountOfComments = document.createElement("button");

        renderedPost.addEventListener("mouseover", () => {

        });

        upvote.innerText = "Like";
        downvote.innerText = "Dislike";
        share.innerText = "Share";

        postArea.append(renderedPost)

        for (let t of post.tags) {
            const tag = document.createElement("button");
            tagArea.append(tag);
            tag.innerText = t
        }

    }
}

export function renderHomePosts() { }

export function renderPopularPosts() { }

export function renderSinglePost(postArea) {
    // function that will render a single post, when selected.
}
