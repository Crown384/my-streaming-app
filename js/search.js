
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
  
  