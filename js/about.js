const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
// const tagline = document.querySelector('.tagline')

//Transforms the hamburger into an x and reveals the nav menu
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active") 
  // tagline.classList.toggle("active")
})