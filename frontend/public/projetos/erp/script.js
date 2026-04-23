const links = document.querySelectorAll("a[href^='#']");
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const btn = form.querySelector("button");
    btn.disabled = true;
    btn.textContent = "Mensagem enviada!";
    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = "Enviar mensagem";
      form.reset();
    }, 2500);
  });
}
