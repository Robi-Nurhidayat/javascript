const currDropdown = document.querySelector(".dropdown--current");
const icon = document.querySelector(".icon");

currDropdown.addEventListener("click", function () {
  icon.classList.toggle("icon-rotate");
});
