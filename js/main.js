
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
// const tagline = document.querySelector('.tagline')

//Transforms the hamburger into an x and reveals the nav menu
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active") 
  // tagline.classList.toggle("active")
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

const date = new Date() //constructor
const currentDay = date.getDay() //returns a number 0-6
const currentHour = date.getHours() // returns military time
const currentMonth = date.getMonth()//returns a number 0-11
const currentYear = date.getFullYear()//returns a number 0-11
const currentDate = date.getDate() //returns acutal day number - aka Jan 19 = 19
let easter = ""
let laborDay = ""
let memorialDay = "" //gets day number
let thanksgiving = ""
const openStatus = document.getElementById('open-status')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ac56212e56msh17a6ef6e9a9957fp16704bjsn4cd33f0679bf',
		'X-RapidAPI-Host': 'public-holiday.p.rapidapi.com'
	}
}
fetch(`https://public-holiday.p.rapidapi.com/${currentYear}/US`, options)
    .then(response => response.json())
    .then(data => {
      easter = parseInt(data[4].date.slice(-2))+2 //gets good friday date and adds 2 days
      memorialDay = parseInt(data[5].date.slice(-2)) 
      laborDay = parseInt(data[8].date.slice(-1)) //first monday of may
      thanksgiving = parseInt(data[11].date.slice(-2))
    }) 

function renderHolidayHours() {
  //christmas
  if (currentMonth === 12 && currentDate === 25) {
    openStatus.innerHTML =`<span id="closed">Closed Today</span> - (Holiday Closure)`
  //new years day
  } else if (currentMonth === 0 && currentDate === 1) {
    openStatus.innerHTML =`<span id="closed">Closed Today</span> - (Holiday Closure)`
  //fourth of July
  } else if (currentMonth === 7 && currentDate === 4){
    openStatus.innerHTML =`<span id="closed">Closed Today</span> - (Holiday Closure)` 
  //memorial day
  }
} 

renderHolidayHours()

//defaults in HTML to open now with 7:00pm close time
function renderOpenStatus() {
  //Monday
  if (currentDay === 1) {
    openStatus.innerHTML = `<span id="closed">Closed Now</span> - Open at 11:00 AM tomorrow`
  //Tues-Saturday before 11
  } else if(currentDay > 0 && currentHour < 11) {
    openStatus.innerHTML = `<span id="closed">Closed Now</span> - Open at 11:00 AM today`
  //Tuesday-Sunday at/after 5
  } else if (currentDay > 0 && currentHour >= 19) {
    if (currentDay === 6) {
      openStatus.innerHTML = `<span id="closed">Closed Now</span> - Open at 12:00 PM tomorrow`
    } else {
      openStatus.innerHTML = `<span id="closed">Closed Now</span> - Open at 11:00 AM tomorrow`
    }
  //Sunday 
  } else if (currentDay === 0) {
    //before noon
    if (currentHour < 12) {
      openStatus.innerHTML = `<span id="closed">Closed Now</span> - Open at 12:00 PM today`
    //at/after 5
    } else if (currentHour >= 17) {        
      openStatus.innerHTML = `<span id="closed">Closed Now</span> - Open at 11:00 AM Tuesday`
    //12-5 (open)
    } else {        
      openStatus.innerHTML = `<span id="open">Open Now</span> - Closing at 5:00 PM today`
    }
  }
}

renderOpenStatus()

// fetch ("https://public-holiday.p.rapidapi.com/2023/US")
//   .then(response => response.json())
//   .then(data => console.log(data))





// /PublicHolidays/{Year}/{CountryCode}


// const getMemorialDay = function(year) {
//   let lastMondayInMay = new Date(year, 4, 31);
//   let dayOfWeek = lastMondayInMay.getDay();
//   while (dayOfWeek !== 1) {
//     lastMondayInMay.setDate(lastMondayInMay.getDate() - 1);
//     dayOfWeek = lastMondayInMay.getDay();
//   }
//   return lastMondayInMay;
// };



// for (let i = 0; i < 10; i++) {
//   let year = new Date().getFullYear() + i;
//   let memorialDay = getMemorialDay(year);
//   console.log(`Memorial Day in ${year}: ${memorialDay.toDateString()}`);
// }

