document.addEventListener('DOMContentLoaded', () => {
  fetchTeachers();
});

function fetchTeachers() {
  fetch('https://backendapi-ay7s.onrender.com/teachers')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    if (!data || !Array.isArray(data.teacher)) {
      throw new Error('Invalid data format');
    }
    renderTeachers(data.teacher);
  })
  .catch(error => {
    console.error('Error fetching or processing data:', error.message);
    // Display a user-friendly error message on the page if needed
  });

function renderTeachers(teachers) {
const container = document.getElementById('teacher-list');
if (!container) {
  console.error('Error: Could not find container element.');
  return;
}
//   container.innerHTML = ''; // Clear previous data
teachers.forEach(teacher => {
  const teacherElement = document.createElement('div');
  teacherElement.innerHTML = `
  <div class="teacherData">
  <div class="photoInfo">
      <img src="${teacher.imgurl}" alt="Teacher">
      <div class="infoText">
          <h2>${teacher.name}</h2>
          <p>Language : ${teacher.language}</p>
          <p>Proficiency level : ${teacher.proflevel}</p>
          <p>No of student taught till date : ${teacher.noStud}</p>
          <p>Experience : ${teacher.experience}</p>
          <p>No of hours taught till date : ${teacher.noHours}</p>
      </div>
  </div>
  <div class="videoButton">
      <iframe src="https://www.youtube.com/embed/example" frameborder="0" allowfullscreen></iframe>
      <div class="customButton">
        <button>Send Message</button>
        <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSezEFqtQiqJFcT8NcVjkoYIjZylKeMNOqP1fRuh8CxFhfgxkg/viewform"
              ><button>Book Demo</button></a>
      </div>
      
  </div>
</div>
  `;

  container.appendChild(teacherElement);
});
}
}

// --------------------------
// function renderTeachers(teachers) {
//   const container = document.getElementById('teacher-list');
//   if (!container) {
//     console.error('Error: Could not find container element.');
//     return;
//   }
//   //   container.innerHTML = ''; // Clear previous data
//   teachers.forEach(teacher => {
//     const teacherElement = document.createElement('div');
//     teacherElement.innerHTML = `
//     <!-- Profile Section -->
//     <div class="col-lg-8 first-sec"> 
//       <div class="d-flex align-items-center photo-data">
//         <img src="${teacher.imgurl}" alt="Profile Picture" class="profile-img" height: 15rem;
//         width: 24rem;>
//         <div class="profile-info" >
//           <p id="lang-text">${teacher.name}</p>
  
//           <p>
//             <strong>Language :</strong
//             ><span id="language"> ${teacher.language}</span>
//           </p>
//               <p>
//                 <strong>Proficiency level :</strong
//                 ><span id="proflevel"> ${teacher.proflevel}</span>
//               </p>
  
//               <p>
//                 <strong>No of student taught till date :</strong>
//                 <span id="noStud"> ${teacher.noStud}</span>
//               </p>
//               <p>
//                 <strong>Experience :</strong> <span id="experience">${teacher.experience}</span>
//               </p>
  
//               <p>
//                 <strong>No of hours taught till date :</strong
//                 ><span id="noHours"> ${teacher.noHours}</span>
//               </p>
//         </div>
//       </div>
//     </div>
//     <!-- Video Section -->
//     <div class="col-lg-4 second-section"> 
//       <div class="video-container">
//         <iframe width="390px" height="225px" src="${teacher.ytvideo}" frameborder="0" allowfullscreen></iframe>
//       </div>
//       <div class="mt-3 custom-btn">
//         <button type="button" class="btn btn-primary ">Send Message</button>
//         <a
//             href="https://docs.google.com/forms/d/e/1FAIpQLSezEFqtQiqJFcT8NcVjkoYIjZylKeMNOqP1fRuh8CxFhfgxkg/viewform"
//             ><button type="button" class="btn btn-secondary ml-2 ">Book Free Demo</button></a>
//       </div>
//     </div>
//     `;
  
//     container.appendChild(teacherElement);
//   });
//   }




// -------------------------------


// document.addEventListener('DOMContentLoaded', function () {
//     const languageFilter = document.getElementById('language-filter');
//     const nativeFilter = document.getElementById('native-filter');
  
//     function fetchTeachers() {
//       fetch('/teachers')
//         .then(response => response.json())
//         .then(data => {
//           const language = languageFilter.value;
//           const native = nativeFilter.value;
//           const filteredData = data.filter(teacher => {
//             return (language ? teacher.language === language : true) &&
//                    (native ? teacher.native === native : true);
//           });
//           displayTeachers(filteredData);
//         });
//     }
  
//     function displayTeachers(teachers) {
//       const list = document.getElementById('teacher-list');
//       list.innerHTML = ''; // Clear existing list
//       teachers.forEach(teacher => {
//         const item = document.createElement('div');
//         item.textContent = `Name: ${teacher.name}, Language: ${teacher.language}, Native: ${teacher.native}`;
//         list.appendChild(item);
//       });
//     }
  
//     languageFilter.addEventListener('change', fetchTeachers);
//     nativeFilter.addEventListener('change', fetchTeachers);
  
//     // Initial fetch
//     fetchTeachers();
//   });
  

// ----------------------------------------
// filtering the data

document.getElementById('filterForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const language = document.getElementById('languageFilter').value;
  const native = document.getElementById('nativeFilter').value;

  fetch(`https://backendapi-ay7s.onrender.com/filterteachers?language=${language}&native=${native}`)
      .then(response => response.json())
      .then(data => {
          console.log(data);
          renderTeachers1(data);
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
  
      function renderTeachers1(teachers) {
        const container = document.getElementById('teacher-list');
        if (!container) {
          console.error('Error: Could not find container element.');
          return;
        }
        container.innerHTML = ''; 
        teachers.forEach(teacher => {
          const teacherElement = document.createElement('div');
          teacherElement.innerHTML = `
  <div class="teacherData">
  <div class="photoInfo">
      <img src="${teacher.imgurl}" alt="Teacher">
      <div class="infoText">
          <h2>${teacher.name}</h2>
          <p>Language : ${teacher.language}</p>
          <p>Proficiency level : ${teacher.proflevel}</p>
          <p>No of student taught till date : ${teacher.noStud}</p>
          <p>Experience : ${teacher.experience}</p>
          <p>No of hours taught till date : ${teacher.noHours}</p>
      </div>
  </div>
  <div class="videoButton">
      <iframe src="https://www.youtube.com/embed/example" frameborder="0" allowfullscreen></iframe>
      <div class="customButton">
        <button>Send Message</button>
        <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSezEFqtQiqJFcT8NcVjkoYIjZylKeMNOqP1fRuh8CxFhfgxkg/viewform"
              ><button>Book Demo</button></a>
      </div>
      
  </div>
</div>
  `;
        
          container.appendChild(teacherElement);
        });
        }


});



// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.getElementById('filterForm');
//   const languageSelect = document.getElementById('language-filter');
//   const nativeSelect = document.getElementById('native-filter');


//   form.addEventListener('submit', async (event) => {
//       event.preventDefault();
//       console.log(languageSelect.value);
//       // Get selected values
//       const language = languageSelect.value;
//       const native = nativeSelect.value;
//       console.log(language);
//       console.log(native);
//       // Fetch filtered data
//       const filteredTeachers = await fetchFilteredTeachers(language, native);

//       // Render filtered teachers
//       renderTeachers(filteredTeachers);
//   });

//   // Function to fetch filtered teachers from the API
//   async function fetchFilteredTeachers(language, native) {
//       fetch('https://backendapi-ay7s.onrender.com/teachers')
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json();
//         })
//         .then(data => {
//           if (!data || !Array.isArray(data.teacher)) {
//             throw new Error('Invalid data format');
//           }
//           renderTeachers(data.teacher);
//         })
//         .catch(error => {
//           console.error('Error fetching or processing data:', error.message);
//           // Display a user-friendly error message on the page if needed
//         });
//   }

//   // Function to render teachers

//   function renderTeachers(teachers) {
//     const container = document.getElementById('teacher-list');
//     if (!container) {
//       console.error('Error: Could not find container element.');
//       return;
//     }
//     container.innerHTML = ''; // Clear previous data
//     teachers.forEach(teacher => {
//       const teacherElement = document.createElement('div');
//       teacherElement.innerHTML = `
//       <!-- Profile Section -->
//       <div class="col-lg-8 first-sec"> 
//         <div class="d-flex align-items-center photo-data">
//           <img src="${teacher.imgurl}" alt="Profile Picture" class="profile-img" height: 15rem;
//           width: 24rem;>
//           <div class="profile-info" >
//             <p id="lang-text">${teacher.name}</p>
    
//             <p>
//               <strong>Language :</strong
//               ><span id="language"> ${teacher.language}</span>
//             </p>
//                 <p>
//                   <strong>Proficiency level :</strong
//                   ><span id="proflevel"> ${teacher.proflevel}</span>
//                 </p>
    
//                 <p>
//                   <strong>No of student taught till date :</strong>
//                   <span id="noStud"> ${teacher.noStud}</span>
//                 </p>
//                 <p>
//                   <strong>Experience :</strong> <span id="experience">${teacher.experience}</span>
//                 </p>
    
//                 <p>
//                   <strong>No of hours taught till date :</strong
//                   ><span id="noHours"> ${teacher.noHours}</span>
//                 </p>
//           </div>
//         </div>
//       </div>
//       <!-- Video Section -->
//       <div class="col-lg-4 second-section"> 
//         <div class="video-container">
//           <iframe width="390px" height="225px" src="${teacher.ytvideo}" frameborder="0" allowfullscreen></iframe>
//         </div>
//         <div class="mt-3 custom-btn">
//           <button type="button" class="btn btn-primary ">Send Message</button>
//           <a
//               href="https://docs.google.com/forms/d/e/1FAIpQLSezEFqtQiqJFcT8NcVjkoYIjZylKeMNOqP1fRuh8CxFhfgxkg/viewform"
//               ><button type="button" class="btn btn-secondary ml-2 ">Book Free Demo</button></a>
//         </div>
//       </div>
//       `;
    
//       container.appendChild(teacherElement);
//     });
//     }


// });
