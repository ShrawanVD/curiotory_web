// swiper js for scrolling
const container = document.querySelector(".sliding-container");
const cards = document.querySelectorAll(".sliding-card");
let isMouseDown = false;
let startX;
let scrollLeft;

container.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener("mouseleave", () => {
  isMouseDown = false;
});

container.addEventListener("mouseup", () => {
  isMouseDown = false;
});

container.addEventListener("mousemove", (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 3; // Adjust scrolling speed as needed
  container.scrollLeft = scrollLeft - walk;
});

container.addEventListener("scroll", () => {
  const lastCard = cards[cards.length - 1];
  const containerWidth = container.offsetWidth;
  const lastCardWidth = lastCard.offsetWidth;
  const scrollRight = container.scrollLeft + containerWidth;

  if (scrollRight >= container.scrollWidth - lastCardWidth) {
    container.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  }

  // Hide the scrollbar
  container.style.overflowX = "hidden";
});

// reviews section
var swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  breakpoints: {
    // when window width is >= 0px
    0: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
    bulletPerSlide: true,
  },
});

// for the faq section

let accordian = document.querySelectorAll(".faq");

accordian.forEach((item) => {
  item.addEventListener("click", () => {
    if (!item.classList.contains("active")) {
      // Close all FAQs
      accordian.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
        }
      });
    }

    // Toggle the clicked FAQ
    item.classList.toggle("active");
  });
});

//------------------------ form section js -------------------------------------------

const languageData = [
  {
    name: "English",
    levels: [
      {
        name: "A1",
        fees: {
          corporate: 24000,
          student: 16000,
          exam: 16000,
          job: 21000,
          travel: 16000,
          hobby: 16000,
        },
      },
      {
        name: "A2",
        fees: {
          corporate: 24000,
          student: 16000,
          exam: 16000,
          job: 21000,
          travel: 16000,
          hobby: 16000,
        },
      },
      {
        name: "B1",
        fees: {
          corporate: 28000,
          student: 21000,
          exam: 21000,
          job: 25000,
          travel: 21000,
          hobby: 21000,
        },
      },
      {
        name: "B2",
        fees: {
          corporate: 28000,
          student: 21000,
          exam: 21000,
          job: 25000,
          travel: 21000,
          hobby: 21000,
        },
      },
      {
        name: "C1",
        fees: {
          corporate: 30000,
          student: 23000,
          exam: 23000,
          job: 27000,
          travel: 23000,
          hobby: 23000,
        },
      },
      {
        name: "C2",
        fees: {
          corporate: 30000,
          student: 23000,
          exam: 23000,
          job: 27000,
          travel: 23000,
          hobby: 23000,
        },
      },
    ],
  },
  {
    name: "German",
    levels: [
      {
        name: "A1",
        fees: {
          corporate: 36000,
          student: 21000,
          exam: 25000,
          job: 25000,
          travel: 21000,
          hobby: 21000,
        },
      },
      {
        name: "A2",
        fees: {
          corporate: 36000,
          student: 21000,
          exam: 25000,
          job: 25000,
          travel: 21000,
          hobby: 21000,
        },
      },
      {
        name: "B1",
        fees: {
          corporate: 38000,
          student: 24000,
          exam: 28000,
          job: 28000,
          travel: 24000,
          hobby: 24000,
        },
      },
      {
        name: "B2",
        fees: {
          corporate: 38000,
          student: 24000,
          exam: 28000,
          job: 28000,
          travel: 24000,
          hobby: 24000,
        },
      },
      {
        name: "C1",
        fees: {
          corporate: 40000,
          student: 27000,
          exam: 31000,
          job: 31000,
          travel: 27000,
          hobby: 27000,
        },
      },
      {
        name: "C2",
        fees: {
          corporate: 40000,
          student: 27000,
          exam: 31000,
          job: 31000,
          travel: 27000,
          hobby: 27000,
        },
      },
    ],
  },
  {
    name: "Spanish",
    levels: [
      {
        name: "A1",
        fees: {
          corporate: 36000,
          student: 21000,
          exam: 25000,
          job: 25000,
          travel: 21000,
          hobby: 21000,
        },
      },
      {
        name: "A2",
        fees: {
          corporate: 36000,
          student: 21000,
          exam: 25000,
          job: 25000,
          travel: 21000,
          hobby: 21000,
        },
      },
      {
        name: "B1",
        fees: {
          corporate: 38000,
          student: 24000,
          exam: 28000,
          job: 28000,
          travel: 24000,
          hobby: 24000,
        },
      },
      {
        name: "B2",
        fees: {
          corporate: 38000,
          student: 24000,
          exam: 28000,
          job: 28000,
          travel: 24000,
          hobby: 24000,
        },
      },
      {
        name: "C1",
        fees: {
          corporate: 40000,
          student: 27000,
          exam: 31000,
          job: 31000,
          travel: 27000,
          hobby: 27000,
        },
      },
      {
        name: "C2",
        fees: {
          corporate: 40000,
          student: 27000,
          exam: 31000,
          job: 31000,
          travel: 27000,
          hobby: 27000,
        },
      },
    ],
  },
  {
    name: "French",
    levels: [
      {
        name: "A1",
        fees: {
          corporate: 36000,
          student: 21000,
          exam: 25000,
          job: 25000,
          travel: 21000,
          hobby: 21000,
        },
      },
      {
        name: "A2",
        fees: {
          corporate: 36000,
          student: 21000,
          exam: 25000,
          job: 25000,
          travel: 21000,
          hobby: 21000,
        },
      },
      {
        name: "B1",
        fees: {
          corporate: 38000,
          student: 24000,
          exam: 28000,
          job: 28000,
          travel: 24000,
          hobby: 24000,
        },
      },
      {
        name: "B2",
        fees: {
          corporate: 38000,
          student: 24000,
          exam: 28000,
          job: 28000,
          travel: 24000,
          hobby: 24000,
        },
      },
      {
        name: "C1",
        fees: {
          corporate: 40000,
          student: 27000,
          exam: 31000,
          job: 31000,
          travel: 27000,
          hobby: 27000,
        },
      },
      {
        name: "C2",
        fees: {
          corporate: 40000,
          student: 27000,
          exam: 31000,
          job: 31000,
          travel: 27000,
          hobby: 27000,
        },
      },
    ],
  },
  {
    name: "Japanese",
    levels: [
      {
        name: "N5",
        fees: {
          corporate: 36000,
          student: 25000,
          exam: 27000,
          job: 28000,
          travel: 27000,
          hobby: 28000,
        },
      },
      {
        name: "N4",
        fees: {
          corporate: 38000,
          student: 25000,
          exam: 27000,
          job: 28000,
          travel: 27000,
          hobby: 28000,
        },
      },
      {
        name: "N3",
        fees: {
          corporate: 40000,
          student: 28000,
          exam: 30000,
          job: 32000,
          travel: 30000,
          hobby: 33000,
        },
      },
      {
        name: "N2",
        fees: {
          corporate: 45000,
          student: 32000,
          exam: 36000,
          job: 36000,
          travel: 36000,
          hobby: 38000,
        },
      },
      {
        name: "N1",
        fees: {
          corporate: 45000,
          student: 32000,
          exam: 36000,
          job: 38000,
          travel: 36000,
          hobby: 38000,
        },
      },
    ],
  },
  {
    name: "Mandarin",
    levels: [
      {
        name: "HSK 1",
        fees: {
          corporate: 36000,
          student: 25000,
          exam: 27000,
          job: 28000,
          travel: 27000,
          hobby: 28000,
        },
      },
      {
        name: "HSK 2",
        fees: {
          corporate: 38000,
          student: 25000,
          exam: 27000,
          job: 28000,
          travel: 27000,
          hobby: 28000,
        },
      },
      {
        name: "HSK 3",
        fees: {
          corporate: 40000,
          student: 28000,
          exam: 30000,
          job: 32000,
          travel: 30000,
          hobby: 33000,
        },
      },
      {
        name: "HSK 4",
        fees: {
          corporate: 42000,
          student: 30000,
          exam: 33000,
          job: 33000,
          travel: 33000,
          hobby: 36000,
        },
      },
      {
        name: "HSK 5",
        fees: {
          corporate: 45000,
          student: 32000,
          exam: 36000,
          job: 38000,
          travel: 36000,
          hobby: 38000,
        },
      },
      {
        name: "HSK 6",
        fees: {
          corporate: 45000,
          student: 32000,
          exam: 36000,
          job: 38000,
          travel: 36000,
          hobby: 38000,
        },
      },
    ],
  },
  {
    name: "Korean",
    levels: [
      {
        name: "Level 1",
        fees: {
          corporate: 24000,
          student: 16000,
          exam: 16000,
          job: 21000,
          travel: 16000,
          hobby: 16000,
        },
      },
      {
        name: "Level 2",
        fees: {
          corporate: 24000,
          student: 16000,
          exam: 16000,
          job: 21000,
          travel: 16000,
          hobby: 16000,
        },
      },
      {
        name: "Level 3",
        fees: {
          corporate: 28000,
          student: 21000,
          exam: 21000,
          job: 25000,
          travel: 21000,
          hobby: 21000,
        },
      },
      {
        name: "Level 4",
        fees: {
          corporate: 28000,
          student: 21000,
          exam: 21000,
          job: 25000,
          travel: 21000,
          hobby: 21000,
        },
      },
      {
        name: "Level 5",
        fees: {
          corporate: 30000,
          student: 23000,
          exam: 23000,
          job: 27000,
          travel: 23000,
          hobby: 23000,
        },
      },
      {
        name: "Level 6",
        fees: {
          corporate: 30000,
          student: 23000,
          exam: 23000,
          job: 27000,
          travel: 23000,
          hobby: 23000,
        },
      },
    ],
  },
];

document.addEventListener("DOMContentLoaded", function () {
  function updateDisplay(id, value) {
    const displayElement = document.getElementById(id + "-data");
    if (displayElement) {
      displayElement.querySelector("span").textContent = value;
    }
  }

  // Function to create radio buttons
  function createRadioButtons(name, data, container) {
    data.forEach((item) => {
      const li = document.createElement("li");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = name + "[]";
      input.id = item.toLowerCase() + "-radio";

      const label = document.createElement("label");
      label.htmlFor = input.id;
      label.textContent = item;

      li.appendChild(input);
      li.appendChild(label);
      container.appendChild(li);
    });
  }

  // Function to create dropdown options
  function createDropdownOptions(data, dropdown, placeholder) {
    // Create and append the default option
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = placeholder;
    defaultOption.disabled = true; // Optional: make the default option non-selectable
    defaultOption.selected = true; // Make this option selected by default
    dropdown.appendChild(defaultOption);

    // Append the actual options
    data.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.toLowerCase();
      option.textContent = item.replace(/\w\S*/g, (w) =>
        w.replace(/^\w/, (c) => c.toUpperCase())
      );
      dropdown.appendChild(option);
    });
  }

  function calculateFee(language, purpose, proficiency) {
    const selectedLanguage = languageData.find(
      (lang) => lang.name.toLowerCase() === language
    );
    if (selectedLanguage) {
      const selectedLevel = selectedLanguage.levels.find(
        (level) => level.name.toLowerCase() === proficiency
      );
      if (selectedLevel) {
        return selectedLevel.fees[purpose];
      }
    }
    return 0;
  }

  // Function to update proficiency levels based on selected language
  function updateProficiencyLevels(language) {
    const levels = languageData.find(
      (lang) => lang.name.toLowerCase() === language
    ).levels;
    const levelNames = levels.map((level) => level.name);

    const proficiencyList = document.querySelector(".proficiency ul");
    const proficiencySelect = document.getElementById("proficiency-select");
    proficiencyList.innerHTML = "";
    proficiencySelect.innerHTML = "";

    createRadioButtons("proficiency", levelNames, proficiencyList);
    createDropdownOptions(levelNames, proficiencySelect, "Select Proficiency");

    // Re-bind event listeners to the newly created proficiency radio buttons
    bindProficiencyEventListeners();
  }

  function bindProficiencyEventListeners() {
    document
      .querySelectorAll('input[name="proficiency[]"]')
      .forEach((radio) => {
        radio.addEventListener("change", () => {
          if (radio.checked) {
            const proficiency = radio.id.split("-")[0];
            updateDisplay(
              "proficiency",
              proficiency.charAt(0).toUpperCase() + proficiency.slice(1)
            );

            const selectedLanguage = document
              .querySelector('input[name="language[]"]:checked')
              .id.split("-")[0];
            const selectedPurpose = document
              .querySelector('input[name="purpose[]"]:checked')
              .id.split("-")[0];
            const fee = calculateFee(
              selectedLanguage,
              selectedPurpose,
              proficiency
            );
            document
              .getElementById("fee-data")
              .querySelector("span").textContent = "₹" + fee;
          }
        });
      });
  }

  // Call bindProficiencyEventListeners() after form initialization
  bindProficiencyEventListeners();

  // Initialize the form
  const languages = languageData.map((lang) => lang.name);
  const languageList = document.querySelector(".language ul");
  const languageSelect = document.getElementById("language-select");
  createRadioButtons("language", languages, languageList);
  createDropdownOptions(languages, languageSelect, "Select Language");

  // Initialize purpose
  const purposes = Object.keys(languageData[0].levels[0].fees);
  const purposeList = document.querySelector(".purpose ul");
  const purposeSelect = document.getElementById("purpose-select");
  createRadioButtons("purpose", purposes, purposeList);
  createDropdownOptions(purposes, purposeSelect, "Select Purpose");

  // Initialize proficiency levels for the default selected language
  updateProficiencyLevels("english");

  function syncSelection(radioName, selectId) {
    const radios = document.querySelectorAll(`input[name="${radioName}[]"]`);
    const select = document.getElementById(selectId);

    radios.forEach((radio) => {
      radio.addEventListener("change", () => {
        if (radio.checked) {
          select.value = radio.id.split("-")[0];
        }
      });
    });

    select.addEventListener("change", () => {
      const selectedValue = select.value;
      radios.forEach((radio) => {
        if (radio.id.split("-")[0] === selectedValue) {
          radio.checked = true;
          // Trigger any additional change events if necessary
          radio.dispatchEvent(new Event("change"));
        }
      });
    });
  }

  // Add event listeners to language selections
  document.querySelectorAll('input[name="language[]"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.checked) {
        const language = radio.id.split("-")[0];
        updateProficiencyLevels(language);
        updateDisplay(
          "language",
          language.charAt(0).toUpperCase() + language.slice(1)
        );

        // Reset purpose and proficiency displays
        updateDisplay("purpose", "-");
        updateDisplay("proficiency", "-");
        document.getElementById("fee-data").querySelector("span").textContent =
          "₹-";

        // Uncheck purpose and proficiency radios
        document
          .querySelectorAll('input[name="purpose[]"]')
          .forEach((radio) => {
            radio.checked = false;
          });
        document
          .querySelectorAll('input[name="proficiency[]"]')
          .forEach((radio) => {
            radio.checked = false;
          });
      }
    });
  });

  document.querySelectorAll('input[name="purpose[]"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.checked) {
        const purpose = radio.id.split("-")[0];
        updateDisplay(
          "purpose",
          purpose.charAt(0).toUpperCase() + purpose.slice(1)
        );

        // Recalculate fee if proficiency is already selected
        const selectedProficiencyRadio = document.querySelector(
          'input[name="proficiency[]"]:checked'
        );
        if (selectedProficiencyRadio) {
          const selectedProficiency = selectedProficiencyRadio.id.split("-")[0];
          const selectedLanguage = document
            .querySelector('input[name="language[]"]:checked')
            .id.split("-")[0];
          const fee = calculateFee(
            selectedLanguage,
            purpose,
            selectedProficiency
          );
          document
            .getElementById("fee-data")
            .querySelector("span").textContent = "₹" + fee;
        }
      }
    });
});
document.querySelectorAll('input[name="proficiency[]"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.checked) {
      const proficiency = radio.id.split("-")[0];
      updateDisplay(
        "proficiency",
        proficiency.charAt(0).toUpperCase() + proficiency.slice(1)
      );

      const selectedLanguage = document
        .querySelector('input[name="language[]"]:checked')
        .id.split("-")[0];
      const selectedPurpose = document
        .querySelector('input[name="purpose[]"]:checked')
        .id.split("-")[0];
      const fee = calculateFee(
        selectedLanguage,
        selectedPurpose,
        proficiency
      );
      document.getElementById("fee-data").querySelector("span").textContent =
        "₹" + fee;
    }
  });
});

document
  .getElementById("proficiency-select")
  .addEventListener("change", () => {
    const selectedProficiency =
      document.getElementById("proficiency-select").value;
    updateDisplay(
      "proficiency",
      selectedProficiency.charAt(0).toUpperCase() +
        selectedProficiency.slice(1)
    );

    // Assuming the language and purpose are already selected
    const selectedLanguage = document
      .querySelector('input[name="language[]"]:checked')
      .id.split("-")[0];
    const selectedPurpose = document
      .querySelector('input[name="purpose[]"]:checked')
      .id.split("-")[0];

    // Recalculate fee
    const fee = calculateFee(
      selectedLanguage,
      selectedPurpose,
      selectedProficiency
    );
    document.getElementById("fee-data").querySelector("span").textContent =
      "₹" + fee;
  });

// If language dropdown is changed, update purpose and proficiency dropdowns to default
document.getElementById("language-select").addEventListener("change", () => {
  // Reset purpose and proficiency displays
  updateDisplay("purpose", "-");
  updateDisplay("proficiency", "-");
  document.getElementById("fee-data").querySelector("span").textContent =
    "₹-";

  // Set purpose and proficiency dropdowns to default
  document.getElementById("purpose-select").value = "";
  document.getElementById("proficiency-select").value = "";
});

languageSelect.addEventListener("change", () => {
  updateProficiencyLevels(languageSelect.value);
});

// Call this function for each radioset
syncSelection("language", "language-select");
syncSelection("purpose", "purpose-select");
syncSelection("proficiency", "proficiency-select");

document
  .getElementById("language-price-form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const language =
      window.innerWidth < 768
        ? document.getElementById("language-select").value
        : document
            .querySelector('input[name="language[]"]:checked')
            .id.split("-")[0];
    const purpose =
      window.innerWidth < 768
        ? document.getElementById("purpose-select").value
        : document
            .querySelector('input[name="purpose[]"]:checked')
            .id.split("-")[0];
    const proficiency =
      window.innerWidth < 768
        ? document.getElementById("proficiency-select").value
        : document
            .querySelector('input[name="proficiency[]"]:checked')
            .id.split("-")[0];
    const fee = calculateFee(language, purpose, proficiency);

    // Check if all the fields are filled
    if (!name || !email || !phone || !language || !purpose || !proficiency) {
      Toastify({
        text: "Please fill/select all the options.",
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: function () {}, // Callback after click
      }).showToast();
      return;
    }

    // Check if the email is valid
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      Toastify({
        text: "Please enter a valid email address.",
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: function () {}, // Callback after click
      }).showToast();
      return;
    }

    const data = {
      name,
      email,
      phone,
      language,
      purpose,
      proficiency,
      fee,
    };

    fetch(
      "https://curiotory.com/wp-json/api/v1/custom_language_price_data/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          Toastify({
            text: "We have received your request. We will contact you soon.",
            duration: 3000,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            stopOnFocus: true, // Prevents dismissing of toast on hover
            onClick: function () {}, // Callback after click
          }).showToast();
          // Clear the form
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("language-select").value = "";
          document.getElementById("purpose-select").value = "";
          document.getElementById("proficiency-select").value = "";
          document
            .getElementById("language-data")
            .querySelector("span").textContent = "-";
          document
            .getElementById("purpose-data")
            .querySelector("span").textContent = "-";
          document
            .getElementById("proficiency-data")
            .querySelector("span").textContent = "-";
          document
            .getElementById("fee-data")
            .querySelector("span").textContent = "₹-";
        } else {
          Toastify({
            text: "Something went wrong. Please try again later.",
            duration: 3000,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
            stopOnFocus: true, // Prevents dismissing of toast on hover
            onClick: function () {}, // Callback after click
          }).showToast();
        }
      });
  });
});

// try new navbar code 
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

