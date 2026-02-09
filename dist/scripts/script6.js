(function() {
  const buttons = Array.from(document.getElementsByClassName("button"));
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  const body = document.body;
  buttons.forEach((button) => {
    button?.addEventListener("click", () => {
      overlay?.style.setProperty("display", "block");
      body?.classList.add("body-no-scrool");
      modal?.style.setProperty("display", "block");
    });
  });
})();
