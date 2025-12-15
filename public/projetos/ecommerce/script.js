const form = document.querySelector(".newsletter");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.querySelector("input");
  if (!input) return;
  const email = input.value.trim();
  if (!email) {
    form.dataset.status = "informe o email";
    return;
  }
  form.dataset.status = "inscricao confirmada";
    input.value = "";
  });
}
