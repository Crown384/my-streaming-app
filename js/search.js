
// // SEARCH FUNCTION


// function search() {
//     const searchInput = document.getElementById('searchInput');
//     const searchResults = document.getElementById('searchResults');
//     const searchQuery = searchInput.value.toLowerCase().trim(); // Trim leading/trailing spaces
  
//     // Clear previous results
//     searchResults.innerHTML = '';
  
//     if (!searchQuery) {
//       return; // No need to filter or render if search query is empty
//     }
  
//     const filteredItems = allItems.filter(item => {
//       const searchWords = searchQuery.split(/\s+/); // Split search query into individual words
//       const itemKeywords = item.keywords || []; // Handle potential absence of keywords
//       const itemTitle = item.title.toLowerCase();
//       const itemDescription = item.description.toLowerCase() || ''; // Handle potential absence of description
  
//       const matchesAllWords = searchWords.every(word => {
//         // Check for word matches in title, keywords, and description
//         return itemTitle.includes(word) || itemKeywords.some(keyword => keyword.includes(word)) || itemDescription.includes(word);
//       });
  
//       return matchesAllWords; // Return true only if all search words are matched
//     });
  
//     // Render search results (adapt HTML structure as needed)
//     searchResults.innerHTML = filteredItems.map(item => {
//       const formattedTitle = item.title.toLowerCase().replace(/\s+/g, '-');
//       const relativePath = `pages/${item.path}.html`; // Assuming path structure
  
//       return `
//         <div class="search-result">
//           <a href="${relativePath}">
//             <img src="${item.imgpath}" alt="${item.title}" class="search-result-image">
//             <h3 class="search-result-title">${item.title}</h3>
//           </a>

//           <a href="${item.downLink}">
//             <span class="material-symbols-sharp">download_for_offline</span>
//         </a>
//         </div>
//       `;
//     }).join('');
//   }
  
//   // Add event listener to search input (adapt event type as needed)
//   searchInput.addEventListener('input', search); // Fires on every keystroke
  

// function search() {
//   const searchInput = document.getElementById('searchInput');
//   const searchResults = document.getElementById('searchResults');
//   const rawQuery = searchInput.value.toLowerCase().trim(); // Trim leading/trailing spaces

//   // Clear previous results
//   searchResults.innerHTML = '';

//   if (!rawQuery) {
//     return; // No need to filter or render if search query is empty
//   }

//   // Split the search query into individual words, accounting for quoted phrases
//   const searchWords = splitQueryIntoWords(rawQuery);

//   const filteredItems = allItems.filter(item => {
//     const itemTitle = item.title.toLowerCase();
//     const itemKeywords = item.keywords || []; // Handle potential absence of keywords
//     const itemDescription = item.description.toLowerCase() || ''; // Handle potential absence of description

//     // Check for each search word (case-insensitive)
//     return searchWords.every(word =>
//       itemTitle.includes(word) || itemKeywords.some(keyword => keyword.includes(word)) || itemDescription.includes(word)
//     );
//   });

//   // Render search results (adapt HTML structure as needed)
//   searchResults.innerHTML = filteredItems.map(item => {
//     const formattedTitle = item.title.toLowerCase().replace(/\s+/g, '-');
//     const relativePath = `pages/${item.path}.html`; // Assuming path structure

//     return `
//       <div class="search-result">
//         <a href="${relativePath}">
//           <img src="${item.imgpath}" alt="${item.title}" class="search-result-image">
//           <h3 class="search-result-title">${item.title}</h3>
//         </a>

//         <a href="${item.downLink}">
//           <span class="material-symbols-sharp">download_for_offline</span>
//         </a>
//       </div>
//     `;
//   }).join('');
// }

// // Helper function to split query into words, considering quoted phrases

// function splitQueryIntoWords(query) {
//   const words = [];
//   let currentWord = ''; // Build up the current word

//   for (let i = 0; i < query.length; i++) {
//     const char = query[i];
//     if (char === '"') { // Start or end of quoted phrase
//       if (!currentWord || currentWord.endsWith(' ')) {
//         // Start a new quoted word
//         currentWord += char;
//       } else if (currentWord.startsWith('"')) {
//         // End quoted word and add it to results
//         words.push(currentWord.slice(1, -1)); // Remove quotes
//         currentWord = '';
//       }
//     } else if (/\s/.test(char)) { // Whitespace (including comma)
//       if (currentWord) {
//         words.push(currentWord);
//         currentWord = '';
//       }
//     } else {
//       // Regular character, add to current word
//       currentWord += char;
//     }
//   }

//   if (currentWord) {
//     words.push(currentWord);
//   }

//   return words;
// }


// // Add event listener to search input (adapt event type as needed)
// searchInput.addEventListener('input', search); // Fires on every keystroke


function search() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const searchQuery = searchInput.value.toLowerCase().trim(); // Trim leading/trailing spaces

  // Clear previous results
  searchResults.innerHTML = '';

  if (!searchQuery) {
      return; // No need to filter or render if search query is empty
  }

  // Split the search query into individual terms at commas
  const searchTerms = searchQuery.split(/\s*,\s*/);

  const filteredItems = allItems.filter(item => {
      const itemKeywords = item.keywords || [];
      const itemTitle = item.title.toLowerCase();
      const itemDescription = item.description.toLowerCase() || '';

      // Check if any of the search terms are not empty or a comma and match the title, keywords, or description
      return searchTerms.some(term => {
          const termLowerCase = term.trim();
          return (
              (termLowerCase && termLowerCase !== ',') &&
              (itemTitle.includes(termLowerCase) ||
                  itemKeywords.some(keyword => keyword.includes(termLowerCase)) ||
                  itemDescription.includes(termLowerCase))
          );
      });
  });

  // Reverse the order of filteredItems array
  const reversedItems = filteredItems.reverse();

  // Render search results (adapt HTML structure as needed)
  searchResults.innerHTML = reversedItems.map(item => {
      const formattedTitle = item.title.toLowerCase().replace(/\s+/g, '-');
      const relativePath = `pages/${item.path}.html`; // Assuming path structure

      return `
          <div class="search-result">
              <a href="${relativePath}">
                  <img src="${item.imgpath}" alt="${item.title}" class="search-result-image">
                  <h3 class="search-result-title">${item.title}</h3>
              </a>
              <a href="${item.downLink}">
                  <span class="material-symbols-sharp">download_for_offline</span>
              </a>
          </div>
      `;
  }).join('');
}

// Add event listener to search input (adapt event type as needed)
searchInput.addEventListener('input', search); // Fires on every keystroke
