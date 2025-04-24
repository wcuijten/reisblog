/* support.js */
'use strict';
const cl = console.log.bind(console);

// Add the Toggle Functionality with JavaScript to Your Flexbox Navbar
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav-menu");

/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = `<i class="fas fa-bars"></i>`;
    } else {
        menu.classList.add("active");
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = `<i class="fas fa-times" style='white'></i>`;
    }
}
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);

// Add the Dropdown Menu Flexbox Functionality with JavaScript
const items = document.querySelectorAll(".item");
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);


/* Activate Submenu */
function toggleItem(e) {
    if (this.classList.contains("menu-active")) {
        e.stopPropagation();
        this.classList.remove("menu-active");
    } else if (menu.querySelector(":scope > .menu-active")) {
        menu.querySelector(":scope > menu-active").classList.remove("menu-active"); 
        this.classList.add("menu-active");
    } else {
        this.classList.add("menu-active");
    }
}

/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".nav-menu")) {
        item.addEventListener("click", toggleItem, false);
        item.addEventListener("keypress", toggleItem, false);
    }   
}
/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    if (menu.querySelector(".menu-active")) {
        let isClickInside = menu.querySelector(".menu-active").contains(e.target);
        if (!isClickInside && menu.querySelector(".menu-active")) {
        menu.querySelector(".menu-active").classList.remove("menu-active");
        }
    }
}

// ----------- image slider -----------------------

const slides = document.querySelectorAll(".slider img"); //Hier zat de fout, ".slides" moest ".slider" zijn.

let slideIndex = 0;
let intervalId = null;

// if you want to wait for the DOM content to load:
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){

    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
        // cl(intervalId);
    }
}

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000); //interval werd niet meer toegevoegd na het verwijderen.
}
// pressing prevslide button
function prevSlide(){
    clearInterval(intervalId); // this will pauze (clear the interval id)
    slideIndex--;
    showSlide(slideIndex);
}
// pressing nextslide button
function nextSlide(){
    clearInterval(intervalId); //pauzeert nu ook na nextslide()
    slideIndex++;
    showSlide(slideIndex);
}


