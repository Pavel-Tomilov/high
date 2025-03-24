// Main JavaScript file
"use strict"
const wrapper = document.querySelector('.icon-burger');
wrapper.addEventListener('click', myFunction);

function myFunction() {
  let element = document.querySelector('.menu');
  element.classList.toggle("menu__open");
  wrapper.classList.toggle("change");
}
