// TEXT COPY && IMAGE CHROME-MENU LONG-PRESS

// Combine mousedown and touchstart events
document.addEventListener('mousedown', handleLinkFocus);
document.addEventListener('touchstart', handleLinkFocus);

function handleLinkFocus(event) {
    if (event.target.tagName === 'A') {
        event.target.blur(); // Remove focus immediately
    }
}

document.addEventListener('contextmenu', (event) => {
    if (event.target.tagName === 'A') {
        event.preventDefault();
    }
});

document.addEventListener('touchstart', (event) => {
    if (event.target.tagName === 'A') {
        event.preventDefault();
    }
});

element.style.userSelect = 'none';


document.addEventListener('contextmenu', (event) => {
    if (event.target.matches('img')) {
        event.preventDefault();
    }
});

document.addEventListener('touchstart', (event) => {
    if (event.target.matches('img')) {
        // Prevent default behavior (Chrome menu)
        event.preventDefault();
        // Add your custom long press interaction here
        // (e.g., show custom menu, trigger action)
    }
});



// LIGHT-DARK-TOGGLE

const modeToggleBtn = document.getElementById('lightDarktoggle');
const htmlElement = document.documentElement;

modeToggleBtn.addEventListener('click', function () {
    if (htmlElement.hasAttribute('data-theme')) {
        htmlElement.removeAttribute('data-theme');
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
    }
});