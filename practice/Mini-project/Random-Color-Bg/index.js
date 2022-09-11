const button = document.querySelector(".btn");

let changeColor = false;
let color;

button.addEventListener("click", function () {
  changeColor ? (color = "lightblue") : (color = "salmon");
  document.body.style.backgroundColor = color;

  changeColor = !changeColor;
});
