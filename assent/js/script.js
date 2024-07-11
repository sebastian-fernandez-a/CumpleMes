document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            alert('¡Feliz Cumplemes! Te Amo mucho 💖');
        });
    });
});
function playPause(videoId) {
    var video = document.getElementById(videoId);
    var button = video.nextElementSibling;
    if (video.paused) {
        video.play();
        button.style.display = 'none';
    } else {
        video.pause();
        button.style.display = 'block';
    }

    video.onended = function() {
        button.style.display = 'block';
    };
}