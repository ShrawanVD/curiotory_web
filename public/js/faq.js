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
  