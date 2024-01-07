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



// LIGHT-DARK-TOGGLE OLD

const modeToggleBtn = document.getElementById('lightDarktoggle');
const htmlElement = document.documentElement;

modeToggleBtn.addEventListener('click', function () {
    if (htmlElement.hasAttribute('data-theme')) {
        htmlElement.removeAttribute('data-theme');
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
    }
});


// LIGHT-DARK-TOGGLE ___NEW

// Store a reference to the svg elements and button
const darkSvg = document.getElementById('dark-svg');
const lightSvg = document.getElementById('light-svg');
const toggleButton = document.getElementById('toggle-mode-button');

// Set initial state to dark mode
let isDarkMode = true;

// Hide the light SVG initially
lightSvg.style.display = 'none';

function toggleMode() {
    isDarkMode = !isDarkMode;
    darkSvg.style.display = isDarkMode ? 'block' : 'none';
    lightSvg.style.display = isDarkMode ? 'none' : 'block';
    // Optionally change other elements based on mode
}


toggleButton.addEventListener('click', toggleMode);

