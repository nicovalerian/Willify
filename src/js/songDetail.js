import { songs } from './songs.js'; // Import array songs dari databasee

// Tombol balik ke songs page
const backButton = document.querySelector('.back-arrow-btn');
backButton.addEventListener('click', () => {    
    window.location.href = '/songs.html';
});