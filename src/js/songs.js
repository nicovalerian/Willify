import { songs } from './database.js'; // Import array songs dari database.js

function generateTableRow(song) { // Func return baris tabel songs
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

function populateTable() { // Menambahkan baris tabel ke dalam tableContainer
    const tableContainer = document.querySelector('.table-container');

    if (tableContainer) {
        songs.forEach(song => {
            tableContainer.innerHTML += generateTableRow(song);
        });
    }

    const tableRows = document.querySelectorAll('.table-row');
    if (tableRows) {
        tableRows.forEach(row => {
            const songNumberCell = row.querySelector(`#song-number-${row.id.split('-')[1]}`);
            const originalContent = songNumberCell.textContent;

            row.addEventListener('mouseover', () => {
                songNumberCell.textContent = "▶";
            });

            row.addEventListener('mouseout', () => {
                songNumberCell.textContent = originalContent;
            });

            row.addEventListener('click', () => {
                const songId = row.id.split('-')[1];
                window.location.href = `/songDetail.html?id=${songId}`;
            });
        });
    } else {
        console.log('No table rows found!');
    }
}

document.addEventListener('DOMContentLoaded', populateTable);

// Tambah event listener ke setiap card
const songCards = document.querySelectorAll('.card');
songCards.forEach(card => {
    card.addEventListener('click', () => { // Redirect ke songDetail.html dengan query parameter id
        const songId = card.id;
        console.log(songId);
        window.location.href = `/songDetail.html?id=${songId}`;
    });
});

export { songs };