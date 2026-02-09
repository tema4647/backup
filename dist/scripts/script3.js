(function() {
  const popupMenuClose = document.getElementById("popup-menu__close");
  const popupMenu = document.getElementById("popupMenu");
  const overlay = document.getElementById("overlay");
  const body = document.body;
  popupMenuClose?.addEventListener("click", () => {
    overlay?.style.setProperty("display", "none");
    body?.classList.remove("body-no-scrool");
    popupMenu?.classList.remove("popup-menu__active");
  });
})();
(function() {
  const popupMenuListItemsTitle = document.querySelectorAll(
    ".popup-menu__list-item-title"
  );
  popupMenuListItemsTitle.forEach((listItemTitle) => {
    listItemTitle.addEventListener("click", (e) => {
      const target = e.target;
      if (target.tagName !== "BUTTON" && target.getAttribute("role") !== "button") {
        return;
      }
      const item = target?.closest(".popup-menu__list-item");
      if (!item) return;
      const currentUl = item.querySelector("ul");
      if (!currentUl) return;
      const allUls = document.querySelectorAll(".popup-menu__list-item ul");
      allUls.forEach((ul) => {
        if (ul !== currentUl) {
          ul.classList.remove("inner-list-active");
        }
      });
      currentUl.classList.toggle("inner-list-active");
    });
  });
})();
