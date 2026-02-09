(function() {
  const burger = document.getElementById("burger");
  const popupMenu = document.getElementById("popupMenu");
  const overlay = document.getElementById("overlay");
  const body = document.body;
  burger?.addEventListener("click", () => {
    overlay?.style.setProperty("display", "block");
    body?.classList.add("body-no-scrool");
    popupMenu?.classList.add("popup-menu__active");
  });
})();
