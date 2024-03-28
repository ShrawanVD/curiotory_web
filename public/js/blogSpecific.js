document.addEventListener("DOMContentLoaded", () => {
    // Retrieve the teacher ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id');

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
            // Display a user-friendly error message on the page if needed
        });
});

function renderSpecificBlog(blog) {
    const titleElement = document.getElementById('title');
    const beforeImgParaElement = document.getElementById('before-img-para');
    const subImageElement = document.getElementById('sub-image');
    const afterImgParaElement = document.getElementById('after-img-para');
    const mainImageElement = document.getElementById('main-image');

    titleElement.textContent = blog.title;
    beforeImgParaElement.textContent = blog.des;
    afterImgParaElement.textContent = blog.des2;

    mainImageElement.src = blog.img1;
    subImageElement.src = blog.img2;
}

// Usage example:
// Assuming `blog` is an object containing blog data
// renderBlogPost(blog);
