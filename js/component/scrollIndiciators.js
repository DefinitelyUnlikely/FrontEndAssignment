export function scrollIndicators(container) {
    const downArrow = document.createElement("div");
    downArrow.classList.add("scroll-arrow", "scroll-down");
    downArrow.innerHTML = '<img src="../../images/down-arrow-svgrepo-com.svg">';
    downArrow.style.display = "none";

    const upArrow = document.createElement("div");
    upArrow.classList.add("scroll-arrow", "scroll-up");
    upArrow.innerHTML = '<img src="../../images/down-arrow-svgrepo-com.svg">';
    upArrow.style.transform = "rotate(180deg)";
    upArrow.style.display = "none";

    container.append(downArrow);
    container.append(upArrow);

    function updateArrows() {
        upArrow.style.display = container.scrollTop > 10 ? "block" : "none";
        downArrow.style.display = container.scrollTop < (container.scrollHeight - container.clientHeight - 10) ? "block" : "none";
    }

    container.addEventListener("scroll", updateArrows);

    window.addEventListener("resize", updateArrows);
}
