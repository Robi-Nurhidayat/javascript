"use strict";
const currentMenu = document.querySelector(".current--menu");
const icon = document.querySelector(".icon");
const listMenu = document.querySelector(".list__menu");
const currItem = document.querySelector(".current--item");
const allListMenu = document.querySelector(".list__menu");

const menu = [
  {
    label: "Facebook",
  },
  {
    label: "Twitter",
  },
  {
    label: "Instagram",
  },
];

currentMenu.addEventListener("click", function () {
  icon.classList.toggle("icon--rotate");
  listMenu.classList.toggle("hidden");
});

menu.forEach((m) => {
  const html = `<span class="list--item">${m.label}</span>`;

  allListMenu.insertAdjacentHTML("beforeend", html);
});

allListMenu.addEventListener("click", function (e) {
  const item = e.target;
  if (!item.classList.contains("list--item")) return;

  currItem.textContent = item.textContent;
});
