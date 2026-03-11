// Seleciona os elementos do player para atualizar quando clicar em um card
const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const playerImg = document.getElementById('player-img');

document.querySelectorAll('.spotify-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('.card-title').innerText;
        const artist = card.querySelector('.card-desc').innerText;
        const img = card.querySelector('img').src;

        playerTitle.innerText = title;
        playerArtist.innerText = artist;
        playerImg.src = img;
    });
});

// Botão Play/Pause
const playBtn = document.querySelector('.main-play');
playBtn.addEventListener('click', () => {
    playBtn.classList.toggle('fa-circle-play');
    playBtn.classList.toggle('fa-circle-pause');
});