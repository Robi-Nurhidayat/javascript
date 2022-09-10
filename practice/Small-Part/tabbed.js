const tabContainer = document.querySelector(".tabbed__header");
const tabContent = document.querySelectorAll(".contents");

tabContainer.addEventListener("click", function (e) {
  const clicked = e.target;
  if (!clicked) return;

  console.log(clicked);

  tabContent.forEach((tab) => tab.classList.add("hidden"));

  document
    .querySelector(`.content--${clicked.dataset.target}`)
    .classList.remove("hidden");
});
