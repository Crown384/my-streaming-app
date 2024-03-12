// Function to filter items based on keywords
function filterItemsByKeywords(items, keywords) {
    return items.filter(item => {
        return keywords.some(keyword => item.keywords.includes(keyword.toLowerCase()));
    });
}

// Function to render filtered items to the specified container
function renderFilteredItems(containerId, filteredItems) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    filteredItems.forEach(item => {
        // Use relative path from item object
        const relativePath = 'pages/' + item.path + '.html';

        const itemHTML = `
        <div>
            <a href="${relativePath}">
                <img src="${item.imgpath}" alt="${item.title} Image">
            </a>
            <p class="truncate truncate-1">${item.title}</p>
        </div>
      `;
        container.innerHTML += itemHTML;
    });
}

// Specify the keywords and container ID for each section
const sectionFilters = [
    { keywords: ['koinonia'], containerId: 'koinonia' },
    { keywords: ['arome', 'osayi'], containerId: 'aromeSermons' },
    // Add more sections as needed
];

// Loop through each section filter and render filtered items
sectionFilters.forEach(filter => {
    const filteredItems = filterItemsByKeywords(allItems, filter.keywords);
    renderFilteredItems(filter.containerId, filteredItems);
});
