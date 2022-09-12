const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  const red = Math.trunc(Math.random() * 255) + 1;
  const green = Math.trunc(Math.random() * 255) + 1;
  const blue = Math.trunc(Math.random() * 255) + 1;
  const alfa = String(Math.random()).slice(0, 4);
  const color = `rgba(${red},${green},${blue},${alfa})`;

  console.log(color);
  console.log(alfa);
  document.body.style.backgroundColor = color;

  document.querySelector(".value").textContent = getComputedStyle(
    document.body
  ).backgroundColor;
});
