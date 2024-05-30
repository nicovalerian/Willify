import { songs } from './songs.js';

// Tambah event listener ke setiap card
const songCards = document.querySelectorAll('.card');
songCards.forEach(card => {
    card.addEventListener('click', () => { // Redirect ke songDetail.html dengan query parameter id
        const songId = card.id;
        console.log(songId);
        window.location.href = `/songDetail.html?id=${songId}`;
    });
});

// Dropdown menu fullscreen
const dropdownMenu = document.querySelector('.dropdown-btn');

if (dropdownMenu) {
    dropdownMenu.addEventListener('click', () => {
        const background = document.querySelector('.mega-menu');
        
        if (background) {
            background.classList.toggle('mega-menu-active');
            const otherContent = document.querySelector('.content');
            otherContent.classList.toggle('display-none');

            const exitButton = document.querySelector('.exit-btn');
            exitButton.addEventListener('click', () => {
                background.classList.remove('mega-menu-active');
                otherContent.classList.remove('display-none');
            });
        }
    });
}
