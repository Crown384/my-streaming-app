document.addEventListener("DOMContentLoaded", function () {
    // Select the elements using querySelector
    const title = document.querySelector('title').textContent;
    const description = document.querySelector('meta[name="description"]').getAttribute('content');
    const targetImage = document.querySelector('.target-image');

    // Check if the targetImage is found before trying to access its properties
    if (targetImage) {
        const imgSrc = targetImage.src;

        // Render the content using your custom function
        renderContent(title, imgSrc, description);
    }
});

function renderContent(title, imgSrc, description) {
    // Example: Generate content dynamically
    const contentContainer = document.getElementById('content-container');

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h2>${title}</h2>
        <img src="${imgSrc}" alt="Page Image">
        <p>${description}</p>
    `;
    contentContainer.appendChild(card);
}
