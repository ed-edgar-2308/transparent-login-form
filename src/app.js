const form = document.querySelector("form");
const password = document.querySelector("#password");
const messagePassword = document.querySelector("#password + span");

form.addEventListener("change", (e) => {
  if (password.value.length <= 6) {
    messagePassword.textContent = "Password must be longer than 6 characters";
  } else if (password.value.length >= 20) {
    messagePassword.textContent = "Password must be less than 20 characters";
  } else if (password.value === "password") {
    messagePassword.textContent = "Password cannot be password";
  } else {
    password.classList.remove("border-error-hsl");
    password.classList.add("border-success-hsl");
    messagePassword.classList.remove("text-error-hsl");
    messagePassword.classList.add("text-success-hsl");
    messagePassword.textContent = "Well done!";
  }
});
