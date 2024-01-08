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


// Check initial system preference
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set initial state and apply initial styles
let isDarkMode = prefersDarkMode;
toggleMode(); // Call once to set initial styles

// Toggle function for both system preference and user clicks
function toggleMode() {
  isDarkMode = !isDarkMode;

  // Toggle theme class on documentElement to apply CSS changes
  document.documentElement.classList.toggle('dark-theme');

  // Toggle SVG icons based on theme
  const lightToggleSvg = document.getElementById('light-toggle-svg');
  const darkSvg = document.getElementById('dark-svg');
  lightToggleSvg.style.display = isDarkMode ? 'block' : 'none';
  darkSvg.style.display = isDarkMode ? 'none' : 'block';

  // Persist user preference if desired (implement logic here)
}

// Add event listener to the toggle button
const toggleButton = document.getElementById('lightDarkToggle');
toggleButton.addEventListener('click', toggleMode);

// Listen for system preference changes
const prefersDarkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
prefersDarkModeQuery.addEventListener('change', toggleMode);
