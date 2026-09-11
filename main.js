document.querySelectorAll('[data-player]').forEach((player) => {
    const audio = player.querySelector('audio');
    const playButton = player.querySelector('[data-play]');

    playButton.addEventListener('click', () => {
        if (audio.ended) {
            audio.currentTime = 0;
        }

        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    audio.addEventListener('ended', () => {
        audio.currentTime = 0;
        playButton.textContent = '▶︎';
    });

    audio.addEventListener('play', () => { playButton.textContent = '❚❚'; });
    audio.addEventListener('pause', () => { playButton.textContent = '▶︎'; });
});