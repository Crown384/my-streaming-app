// REFRESH BUTTON -- on Playlist and SinglePlay HTML

const modeToggleBtn = document.getElementById('lightDarktoggle');
const htmlElement = document.documentElement;

modeToggleBtn.addEventListener('click', function () {
    if (htmlElement.hasAttribute('data-theme')) {
        htmlElement.removeAttribute('data-theme');
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
    }
});