const openNav = document.querySelector('.open-nav-btn')
const closeNav = document.querySelector('.close-nav-btn')
const nav = document.querySelector('.nav')

closeNav.addEventListener('click', () => {
    nav.classList.remove('nav-open')
})

openNav.addEventListener('click', () => {
    nav.classList.add('nav-open')
})