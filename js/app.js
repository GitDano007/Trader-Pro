const login_btn = document.querySelector("#login-btn");
const register_btn = document.querySelector("#register-btn");
const container = document.querySelector(".container");

register_btn.addEventListener("click", () => {
  container.classList.add("register-mode");
});

login_btn.addEventListener("click", () => {
  container.classList.remove("register-mode");
});
