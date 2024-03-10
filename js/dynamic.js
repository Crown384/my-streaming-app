
document.addEventListener("DOMContentLoaded", function () {
    const contentContainer = document.getElementById('content-container');
  
    // Build the HTML string dynamically, including correct paths
    let contentHTML = '';
  
    allItems.forEach(item => {
        const relativePath = ('pages/' + item.path + '.html'); // Use relative path from item object
  
        contentHTML += `
            <div class="card scroller-elements dynamic-elements">
                <a href="${relativePath}">
                    <img src="${item.imgpath}" alt="${item.title} Image">
                </a>
                <p class="truncate-1">${item.title}</p>
            </div>
        `;
    });
  
    // Set the content container's innerHTML with the built string
    contentContainer.innerHTML = contentHTML;
  });
  