document.addEventListener("DOMContentLoaded", function () {
    const pagesFolder = '/pages/';

    // Fetch the list of HTML files in the 'pages' folder
    fetch(`${pagesFolder}?t=${new Date().getTime()}`)
        .then(response => response.text())
        .then(htmlList => {
            // Extract the filenames and get the latest one
            const filenames = htmlList.split('\n').filter(filename => filename.endsWith('.html'));
            const latestFile = filenames.length > 0 ? filenames[filenames.length - 1] : null;

            if (latestFile) {
                // Load and display the content of the latest HTML file
                fetch(`${pagesFolder}${latestFile}`)
                    .then(response => response.text())
                    .then(htmlContent => {
                        // Parse HTML content to extract title, image, and description
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(htmlContent, 'text/html');
                        const title = doc.querySelector('title').textContent;
                        const imgSrc = doc.querySelector('img').src;
                        const description = doc.querySelector('meta[name="description"]').getAttribute('content');

                        // Display the content on the page
                        renderContent(title, imgSrc, description);
                    })
                    .catch(error => console.error('Error fetching HTML file:', error));
            }
        })
        .catch(error => console.error('Error fetching HTML file list:', error));

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
});
