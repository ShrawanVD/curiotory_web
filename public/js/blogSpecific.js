document.addEventListener("DOMContentLoaded", () => {
  // Retrieve the teacher ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get("id");

  // Fetch the data for the specific teacher using their ID
  fetch(`https://backendapi-ay7s.onrender.com/api/blogs/${blogId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((blog) => {
      // Render the data for the specific teacher on the page
      renderSpecificBlog(blog);
    })
    .catch((error) => {
      console.error("Error fetching or processing data:", error.message);
    });

  fetchBlogsList();
});

// for indiviual blog
function renderSpecificBlog(blogData) {
  const blogCard = document.querySelector(".blog-card");
  blogCard.querySelector("h1").textContent = blogData.title;
  blogCard.querySelector(".blogDate").textContent = blogData.date;
  const image1 = document.createElement("img");
  image1.src = blogData.imageUrl;
  blogCard.appendChild(image1);
  // blogCard.querySelector('img').src = blogData.imageUrl;
  // blogCard.querySelector('[innerHTML]').innerHTML = blogData.content;
  const content1 = document.createElement("div");
  content1.innerHTML = blogData.content;
  content1.style.textAlign = "justify";
  blogCard.appendChild(content1);
  const secondImage = blogCard.querySelector("img:nth-child(3)");
  if (blogData.imageUrl2) {
    secondImage.src = blogData.imageUrl2;
    secondImage.style.display = "block";
  } else {
    secondImage.style.display = "none";
  }
  blogCard.querySelector(".blogcontent").textContent = blogData.content;
}
// https://backendapi-ay7s.onrender.com/api/blogs

// function for fetching indiviual blogs
function fetchBlogsList() {
  fetch("https://backendapi-ay7s.onrender.com/api/blogs")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      if (!data || !Array.isArray(data.blogs)) {
        throw new Error("Invalid data format: blogs is not an array");
      }
      renderBlogList(data.blogs);
    })
    .catch((error) => {
      console.error("Error fetching or processing data:", error.message);
    });
}

function renderBlogList(blogs) {
  if (!Array.isArray(blogs)) {
    console.error("Invalid data format: blogs is not an array");
    return;
  }

  const blogListContainer = document.querySelector(".blog-list ul");
  blogListContainer.innerHTML = ""; // Clear existing content

  const currentUrl = window.location.href; 
    const urlParams = new URLSearchParams(currentUrl.split('?')[1]); 
    const activePostId = urlParams.get('id');

  blogs.forEach((blog) => {
    const listItem = document.createElement("li");
    listItem.textContent = blog.title;
    listItem.setAttribute("data-post-id", blog.id);
    listItem.addEventListener("click", function () {
      const postId = parseInt(this.getAttribute("data-post-id"));
      setActivePost(postId);
      openBlog(postId);
    });

    // if (blog.id === activePostId) {
    //     listItem.classList.add('active');
    // }
    blogListContainer.appendChild(listItem);
  });
}

function setActivePost(postId) {
  const blogListItems = document.querySelectorAll("#blogList li");
  blogListItems.forEach((item) => {
    const isActive = item.getAttribute("data-post-id") === postId.toString();
    isActive ? item.classList.add("active") : item.classList.remove("active");
  });
}

function openBlog(postId) {
  console.log("Opening blog with ID:", postId);
  window.location.href = `blogsSpecific.html?id=${postId}`;
}
