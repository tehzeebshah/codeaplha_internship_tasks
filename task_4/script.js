// script.js
document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const trackInfo = document.getElementById('trackInfo');
    
    playButton.addEventListener('click', () => {
        audioPlayer.play();
        trackInfo.textContent = 'Playing: Music Track';
    });
    
    pauseButton.addEventListener('click', () => {
        audioPlayer.pause();
        trackInfo.textContent = 'Paused: Music Track';
    });
});
