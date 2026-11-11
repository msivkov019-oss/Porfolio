
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.textContent = isOpen ? "ЗАКРЫТЬ ×" : "МЕНЮ +";
    menuButton.setAttribute("aria-expanded", isOpen);
});

const navigationLinks = document.querySelectorAll(".navigation a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuButton.textContent = "МЕНЮ +";
        menuButton.setAttribute("aria-expanded", "false");
    });
});

document.querySelector("#year").textContent = new Date().getFullYear();

const animatedElements = document.querySelectorAll(
    ".about-content, .skill-row, .project-item, .contacts h2"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

animatedElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
});
