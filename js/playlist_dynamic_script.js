
document.addEventListener("DOMContentLoaded", function () {
    const contentContainer = document.getElementById('playlist-container');
  
    // Build the HTML string dynamically, including correct paths
    let contentHTML = '';
  
    allPlaylists.forEach(item => {
        const relativePath = ('pages/' + item.path + '.html'); // Use relative path from item object
  
        contentHTML += `
            <div class="card scroller-elements dynamic-elements">
                <a href="${relativePath}">
                    <img src="${item.imgpath}" alt="${item.title} Image">
                </a>
                <p>${item.title}</p>
            </div>
        `;
    });
  
    // Set the content container's innerHTML with the built string
    contentContainer.innerHTML = contentHTML;
  });
  