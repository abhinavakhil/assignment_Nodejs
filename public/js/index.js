import "@babel/polyfill";
import { login, logout } from "./login";
//import { updateSettings } from "./updateSettings";

const loginForm = document.querySelector(".form--login");
const logOutBtn = document.querySelector(".nav__el--logout");
const userDataForm = document.querySelector(".form-user-data");
const userPasswordForm = document.querySelector(".form-user-password");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });
}

if (logOutBtn) logOutBtn.addEventListener("click", logout);

// if (userDataForm) {
//   userDataForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     // for file(image)
//     const form = new FormData();
//     form.append("name", document.getElementById("name").value);
//     form.append("email", document.getElementById("email").value);
//     updateSettings(form, "data");
//   });
// }

// if (userPasswordForm) {
//   userPasswordForm.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     document.querySelector(".btn--save-password").textContent = "Updating..";
//     const passwordCurrent = document.getElementById("password-current").value;
//     const password = document.getElementById("password").value;

//     await updateSettings({ passwordCurrent, password }, "password");
//   });
//   document.querySelector(".btn--save-password").textContent = "Save password";
//   document.getElementById("password-current").value = "";
//   document.getElementById("password").value = "";
// }

const alertMessage = document.querySelector("body").dataset.alert;
if (alertMessage) showAlert("success", alertMessage, 20);