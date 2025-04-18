import { getAllPosts } from "../data/posts.js";
import { getSingleUser } from "../data/users.js";
import { hiddenPostSidebar } from "./postSidebar.js";
import { renderSinglePost } from "./post.js";

export async function renderPosts(postArray) {
    // Function to render posts on the main pages
    const postArea = document.getElementsByClassName("post-area")[0]
    postArea.innerHTML = "";

    for (let post of postArray) {
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
        postedBy.innerHTML = `<a href="/users.html?id=${post.userId}">Posted by ${user.username}</a>`;

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
            renderSinglePost(post.id);
        });

    }
}

