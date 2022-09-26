const currentMenu = document.querySelector(".current--menu");
const icon = document.querySelector(".icon");
const listMenu = document.querySelector(".list__menu");

currentMenu.addEventListener("click", function () {
  icon.classList.toggle("icon--rotate");
  listMenu.classList.toggle("hidden");
});
