document.addEventListener("DOMContentLoaded", () => {
  fetchTeachers();
});

function fetchTeachers() {
  fetch("https://backendapi-ay7s.onrender.com/api/blogs")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      if (!data || !Array.isArray(data.blogs)) {
        throw new Error("Invalid data format");
      }
      renderTeachers(data.blogs);
    })
    .catch((error) => {
      console.error("Error fetching or processing data:", error.message);
      // Display a user-friendly error message on the page if needed
    });

  function renderTeachers(teachers) {
    teachers.forEach((teacher) => {
        const titleContainer = document.createElement('h2');
        titleContainer.textContent = teacher.title;

        const contentContainer = document.createElement('p');
        contentContainer.textContent = teacher.des;

        const itemContainer = document.createElement('div');
        itemContainer.className = 'col-md-6 item';
       

        const itemInContainer = document.createElement('div');
        itemInContainer.className = 'item-in';
        itemInContainer.style.backgroundColor = '#f3fbfd';

        itemInContainer.appendChild(titleContainer);
        itemInContainer.appendChild(document.createElement('div')); // For the separator
        itemInContainer.appendChild(contentContainer);

        const readMoreLink = document.createElement('a');
        // readMoreLink.href = './blogsSpecific.html';
        readMoreLink.textContent = 'Read More';

        const arrowIcon = document.createElement('i');
        arrowIcon.className = 'fa fa-long-arrow-right';

        readMoreLink.appendChild(arrowIcon);

        readMoreLink.addEventListener('click', function() {
            // Get the ID of the container
            const containerId = teacher.id;
            // Redirect to the specific page with the container ID as a parameter
            window.location.href = `blogsSpecific.html?id=${containerId}`;

        });

        itemInContainer.appendChild(readMoreLink);

        itemContainer.appendChild(itemInContainer);

        // Append the constructed item container to the parent container
        const parentContainer = document.getElementById('parentContainer');
        parentContainer.appendChild(itemContainer);
    });

  }
}
