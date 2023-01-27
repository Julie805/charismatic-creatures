
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const tagline = document.querySelector('.tagline')

//Transforms the hamburger into an x and reveals the nav menu
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active") 
  tagline.classList.toggle("active")
})

//Hides the nav menu links when user clicks on one of the links 
document.querySelectorAll(".nav-link").forEach(function(link) {
  link.addEventListener("click", function() {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
    document.querySelector('.close-icon').style.display ='none'
    document.querySelector('.menu-icon').style.display ='block'
  })
})




// function getOpenStatus() {
//   const openStatus = document.getElementById('open-status')
//   const currentDay = "Sunday"
//   const currentTime = "9:00"
//   if currentDay 
// }