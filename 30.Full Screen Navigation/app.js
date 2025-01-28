const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");
const highlight = document.querySelector(".highlight");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
    if (this.dataset.open === "close") {
        menu.style.clipPath = "circle(100% at 50% 50%)";
        this.dataset.open = "open";
    } else {
        menu.style.clipPath = "circle(20px at calc(100vw - 5vw) 31px)";
        this.dataset.open = "close";
        highlight.style.transform = "translate(-50%, -50%) scale(0)";
    }
});

links.forEach((link) => {
    link.addEventListener("pointerover", function () {
        const linkRect = this.getBoundingClientRect();
        highlight.style.transform = `translate(${linkRect.left + linkRect.width / 2}px, ${
            linkRect.top + linkRect.height / 2
        }px) scale(1)`;
        highlight.style.width = `${linkRect.width}px`;
        highlight.style.height = `${linkRect.height}px`;
    });

    link.addEventListener("pointerout", function () {
        highlight.style.transform = "translate(-50%, -50%) scale(0)";
    });
});
