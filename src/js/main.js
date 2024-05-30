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