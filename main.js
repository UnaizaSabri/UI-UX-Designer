const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links")
const menuuBtnIcon = document.getElementById("i")

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open")
    menuuBtnIcon.setAttribute("class" , isOpen?"ri-close-line":"ri-menu-line")
});

.navLinks.addEventListener("click", (e) => {
    .navLinks.classList.remove("open");
    menuuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    origin:"bottom",
    distance:"50px",
    duration: 1000,
};

ScrollReveal().reavel(".header__image img", {
    ...scrollRevealOption,
    origin: "rigt",
});

ScrollReveal().reavel(".header__content h5", {
    ...scrollRevealOption,
    deley: 500,
});

ScrollReveal().reavel(".header__content h1", {
    ...scrollRevealOption,
    deley: 1000,
});
ScrollReveal().reavel(".header__content p", {
    ...scrollRevealOption,
    deley: 1500,
});

ScrollReveal().reavel(".header__content .links", {
    ...scrollRevealOption,
    deley: 2000,
});
 