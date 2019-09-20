const menubutton = document.querySelector(".menu-button");
const hamburger = document.querySelector(".menu-button-burger");
const nav = document.querySelector(".nav");
const menunav = document.querySelector(".menu-nav");
const navitems= document.querySelectorAll('.menu-nav-item');
let showmenu = false;
menubutton.addEventListener("click", togglemenu);

function togglemenu() {
  if (!showmenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menunav.classList.add("open");
    navitems.forEach(item => item.classList.add('open'));
    showmenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menunav.classList.remove("open");
        navitems.forEach(item => item.classList.remove("open"));

    showmenu = false;
  }
}
