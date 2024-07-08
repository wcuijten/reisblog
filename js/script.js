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