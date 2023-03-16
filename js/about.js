const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

//Transforms the hamburger into an x and reveals the nav menu
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active") 
  // tagline.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(function(link) {
  link.addEventListener("click", function() {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
    // document.querySelector('.close-icon').style.display ='none'
    // document.querySelector('.menu-icon').style.display ='block'
  })
})