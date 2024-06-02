import { songs } from './database.js'; // Import array songs dari databasee

// Tombol balik ke page sebelumnya
const backButton = document.querySelector('.back-arrow-btn');
backButton.addEventListener('click', () => {    
    window.history.go(-1);
});

// Ambil query parameter id dari URL
const urlParams = new URLSearchParams(window.location.search);
const songId = urlParams.get('id');
const song = songs[songId];

// Update konten song detail
const albumCover = document.querySelector('.album-cover-img');
const songTitle = document.querySelector('.song-title');
const songArtist = document.querySelector('.artist-subtitle');
const songAlbum = document.querySelector('.album-subtitle');
const songDuration = document.querySelector('.song-duration');
const songLyrics = document.querySelector('.lyrics-text');

// Ganti newline (\n) jadi <br> pada lyrics
const songLyricsBr = song.lyrics.split('\n').join('<br>').slice(5);

if (song) {
    albumCover.src = song.albumCoverPath;
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    songAlbum.textContent = song.album;
    songDuration.textContent = song.duration;
    songLyrics.innerHTML = songLyricsBr;
} else {
    console.log('No song found!');
}