const allItems = [
    {
        id: 1,
        title: 'Sermons List',
        keywords: ['keyword1', 'keyword2'],
        imgpath: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/32832133/32832133-1666371635126-ab1bb239f958f.jpg', // Added imgpath
        description: 'Description of the sermons list page' // Added description
    },
    {
        id: 2,
        title: '_SeTTings',
        keywords: ['keyword3', 'keyword4'],
        imgpath: 'path/to/settings-image.png', // Added imgpath
        description: 'Description of the settings page' // Added description
    },
    // ... more items with imgpath and description added
];
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
        resultElement.innerHTML = `<a href="pages/${encodeURIComponent(formattedTitle)}.html">${result.title}</a>`;

        searchResults.appendChild(resultElement);
    });
}


const contentContainer = document.getElementById("content-container"); // Target container

function displayAllItems() {
    contentContainer.innerHTML = ""; // Clear existing content

    allItems.forEach(item => {
        const itemElement = document.createElement("div"); // Container for each item

        // Create elements for title, image, and description
        const titleElement = document.createElement("h2");
        titleElement.textContent = item.title;

        const imgElement = document.createElement("img");
        imgElement.src = item.imgpath;
        imgElement.alt = item.title; // Alternative text for accessibility

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = item.description;

        // Append elements to the item container
        itemElement.appendChild(titleElement);
        itemElement.appendChild(imgElement);
        itemElement.appendChild(descriptionElement);

        // Add the item container to the beginning of the content container
        contentContainer.prepend(itemElement);
    });
}

// Initial display
displayAllItems();

// Function to add a new item (example)
function addNewItem(newItem) {
    allItems.unshift(newItem);
    displayAllItems();
}


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
