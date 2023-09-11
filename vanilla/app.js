const login = document.querySelector("#login-de");
const loginBox = document.querySelector("#login-box");

const loginHandleClick = () => {
  loginBox.classList.toggle("show");
};

login.addEventListener("click", loginHandleClick);
