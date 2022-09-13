const labels = document.querySelectorAll("label");
labels.forEach((label) => label.classList.add("opacity"));

const inputs = document.querySelectorAll("input");

inputs.forEach((input, i) => {
  input.addEventListener("change", function () {
    labels[i].style.opacity = 100;
  });
});
