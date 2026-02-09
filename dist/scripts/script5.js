(function() {
  const accordeonHeaders = document.querySelectorAll(".accordeon__header");
  const accordeonBodys = document.querySelectorAll(".accordeon__body");
  accordeonHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const headerParent = header.closest(".accordeon__wrapper");
      const arrows = document.querySelectorAll(".accordeon__arrow");
      const currentArrow = headerParent?.querySelector(".accordeon__arrow");
      const currentBody = headerParent?.querySelector(".accordeon__body");
      arrows.forEach((arrow) => {
        if (arrow !== currentArrow) {
          arrow.classList.remove("accordeon__arrow-up");
        }
      });
      accordeonBodys.forEach((body) => {
        if (body !== currentBody) {
          body.classList.remove("accordeon__body-active");
        }
      });
      currentBody?.classList.toggle("accordeon__body-active");
      currentArrow?.classList.toggle("accordeon__arrow-up");
    });
  });
})();
