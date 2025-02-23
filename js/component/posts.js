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

        const title = document.createElement("h3");
        const postedBy = document.createElement("p");
        const tagArea = document.createElement("span")
        const body = document.createElement("p");

        // const bottomDiv = document.createElement("div");
        // const leftBottom = document.createElement("div");
        // const rightBottom = document.createElement("div");

        const sidebar = document.createElement("div")

        const upvote = document.createElement("button");
        const downvote = document.createElement("button");
        const share = document.createElement("button");
        const amountOfComments = document.createElement("button");

        title.innerText = post.title;

        // Doing a single fetch at the moment.
        // Getting all users, to be able to tell which user
        // posted a post, can be done due to the small amount of 
        // users in the dummy data. But how would that scale?
        let user = await getSingleUser(post.userId);
        postedBy.innerHTML = '<a href="/users?id=' + post.userId
            + '">Posted by ' + user.username + '</a>';
        postedBy.addEventListener("click", () => { console.log("Placeholder") })

        body.innerText = post.body.slice(0, 60) + "..."
        upvote.innerText = "Like";
        downvote.innerText = "Dislike";
        share.innerText = "Share";

        postArea.append(renderedPost)

        renderedPost.append(title);
        renderedPost.append(tagArea);
        renderedPost.append(postedBy);
        renderedPost.append(body);

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
