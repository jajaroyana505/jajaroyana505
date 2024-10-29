// navar fixes
window.onscroll = function () {
  const header = document.querySelector("header");
  const navLink = document.querySelector(".nav-link");
  fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    navLink.classList.remove("md:text-white");
  } else {
    header.classList.remove("navbar-fixed");
    navLink.classList.add("md:text-white");
  }
};

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
