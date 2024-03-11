// Function to filter items based on keywords
function filterSermonsByKeywords(keywords) {
    return allSermons.filter(item => {
        return keywords.some(keyword => item.keywords.includes(keyword.toLowerCase()));
    });
}

// Function to render filtered items to the specified container ('koinonia' in this case)
function renderFilteredSermons(filteredItems) {
    const container = document.getElementById('koinonia');
    container.innerHTML = '';

    filteredItems.forEach(item => {
        const sermonHTML = `
        <div class="sermon-item">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <!-- Add other properties as needed -->
        </div>
      `;
        container.innerHTML += sermonHTML;
    });
}

// Specify the keywords to filter by
const filterKeywords = ['koinonia', 'apostle'];

// Get filtered items based on keywords
const filteredSermons = filterSermonsByKeywords(filterKeywords);

// Render filtered items to the specified container ('koinonia')
renderFilteredSermons(filteredSermons);
