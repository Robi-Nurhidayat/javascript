const currentMenu = document.querySelector(".current--menu");
const icon = document.querySelector(".icon");
const listMenu = document.querySelector(".list__menu");
const currItem = document.querySelector(".current--item");

const allListMenu = document.querySelector(".list__menu");

currentMenu.addEventListener("click", function () {
  icon.classList.toggle("icon--rotate");
  listMenu.classList.toggle("hidden");
});

allListMenu.addEventListener("click", function (e) {
  const item = e.target;
  if (!item.classList.contains("list--item")) return;

  currItem.textContent = item.textContent;
});
