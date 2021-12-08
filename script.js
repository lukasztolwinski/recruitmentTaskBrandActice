const toggleBtn = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

const searchIcon = document.getElementById('searchIcon');
const userIcon = document.getElementById('userIcon');
const cartIcon = document.getElementById('cartIcon');


toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})

searchIcon.addEventListener('click', () => {
    if (window.innerWidth < 608) {
        navbarLinks.classList.toggle('active');
    }
})

userIcon.addEventListener('click', () => {
    if (window.innerWidth < 608) {
        navbarLinks.classList.toggle('active');
    }
})

cartIcon.addEventListener('click', () => {
    if (window.innerWidth < 608) {
        navbarLinks.classList.toggle('active');
    }
})