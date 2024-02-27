//alert("Test")
const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?
const timeOfDay = document.querySelector('#welcome')
if(isMorning) timeOfDay.textContent = 'Good Morning!'
if(isAfternoon) timeOfDay.textContent = 'Good Afternoon!'
if(isEvening) timeOfDay.textContent = 'Good Evening!'

const key = "It's a secret to everybody."
let value = "Here's your blue rupee!"

localStorage.setItem(key, value)
