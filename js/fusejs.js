const allItems = [
  {
    title: 'Science of Altars: Beauty of Substitution',
    keywords: ['keyword1', 'keyword2'],
    imgpath: 'https://i.ytimg.com/vi/mgnUXY9cp70/hqdefault.jpg', // Added imgpath
    description: 'Altar Basic Definition', // Added description
    path: "singlePlay/science-of-altars-beauty-of-substitution"
  },
  {
    title: 'Altar: Basic Definition',
    keywords: ['keyword1', 'keyword2'],
    imgpath: 'https://i.ytimg.com/vi/ezX-Ngwznho/hqdefault.jpg', // Added imgpath
    description: 'Altar Basic Definition', // Added description
    path: "singlePlay/altar-basic-definition"
  },
  {
    id: 3,
    title: 'Sermons List',
    keywords: ['keyword1', 'keyword2'],
    imgpath: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/32832133/32832133-1666371635126-ab1bb239f958f.jpg', // Added imgpath
    description: 'list page', // Added description
    path: "sermons-list"
  },
  {
    id: 2,
    title: 'Latest',
    keywords: ['keyword1', 'keyword2'],
    imgpath: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/32832133/32832133-1666371635126-ab1bb239f958f.jpg', // Added imgpath
    description: 'the sermons list page LATEST', // Added description
    path: "playlists/test"
  },
  // ... more items with imgpath and description added
];

// SEARCH FUNCTION


function search() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const searchQuery = searchInput.value.toLowerCase().trim(); // Trim leading/trailing spaces

  // Clear previous results
  searchResults.innerHTML = '';

  if (!searchQuery) {
    return; // No need to filter or render if search query is empty
  }

  const filteredItems = allItems.filter(item => {
    const searchWords = searchQuery.split(/\s+/); // Split search query into individual words
    const itemKeywords = item.keywords || []; // Handle potential absence of keywords
    const itemTitle = item.title.toLowerCase();
    const itemDescription = item.description.toLowerCase() || ''; // Handle potential absence of description

    const matchesAllWords = searchWords.every(word => {
      // Check for word matches in title, keywords, and description
      return itemTitle.includes(word) || itemKeywords.some(keyword => keyword.includes(word)) || itemDescription.includes(word);
    });

    return matchesAllWords; // Return true only if all search words are matched
  });

  // Render search results (adapt HTML structure as needed)
  searchResults.innerHTML = filteredItems.map(item => {
    const formattedTitle = item.title.toLowerCase().replace(/\s+/g, '-');
    const relativePath = `pages/${item.path}.html`; // Assuming path structure

    return `
      <div class="search-result">
        <a href="${relativePath}">
          <img src="${item.imgpath}" alt="${item.title}" class="search-result-image">
          <h3 class="search-result-title">${item.title}</h3>
        </a>
      </div>
    `;
  }).join('');
}

// Add event listener to search input (adapt event type as needed)
searchInput.addEventListener('input', search); // Fires on every keystroke




// document.addEventListener("DOMContentLoaded", function () {
//     const itemsContainer = document.getElementById('content-container');

//     // Assuming `allItems` is a valid array of objects with necessary properties
//     if (!itemsContainer || !Array.isArray(allItems)) {
//       // Handle potential errors here
//       return;
//     }

//     const contentHTML = allItems.map(item => {
//       const relativePath = `pages/${item.path}.html`; // Use relative path

//       return `<div>
//           <a href="${relativePath}">
//             <img src="${item.imgpath}" alt="${item.title} Image">
//           </a>
//           <p>${item.title}</p>
//         </div>`;
//     }).join('');

//     // Set the content container's innerHTML
//     itemsContainer.innerHTML = contentHTML;
// });


document.addEventListener("DOMContentLoaded", function () {
  const contentContainer = document.getElementById('content-container');

  // Build the HTML string dynamically, using string concatenation for efficiency
  let contentHTML = '';

  allItems.forEach(item => {
    const relativePath = `pages/${item.path}.html`; // Use relative path from item object

    contentHTML += `
        <div">
          <a href="${relativePath}">
            <img src="${item.imgpath}" alt="${item.title} Image">
          </a>
          <p>${item.title}</p>
        </div>
      `;
  });

  // Set the content container's innerHTML directly, avoiding unnecessary assignment
  contentContainer.innerHTML = contentHTML;
});


