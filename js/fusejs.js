const allItems = [
    {
        id: 3,
        title: 'Sermons List',
        keywords: ['keyword1', 'keyword2'],
        imgpath: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/32832133/32832133-1666371635126-ab1bb239f958f.jpg', // Added imgpath
        description: 'Description of the sermons list page', // Added description
        path: "sermons-list"
    },
    {
        id: 2,
        title: 'Latest',
        keywords: ['keyword1', 'keyword2'],
        imgpath: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/32832133/32832133-1666371635126-ab1bb239f958f.jpg', // Added imgpath
        description: 'Description of the sermons list page LATEST', // Added description
        path: "playlists/test"
    },
    // ... more items with imgpath and description added
];

// SEARCH FUNCTION

function search() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');

    // Clear previous results
    searchResults.innerHTML = '';

    // Filter items based on the search input and keywords
    const results = allItems.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(searchInput);
        const keywordMatch = item.keywords.some(keyword => keyword.includes(searchInput));
        return titleMatch || keywordMatch;
    });

    // Display results
    results.forEach(result => {
        const resultElement = document.createElement('div');

        // Generate links based on the lowercase title of the page, replacing spaces with hyphens
        const formattedTitle = result.title.toLowerCase().replace(/\s+/g, '-');
        const relativePath = ('/pages/' + result.path + '.html') || ('pages/' + formattedTitle + '.html'); // Use relative path from result object

        resultElement.innerHTML = `<a href="${relativePath}">${result.title}</a>`;
        searchResults.appendChild(resultElement);
    });
}


// DYNAMIC-CONTENT

document.addEventListener("DOMContentLoaded", function () {
    const contentContainer = document.getElementById('content-container');

    // Build the HTML string dynamically, including correct paths
    let contentHTML = '';

    allItems.forEach(item => {
        const formattedTitle = item.title.toLowerCase().replace(/\s+/g, '-');
        const relativePath = ('pages/' + item.path + '.html') || ('pages/' + formattedTitle + '.html'); // Use relative path from item object

        contentHTML += `
            <div class="card scroller-elements dynamic-elements">
                <a href="${relativePath}">
                    <img src="${item.imgpath}" alt="${item.title} Image">
                </a>
                <p>${item.description}</p>
            </div>
        `;
    });

    // Set the content container's innerHTML with the built string
    contentContainer.innerHTML = contentHTML;
});



//  function search() {
//     const searchInput = document.getElementById('searchInput').value.toLowerCase(); // Convert search input to lowercase
//     const searchResults = document.getElementById('searchResults');

//     // Clear previous results
//     searchResults.innerHTML = '';

//     // Filter items based on the search input and keywords
//     const results = allItems.filter(item => {
//         const titleMatch = item.title.toLowerCase().includes(searchInput);
//         const keywordMatch = item.keywords.some(keyword => keyword.includes(searchInput));
//         return titleMatch || keywordMatch;
//     });

//     // Display results
//     results.forEach(result => {
//         const resultElement = document.createElement('div');

//         // Generate links based on the lowercase title of the page, replacing spaces with hyphens
//         const formattedTitle = result.title.toLowerCase().replace(/\s+/g, '-');
//         resultElement.innerHTML = `<a href="pages/${encodeURIComponent(formattedTitle)}.html">${result.title}</a>`;

//         searchResults.appendChild(resultElement);
//     });
//  }



//hjbkjbvkjbkjbjkbjkbkjb


// // Include Fuse.js (can also be loaded from a local file)
// const fuse = require('fuse.js');

// // Prepare page data (replace with your actual page content and ensure each page has an "id" property)
// const pages = [
//     {
//         id: 1,
//         title: "sermons list",
//         keywords: "prophetic, impartation",
//         content: "Prophetic impartation stands as a conduit of divine guidance, carrying the timeless wisdom, insights, and revelations gifted by God through His chosen vessels. Its significance lies in its ability to illuminate our paths, offering clarity, direction, and encouragement in times of uncertainty."
//     },
//     {
//         id: 2,
//         title: "_settings",
//         keywords: "apostle femi lazarus, about us",
//         content: "Sphere of Light Church is a ministry pastored by Apostle Femi Lazarus with a mandate to Raise God's End Time Armies for the last days"
//     },
//     // ... (add more pages)
// ];

// // Create Fuse.js index
// const fuseIndex = new Fuse(pages, {
//     keys: [
//         "title",
//         "keywords",
//         "content"
//     ],
//     // Customize options for matching and scoring here
// });

// // Handle search input
// const searchInput = document.getElementById("search-input");
// const searchResults = document.getElementById("search-results");

// searchInput.addEventListener("input", () => {
//     const query = searchInput.value.toLowerCase(); // Case-insensitive search

//     if (query) {
//         const results = fuseIndex.search(query);

//         searchResults.innerHTML = ""; // Clear previous results

//         results.forEach(result => {
//             const item = document.createElement("li");
//             const link = document.createElement("a");
//             //   link.href = `pages/page-${result.item.id}.html`; // Replace with your actual page paths
//             link.href = `pages/${encodeURIComponent(result.item.title)}.html`;

//             link.textContent = `${result.item.title} - ${result.item.keywords}`;
//             item.appendChild(link);
//             searchResults.appendChild(item);
//         });
//     } else {
//         searchResults.innerHTML = ""; // Clear results if no query
//     }
// });
