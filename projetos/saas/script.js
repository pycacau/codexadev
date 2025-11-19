const waitlist = document.querySelector(".waitlist");

if (waitlist) {
  waitlist.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = waitlist.querySelector("input");
    if (!input) return;
    const value = input.value.trim();
    if (!value) {
      waitlist.dataset.status = "adicione um email";
      return;
    }
    waitlist.dataset.status = "reserva confirmada";
    input.value = "";
  });
}

