import { lyrics } from './lyrics.js';
const songs = [];

function Song(id, title, artist, album, duration) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.duration = duration;
    this.albumCoverPath = `src/images/album-cover/${id}.jpg`;
    this.lyrics = lyrics[id].lyrics;
}

function addSong(id, title, artist, album, duration) {
    songs.push(new Song(id, title, artist, album, duration));
}

// Song database
addSong(0, 'Ocean & Engines', 'NIKI', 'Nicole', '5:36');
addSong(1, 'Cruel Summer', 'Taylor Swift', 'Lover', '2:58');
addSong(2, 'Not Like Us', 'Kendrick Lamar', 'Not Like Us', '4:34');
addSong(3, 'Snooze', 'SZA', 'SOS', '3:21');
addSong(4, 'Dance the Night', 'Dua Lipa', 'Barbie The Album', '2:56');
addSong(5, 'Armageddon', 'aespa', 'Armageddon - The 1st Album', '3:16');
addSong(6, 'Magnetic', 'ILLIT', 'SUPER REAL ME', '2:40');
addSong(7, 'SPOT', 'ZICO, JENNIE', 'SPOT!', '2:47');
addSong(8, 'MAESTRO', 'SEVENTEEN', '17 IS RIGHT HERE', '3:18');
addSong(9, 'SHEESH', 'BABYMONSTER', 'BABYMONS7ER', '2:50');

function generateTableRow(song) {
    return `
        <div class="table-row" id="row-${song.id}">
            <div class="cell" id="song-number-${song.id}">${song.id + 1}</div>
            <div class="cell" id="song-title-${song.id}">
                <div class="song-info">
                    <img src="${song.albumCoverPath}" alt="${song.title}" class="album-cover">
                    <div class="text-info">
                        <div class="title">${song.title}</div>
                        <div class="artist">${song.artist}</div>
                    </div>
                </div>
            </div>
            <div class="cell" id="song-album-${song.id}">${song.album}</div>
            <div class="cell" id="song-duration-${song.id}">${song.duration}</div>
        </div>
    `;
}

function populateTable() {
    const tableContainer = document.querySelector('.table-container');
    songs.forEach(song => {
        tableContainer.innerHTML += generateTableRow(song);
    });
}

document.addEventListener('DOMContentLoaded', populateTable);

