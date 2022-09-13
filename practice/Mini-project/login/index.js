const labels = document.querySelectorAll("label");
const button = document.querySelector(".btn");
const errorUsername = document.querySelector(".error__username");
const errorPassword = document.querySelector(".error__password");
const inputUsername = document.querySelector(".input__username");
const inputPassword = document.querySelector("input[type=password]");
const iconUsername = document.querySelector(".icon__username");
const iconPassword = document.querySelector(".icon__password");
labels.forEach((label) => label.classList.add("opacity"));

button.addEventListener("click", function (e) {
  e.preventDefault();

  if (inputPassword.value.length < 5 && inputPassword.value.length < 5) {
    errorUsername.textContent = `Characters must more than 8`;
    errorPassword.textContent = "Password should more than 8";
    iconPassword.textContent = "X";
    iconUsername.textContent = "X";
  } else {
    inputUsername.value = "";
    inputPassword.value = "";

    alert("Loading...");
  }
});

iconUsername.addEventListener("click", function () {
  errorUsername.style.display = "none";
  iconUsername.style.display = "none";
});

iconPassword.addEventListener("click", function () {
  errorPassword.style.display = "none";
  iconPassword.style.display = "none";
});
