// Combine mousedown and touchstart events
document.addEventListener('mousedown', handleLinkFocus);
document.addEventListener('touchstart', handleLinkFocus);

function handleLinkFocus(event) {
    if (event.target.tagName === 'A') {
        event.target.blur(); // Remove focus immediately
    }
}

