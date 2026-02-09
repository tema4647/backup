(function() {
  const modal = document.getElementById("modal");
  const modalClose = modal?.querySelector(".modal__close");
  const overlay = document.getElementById("overlay");
  const body = document.body;
  modalClose?.addEventListener("click", () => {
    overlay?.style.setProperty("display", "none");
    body?.classList.remove("body-no-scrool");
    modal?.style.setProperty("display", "none");
  });
})();
