const audio = document.getElementById("audio-link");
const currentTimeDisplay = document.getElementById("currentTime");
const endTimeDisplay = document.getElementById("endTime");
const loadingProgress = document.querySelector(".loading-progress");
const playPauseButtons = document.querySelectorAll(".playPauseButton");
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
let loopButton = document.querySelector('.LoopButton');
const progressBar = document.getElementById('progress-bar');
let isLoopEnabled = false;
let isDragging = false;


// function handleMouseDown(event) {
//   event.preventDefault();
//   isDragging = true;
//   document.addEventListener('mousemove', handleMouseMove);
// }

// function handleMouseMove(event) {
//   if (!isDragging) return;
//   const progressPercentage = (event.clientX - progressBar.offsetLeft) / progressBar.offsetWidth;
//   const clampedPercentage = Math.max(0, Math.min(1, progressPercentage));
//   audio.currentTime = clampedPercentage * audio.duration;
//   updateProgressVisual(clampedPercentage);
// }

// function handleMouseUp() {
//   isDragging = false;
//   document.removeEventListener('mousemove', handleMouseMove);
// }

// progressBar.addEventListener('mousedown', handleMouseDown);
// document.addEventListener('mouseup', handleMouseUp);

// // Define your updateProgressVisual function to change the appearance of the progress bar based on the clamped percentage
// // This could involve changing the width or color of a section within the #progress-bar element
// function updateProgressVisual(clampedPercentage) {
//   // Customize this logic based on your desired visual effect
//   progressBar.querySelector('.progress-fill').style.width = `${clampedPercentage * 100}%`;
// }

// progess bar


audio.addEventListener('timeupdate', updateProgress);
// end of progress bar
function handleTouchStart(event) {
    event.preventDefault();
    isDragging = true;
    document.addEventListener('touchmove', handleTouchMove);
}

function handleTouchMove(event) {
    if (!isDragging) return;
    const touchPosition = event.touches[0].clientX;
    const progressPercentage = (touchPosition - progressBar.offsetLeft) / progressBar.offsetWidth;
    const clampedPercentage = Math.max(0, Math.min(1, progressPercentage));
    audio.currentTime = clampedPercentage * audio.duration;
    updateProgressVisual(clampedPercentage);
}

function handleTouchEnd() {
    isDragging = false;
    document.removeEventListener('touchmove', handleTouchMove);
}

progressBar.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchend', handleTouchEnd);

// Define your updateProgressVisual function to change the appearance of the progress bar
// ...


//ToggglePlayPause

function togglePlayPause() {
    if (audio.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
}

function playAudio() {
    audio.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';
}

function pauseAudio() {
    audio.pause();
    playButton.style.display = 'block';
    pauseButton.style.display = 'none';
}

// Optional: You can add event listeners to track when the audio ends.
audio.addEventListener('ended', function () {
    playButton.style.display = 'block';
    pauseButton.style.display = 'none';
});



audio.addEventListener("timeupdate", function() {
  currentTimeDisplay.textContent = formatTime(audio.currentTime);
  endTimeDisplay.textContent = formatTime(audio.duration);

  const progress = (audio.currentTime / audio.duration) * 100;
  loadingProgress.style.width = `${progress}%`;
});

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function rewindAudio() {
    audio.currentTime -= 10;
}

function forwardAudio() {
    audio.currentTime += 10;
}


// Toggle and Display Color -- LOOP


function toggleLoop() {
    isLoopEnabled = !isLoopEnabled;
    if (isLoopEnabled) {
        loopButton.querySelector('path').setAttribute('fill', '#008000'); // Change to your desired color hexcode
        audio.loop = true; // Enable loop
    } else {
        loopButton.querySelector('path').setAttribute('fill', '#1C274C'); // Change to original color hexcode
        audio.loop = false; // Disable loop
    }
}
