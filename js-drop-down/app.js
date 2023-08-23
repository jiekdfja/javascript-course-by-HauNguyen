const dropDownItemHeadings = document.querySelectorAll(
  ".drop-down-item-heading"
);

const dropDownItemMenus = document.querySelectorAll(".drop-down-item-menu");

dropDownItemHeadings.forEach((el, id) => {
  el.addEventListener("click", () => {
    dropDownItemMenus.forEach((itemMenu) => {
      itemMenu.style.display = "none";
    });

    dropDownItemMenus[id].style.display = "block";
  });
});
