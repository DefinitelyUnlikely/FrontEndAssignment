import { renderPosts } from "./component/posts.js";

function main() {
    renderPosts();

}


// Hamburger menu JavaScript
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", (event) => {
    event.stopPropagation();
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

offScreenMenu.addEventListener("click", (event) => { event.stopPropagation(); })

document.addEventListener("click", () => {
    if (offScreenMenu.classList.contains("active")) {
        hamMenu.classList.toggle("active");
        offScreenMenu.classList.toggle("active");
    }
});

// Search box JavaScript
// Nothing here yet

main();