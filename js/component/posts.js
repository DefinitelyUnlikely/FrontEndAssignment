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

        const postURL = '/posts?id=' + post.id;

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

    }
}

export function renderHomePosts() { }

export function renderPopularPosts() { }

export function renderSinglePost(postId) {
    // function that will render a single post, when selected.
}
