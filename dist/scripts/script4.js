(function() {
  const popupMenu = document.getElementById("popupMenu");
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  const body = document.body;
  overlay?.addEventListener("click", () => {
    overlay?.style.setProperty("display", "none");
    body?.classList.remove("body-no-scrool");
    popupMenu?.classList.remove("popup-menu__active");
    modal?.style.setProperty("display", "none");
  });
})();
