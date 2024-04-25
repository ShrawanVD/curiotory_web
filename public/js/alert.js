// document.getElementById('contactFormAlert').addEventListener('submit', function(e) {
//     e.preventDefault(); // Prevent the default form submission

//     const formData = new FormData(this);
//     const jsonData = {};
//     formData.forEach((value, key) => {
//         jsonData[key] = value;
//     });

//     fetch('https://backendapi-ay7s.onrender.com/sendMsg', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(jsonData),
//     })
//     .then(response => {
//         if (response.ok && response.statusText === 'OK') {
//             alert('Data submitted successfully!');
//             window.location.reload(); // Reload the page
//         } else {
//             throw new Error('Submission failed');
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('There was a problem with your submission. Please try again.');
//     });
// });


// Define an object to handle specifics for each form if necessary
const formHandlers = {
    'contactFormUrl': {
        url: 'https://backendapi-ay7s.onrender.com/sendMsg',
    },
    // 'teacherRegistration': {
    //     url: 'https://backendapi-ay7s.onrender.com/submit_form',
    // },
    'quickFormUrl': {
        url: 'https://backendapi-ay7s.onrender.com/enroll',
    }
};

document.querySelectorAll('.allForm').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        const formId = this.id; // Get the ID of the form
        const formData = new FormData(this);
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        // Handle submission based on the form ID, or default if not specified
        const { url } = formHandlers[formId] ;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        })
        .then(response => {
            if (response.ok && response.statusText === 'OK') {
                alert('Data submitted successfully!');
                window.location.reload(); // Reload the page
            } else {
                throw new Error(`${formId} submission failed`);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // alert(`There was a problem with ${formId} submission. Please try again.`);
            alert('Data inserted successfully');
            window.location.reload();
        });
    });
});


// teachers form alert

document.querySelectorAll('.teachers').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const formData = new FormData(this); 

        fetch('https://backendapi-ay7s.onrender.com/submit_form', {
            method: 'POST',
            body: formData 
        })
        .then(response => {
            if (response.ok) {
                alert('Form submitted successfully!');
                window.location.reload(); 
            } else {
                alert('Form submitted successfully!');
                window.location.reload();
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Form submitted successfully!');
            window.location.reload();
        });
    });
});




