//Burger Menu
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__sidebar');
const menuLink = document.querySelector('.sidebar__link');


//Burger fuction
function openMenu() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
}

function closeMenu() {
    burger.classList.remove('active');
    menu.classList.remove('active');
}


burger.addEventListener('click', function() {
    openMenu();
})

menuLink.addEventListener('click', function() {
    closeMenu();
})

