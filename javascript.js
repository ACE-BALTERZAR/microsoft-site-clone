const menuBtn = document.querySelector('.menu-btn')
const displayMenu = document.querySelector('.main-menu')

menuBtn.addEventListener('click', showMenu)

function showMenu()
{
    displayMenu.classList.toggle("show")
}