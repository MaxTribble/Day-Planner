// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = document.getElementById("currentDay")
var current = new Date();
var hour = current.getHours();
var nine = document.getElementById("hour-9")
var ten = document.getElementById("hour-10")
var eleven = document.getElementById("hour-11")
var twelve = document.getElementById("hour-12")
var thirteen = document.getElementById("hour-13")
var fourteen = document.getElementById("hour-14")
var fifteen = document.getElementById("hour-15")
var sixteen = document.getElementById("hour-16")
var seventeen = document.getElementById("hour-17")
var all = [nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen]
var saveBtn = document.getElementsByClassName("saveBtn")

currentDay.innerHTML=current

for(i=0; i<9;i++){
  console.log(all[i].dataset.hour)
  if(all[i].dataset.hour == hour){
  all[i].classList.remove("future")
  all[i].classList.remove("past")
  all[i].classList.add("present")
}}

for(i=0; i<9;i++){
  if(all[i].dataset.hour > hour){
  all[i].classList.add("future")
  all[i].classList.remove("past")
  all[i].classList.remove("present")
}}
for(i=0; i<9;i++){
  if(all[i].dataset.hour < hour){
  all[i].classList.remove("future")
  all[i].classList.add("past")
  all[i].classList.remove("present")
}}

function saveSchedule(){
  localStorage.setItem(this.parentNode.id, this.parentNode.querySelector("textarea").value)
}

for(i=0; i<all.length; i++){
saveBtn[i].addEventListener("click", saveSchedule);
}

for(i=0; i<all.length; i++){
  all[i].querySelector("textarea").value=localStorage.getItem(all[i].id)
}