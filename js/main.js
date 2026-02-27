/**
 * Bolo Fofinho - Script principal
 * Ajusta a velocidade de reprodução dos vídeos do hero
 */
document.addEventListener('DOMContentLoaded', () => {
    const heroVideo = document.querySelector('.hero-video');
    const saboresVideo = document.querySelector('.sabores-hero-video');
    const contatoVideo = document.querySelector('.contato-hero-video');

    if (heroVideo) heroVideo.playbackRate = 0.75;
    if (saboresVideo) saboresVideo.playbackRate = 0.75;
    if (contatoVideo) contatoVideo.playbackRate = 0.75;
});
