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

const modeToggleBtn = document.getElementById('lightDarkToggle');
const htmlElement = document.documentElement;

modeToggleBtn.addEventListener('click', function () {
    if (htmlElement.hasAttribute('data-theme')) {
        htmlElement.removeAttribute('data-theme');
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
    }
});


// // // LIGHT-DARK-TOGGLE ___OLD--2

// // // Store a reference to the svg elements and button
// // const darkSvg = document.getElementById('dark-svg');
// // const lightSvg = document.getElementById('light-svg');
// // const toggleButton = document.getElementById('toggle-mode-button');

// // // Set initial state to dark mode
// // let isDarkMode = true;

// // // Hide the light SVG initially
// // lightSvg.style.display = 'none';

// // function toggleMode() {
// //     isDarkMode = !isDarkMode;
// //     darkSvg.style.display = isDarkMode ? 'block' : 'none';
// //     lightSvg.style.display = isDarkMode ? 'none' : 'block';
// //     // Optionally change other elements based on mode
// // }


// // Check initial system preference
// const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// // Set initial state and apply initial styles
// let isDarkMode = prefersDarkMode;
// toggleMode(); // Call once to set initial styles

// // Toggle function for both system preference and user clicks
// function toggleMode() {
//   isDarkMode = !isDarkMode;
//   document.body.classList.toggle('dark-mode'); // Toggle CSS class for prefers-color-scheme

//   // Toggle SVG icons
//   const lightToggleSvg = document.getElementById('light-toggle-svg');
//   const darkSvg = document.getElementById('dark-svg');
//   lightToggleSvg.style.display = isDarkMode ? 'none' : 'block';
//   darkSvg.style.display = isDarkMode ? 'block' : 'none';

//   // Persist user preference if desired
//   if (isDarkMode !== prefersDarkMode) {
//     // Store user's preference in local storage or cookies
//   }
// }

// // Add event listener to SVG for user-initiated toggle
// lightToggleSvg.addEventListener('click', toggleMode);
// darkSvg.addEventListener('click', toggleMode);


// function toggleMode() {
//     toggleModeSVG(); // Call the function to toggle SVGs
//     toggleDarkLightMode(); // Call another function for dark/light mode toggle
// }

// function toggleModeSVG() {
//     const lightModeSVG = document.getElementById('light-toggle-svg');
//     const darkModeSVG = document.getElementById('dark-svg');

//     if (lightModeSVG.style.display !== 'none') {
//         lightModeSVG.style.display = 'none';
//         darkModeSVG.style.display = 'block';
//     } else {
//         lightModeSVG.style.display = 'block';
//         darkModeSVG.style.display = 'none';
//     }
// }

// function toggleDarkLightMode() {
//     // Your code to toggle dark/light mode goes here
//     // This function will handle the dark/light mode toggle
//     // For instance, changing background color, text color, etc.


// }


// Check initial system preference
// const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// // Set initial state and apply initial styles
// let isDarkMode = prefersDarkMode;
// toggleMode(); // Call once to set initial styles

// // Toggle function for both system preference and user clicks
// function toggleMode() {
//   isDarkMode = !isDarkMode;

//   // Toggle theme class on documentElement
//   document.documentElement.classList.toggle('dark-theme');

//   // Toggle SVG icons (if using a custom toggle button, update its appearance here)
//   const lightToggleSvg = document.getElementById('light-toggle-svg');
//   const darkSvg = document.getElementById('dark-svg');
//   lightToggleSvg.style.display = isDarkMode ? 'none' : 'block';
//   darkSvg.style.display = isDarkMode ? 'block' : 'none';

//   // Persist user preference if desired
//   if (isDarkMode !== prefersDarkMode) {
//     // Store user's preference in local storage or cookies
//   }
// }

// // Add event listener to the toggle button (modify for your button's ID)
// const modeToggleBtn = document.getElementById('lightDarktoggle');
// modeToggleBtn.addEventListener('click', toggleMode);

// // Listen for system preference changes
// const prefersDarkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
// prefersDarkModeQuery.addEventListener('change', toggleMode);


// const toggleButton = document.getElementById('lightDarkToggle');
// const darkSVG = document.getElementById('dark-svg');
// const lightSVG = document.getElementById('light-toggle-svg');
// const htmlElement = document.documentElement;

// function toggleTheme() {
//     if (htmlElement.getAttribute('dark-theme') === 'dark') {
//         htmlElement.setAttribute('dark-theme', 'light');
//         darkSVG.style.display = 'none';
//         lightSVG.style.display = 'block';
//     } else {
//         htmlElement.setAttribute('dark-theme', 'dark');
//         darkSVG.style.display = 'block';
//         lightSVG.style.display = 'none';
//     }
// }

// toggleButton.addEventListener('click', toggleTheme);

// // Check user's preference for light mode
// const prefersLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;

// // Set initial theme based on user's preference
// if (prefersLightMode) {
//     htmlElement.setAttribute('dark-theme', 'light'); // Set light theme if prefers light mode
//     darkSVG.style.display = 'none';
//     lightSVG.style.display = 'block';
// } else {
//     htmlElement.setAttribute('dark-theme', 'dark'); // Set dark theme by default
//     darkSVG.style.display = 'block';
//     lightSVG.style.display = 'none';
// }

// // Click function for toggling the theme
// toggleButton.addEventListener('click', toggleTheme);
