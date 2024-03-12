// // Function to filter items based on keywords
// function filterSermonsByKeywords(keywords) {
//     return allItems.filter(item => {
//         return keywords.some(keyword => item.keywords.includes(keyword.toLowerCase()));
//     });
// }

// // Function to render filtered items to the specified container
// function renderFilteredSermons(koinonia, filteredItems) {
//     const container = document.getElementById('koinonia');
//     container.innerHTML = '';

//     filteredItems.forEach(item => {
//         const sermonHTML = `
//         <div class="sermon-item">
//           <h3>${item.title}</h3>
//           <p>${item.description}</p>
//           <!-- Add other properties as needed -->
//         </div>
//       `;
//         container.innerHTML += sermonHTML;
//     });
// }

// // Specify the keywords to filter by
// const filterKeywords = ['koinonia', 'apostle'];

// // Get filtered items based on keywords
// const filteredSermons = filterSermonsByKeywords(filterKeywords);

// // Render filtered items to the specified container
// renderFilteredSermons('koinonia', filteredSermons);




// const keyword = 'apostle'; // Replace with your desired keyword

// const filteredSermons = allItems.filter(sermon => {
//     const sermonKeywords = sermon.keywords || []; // Handle potential absence of keywords
//     const sermonTitle = sermon.title.toLowerCase(); // Lowercase for case-insensitive search

//     // Check if the keyword is present in title or keywords (case-insensitive)
//     return sermonKeywords.some(keywordInArray => keywordInArray.toLowerCase().includes(keyword)) ||
//         sermonTitle.toLowerCase().includes(keyword);
// });

// const sermonList = document.getElementById('koinonia'); // Assuming you have an element with this ID

// if (filteredSermons.length > 0) {
//     // Build HTML content for matching sermons (you can customize this part)
//     const sermonHtml = filteredSermons.map(sermon => `
//       <div class="sermon">
//         <h3>${sermon.title}</h3>
//         <p>${sermon.description}</p>
//         <a href="${sermon.ytLink}">Watch on Youtube</a>
//       </div>
//     `).join('');

//     sermonList.innerHTML = sermonHtml;
// } else {
//     sermonList.textContent = 'No sermons found containing the keyword "' + keyword + '".';
// }


// // Function to filter items based on keywords
// function filterSermonsByKeywords(keywords) {
//     return allItems.filter(item => {
//         return keywords.some(keyword => item.keywords.includes(keyword.toLowerCase()));
//     });
// }

// // Function to render filtered items to the specified container ('koinonia' in this case)
// function renderFilteredSermons(filteredItems) {
//     const container = document.getElementById('koinonia');
//     container.innerHTML = '';

//     filteredItems.forEach(item => {
//         const sermonHTML = `
//         <div class="sermon-item">
//           <h3>${item.title}</h3>
//           <p>${item.description}</p>
//           <!-- Add other properties as needed -->
//         </div>
//       `;
//         container.innerHTML += sermonHTML;
//     });
// }

// // Specify the keywords to filter by
// const filterKeywords = ['koinonia'];

// // Get filtered items based on keywords
// const filteredSermons = filterSermonsByKeywords(filterKeywords);

// // Render filtered items to the specified container ('koinonia')
// renderFilteredSermons(filteredSermons);




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

    const relativePath = ('pages/' + item.path + '.html'); // Use relative path from item object


    filteredItems.forEach(item => {
        const itemHTML = `
        <div class="card scroller-elements dynamic-elements">
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

