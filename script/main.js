const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

let testing = "";
let testDiv = document.getElementById("test");

testDiv.innerText = "Testar";

let main = document.getElementsByTagName("main");
