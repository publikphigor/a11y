// Navbar
const navBtn = document.querySelector(".burger");
const navbar = document.querySelector(".mb-navbar");

function openCloseNav() {
  navBtn.classList.toggle("active");
  navbar.classList.toggle("active");
}

navBtn.addEventListener("click", openCloseNav);
