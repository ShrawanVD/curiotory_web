document.addEventListener("DOMContentLoaded", () => {
  fetchTeachers();
});

function fetchTeachers() {
  const loadingSpinner = document.getElementById('loadingSpinner');
  const blogContainer = document.querySelector('.blog-container');

  loadingSpinner.style.display = 'block';
  blogContainer.style.display = 'none';
  // https://backendapi-ay7s.onrender.com/api/blogs
  fetch("https://backendapi-ay7s.onrender.com/api/blogs")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      if (!data || !Array.isArray(data)) {
        throw new Error("Invalid data format");
      }
      renderTeachers(data);
      loadingSpinner.style.display = 'none';
      blogContainer.style.display = 'flex';
    })
    .catch((error) => {
      console.error("Error fetching or processing data:", error.message);
      // Display a user-friendly error message on the page if needed
    });

  function renderTeachers(blogPosts) {
    blogPosts.forEach((post) => {
        // Create elements for the blog card
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.style.display = 'flex';
        card.style.flexWrap = 'wrap';
        card.onclick = function() {
          openBlog(post.id); // Assuming openBlog is defined somewhere
        };

        const image = document.createElement('img');
        image.setAttribute('src', post.imageUrl);
        image.alt = "Blog Image";

        const content = document.createElement('div');
        content.style.fontFamily = "'Poppins', sans-serif";

        const title = document.createElement('h2');
        title.textContent = post.title;

        const subtitle = document.createElement('h3');
        subtitle.textContent = post.date;

        const hr = document.createElement('hr');

        const intro = document.createElement('p');
        intro.style.textAlign = 'justify';
        intro.className = 'cardtitle';
        intro.textContent = post.intro;

        const readMore = document.createElement('h3');
        readMore.className = 'read-more';
        readMore.textContent = 'Read More >>';

        // Append elements to the content div
        content.appendChild(title);
        content.appendChild(subtitle);
        content.appendChild(hr);
        content.appendChild(intro);
        content.appendChild(readMore);

        // Append image and content to the card
        card.appendChild(image);
        card.appendChild(content);

        // Append the card to the container
        const container = document.querySelector('.blog-container');
        container.appendChild(card);
    });
}

}
function openBlog(postId) {
  window.location.href = `blogsSpecific.html?id=${postId}`;
}


