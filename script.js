//------------------------- burger menu
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const navMenu = document.getElementById("navMenu");

  burgerMenu.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    burgerMenu.classList.toggle("active");
  });
});

// Create an IntersectionObserver to trigger the animation
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  },
  {
    threshold: 0.5, // Triggers when 50% of the element is visible
  }
);

//---------------------FORM FUNCTIONALITY

const form = document.getElementById("contactForm");
const emailInput = document.getElementById("email");
const warningMessage = document.getElementById("warningMessage");

// Prevent form from submitting multiple times
let formSubmitted = false;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Prevent submitting if the form has already been submitted
  if (formSubmitted) {
    return; // Exit if the form has already been submitted
  }

  formSubmitted = true; // Mark the form as submitted

  // Clear previous error messages
  warningMessage.style.display = "none"; // Hide warning message by default

  // Get form values
  const name = document.getElementById("name").value;
  const email = emailInput.value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Simple email validation pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Flag to check if the form is valid
  let formIsValid = true;

  // Validate email
  if (!emailPattern.test(email)) {
    formIsValid = false;
    emailInput.setCustomValidity("Please enter a valid email address!");
  } else {
    emailInput.setCustomValidity(""); // Clear any custom validity message
  }

  // Check if all required fields are filled
  if (!name || !email || !subject || !message) {
    formIsValid = false;
    warningMessage.style.display = "block"; // Show warning message
  }

  // If the form is valid, send the email
  if (formIsValid) {
    sendMail(); // Call the function to send the mail
  } else {
    formSubmitted = false; // Reset formSubmitted flag if validation fails
  }
});

// Send mail functionality
function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // Send the email using EmailJS
  emailjs
    .send("service_0c4bae8", "template_ut5ui33", parms)
    .then(function () {
      alert("Email has been sent! I will get back to you shortly.");
      //reset the form after successful submission
      form.reset();
      warningMessage.style.display = "none"; // Hide warning message
      formSubmitted = false; // Reset formSubmitted flag after successful submission
    })
    .catch(function (error) {
      alert("There was an error sending the email. Please try again.");
      console.log(error);
      formSubmitted = false; // Reset flag on error as well
    });
}
