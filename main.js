const container = document.querySelector(".container");
const btnSignUp = document.querySelector(".btn-sign-up");
const btnSignIn = document.querySelector(".btn-sign-in");

function setActive() {
  container.classList.add("active");
  btnSignUp.setAttribute("disabled", "disabled");
  btnSignIn.removeAttribute("disabled");
}

function setInActive() {
  container.classList.remove("active");
  btnSignUp.removeAttribute("disabled");
  btnSignIn.setAttribute("disabled", "disabled");
}
