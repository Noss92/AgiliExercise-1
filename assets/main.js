/**
 * Rédige ton code JavaScript en dessous
 * et n'oublie pas de lier ta feuille JavaScript avec ta feuille HTML
**/

// Commence par déclarer les variabls necessaires



// Rédige les conditions ou fonctions juste ici, n'oublie pas le résultat attendu dans le README.md


// const cardButton = document.querySelector('.openCard')
// const cardHeader = document.querySelector('.card')
// const cardContent = document.querySelector('.card_content')
// const cardList = document.querySelector('.card_list')
// const cardFooter = document.querySelector('.card_footer')

// cardButton.addEventListener("click", openCard)

// function openCard() {
//     cardHeader.classList.toggle('active')
//     cardContent.classList.toggle('active')
//     cardList.classList.toggle('active')
//     cardFooter.classList.toggle('active')
// }


const sidebarMenu = document.querySelector('.sidebar_menu')
const sideBar = document.querySelector('.sidebar')


sidebarMenu.addEventListener("click",sidebar_menu)

function sidebar_menu(){
    sideBar.classList.toggle('active')
}