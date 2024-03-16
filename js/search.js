function search() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchQuery = searchInput.value.toLowerCase().trim(); // Trim leading/trailing spaces
  
    // Clear previous results
    // searchResults.innerHTML = ''; // Remove this line to keep previously displayed results
  
    // Initialize an array to store all filtered items
    let allFilteredItems = [];
  
    if (!searchQuery) {
      searchResults.innerHTML = ''; // Clear the results if the search query is empty
      return;
    }
  
    // Split the search query into individual terms at spaces
    const searchTerms = searchQuery.split(/\s+/);
  
    // Filter items for each search term and concatenate the results
    searchTerms.forEach(term => {
      const filteredItems = allItems.filter(item => {
        const itemKeywords = item.keywords || [];
        const itemTitle = item.title.toLowerCase();
        const itemDescription = item.description.toLowerCase() || '';
  
        // Check if the current term matches the title, keywords, or description
        const termLowerCase = term.trim();
        return (
          termLowerCase &&
          (itemTitle.includes(termLowerCase) ||
            itemKeywords.some(keyword => keyword.includes(termLowerCase)) ||
            itemDescription.includes(termLowerCase))
        );
      });
  
      allFilteredItems = allFilteredItems.concat(filteredItems);
    });
  
    // Reverse the order of the concatenated filtered items array
    const reversedItems = allFilteredItems.reverse();
  
    // Render search results (adapt HTML structure as needed)
    searchResults.innerHTML = reversedItems.map(item => {
      const formattedTitle = item.title.toLowerCase().replace(/\s+/g, '-');
      const relativePath = `pages/${item.path}.html`; // Assuming path structure
  
      return `
        <div class="search-result">
          <a href="${relativePath}">
            <img src="${item.imgpath}" alt="${item.title}" class="search-result-image">
            <div class="texts">
              <h3 class="search-result-title">${item.title}</h3>
              <p class="truncate truncate-3">${item.description}</p>
            </div>
          </a>
        </div>
      `;
    }).join('');
  }
  
  // Add event listener to search input (adapt event type as needed)
  searchInput.addEventListener('input', search); // Fires on every keystroke
  