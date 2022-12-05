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
//document.querySelector
function save(){
  console.log(this.parentNode.querySelector("textarea"))
}
var sibling = document.querySelector("texturearea")
var Btn = document.getElementsByClassName("saveBtn")
console.log(Btn[0])
Btn[0].addEventListener("click", save);
//$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
//});
