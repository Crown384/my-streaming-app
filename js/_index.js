const allItems = [
  {
    title: 'Altars: PEACE OFFERING',
    keywords: ['keyword1', 'keyword2'],
    imgpath: 'https://i.ytimg.com/vi/e_C3w6eNyAE/hqdefault.jpg', // Added imgpath
    description: 'Peace Offering', // Added description
    path: "singlePlay/peace-offering"
  },
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


// document.addEventListener("DOMContentLoaded", function () {
//   const contentContainer = document.getElementById('content-container');

//   // Build the HTML string dynamically, using string concatenation for efficiency
//   let contentHTML = '';

//   allItems.forEach(item => {
//     const relativePath = `pages/${item.path}.html`; // Use relative path from item object

//     contentHTML += `
//         <div">
//           <a href="${relativePath}">
//             <img src="${item.imgpath}" alt="${item.title} Image">
//           </a>
//           <p>${item.title}</p>
//         </div>
//       `;
//   });

//   // Set the content container's innerHTML directly, avoiding unnecessary assignment
//   contentContainer.innerHTML = contentHTML;
// });


