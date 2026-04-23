const toggle = document.querySelector(".mobile-toggle");
const menu = document.querySelector(".navbar ul");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}
