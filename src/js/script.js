const title = document.querySelector(".title");

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  title.classList.toggle("scrolling-active", windowPosition);
});