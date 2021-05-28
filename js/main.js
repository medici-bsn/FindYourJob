const menuButtom = document.querySelector(".menu-button");
const menu = document.querySelector(".navbar");
const closeMenuButtom = document.querySelector(".close");

menuButtom.addEventListener("click", (event) => {
  menu.classList.toggle("open");
});

closeMenuButtom.addEventListener("click", (event) => {
  menu.classList.toggle("open");
});
