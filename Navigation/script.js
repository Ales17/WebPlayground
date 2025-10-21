// MENU BTN
const menuBtn = document.querySelector(".menu-btn.js");
const navJs = document.querySelector("nav.js");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("close");
  navJs.classList.toggle("active");
});
