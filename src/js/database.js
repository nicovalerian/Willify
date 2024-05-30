import { lyrics } from './lyrics.js'; // import lyrics database
const songs = [];

function Song(id, title, artist, album, duration) { // Constructor untuk membuat object Song
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.duration = duration;
    this.albumCoverPath = `src/images/album-cover/${id}.jpg`;
    this.lyrics = lyrics[id].lyrics;
}

function addSong(id, title, artist, album, duration) { // Menambahkan lagu ke dalam array songs
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

export { songs }; // Export array songs