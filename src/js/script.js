const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu")
const menuBars = document.querySelector(".menu-bars")

menuBar.addEventListener("click", () => {
    menuNav.classList.toggle("dark");
});

menuBars.addEventListener("click", () => {
    menuNav.classList.remove("dark");
});
