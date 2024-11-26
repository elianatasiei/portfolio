const form = document.getElementById("contactForm");
const emailInput = document.getElementById("email");
const warningMessage = document.getElementById("warningMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  // Clear previous error messages
  warningMessage.style.display = "none"; // Hide warning message by default

  // Get form values
  const name = document.getElementById("name").value;
  const email = emailInput.value;
  const subject = document.getElementById("subject").value;

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
  if (!name || !email || !subject || !emailPattern.test(email)) {
    formIsValid = false;
  }

  // Show the warning message if form is invalid
  if (!formIsValid) {
    warningMessage.style.display = "block"; // Show warning message
  } else {
    // If form is valid, you can proceed with form submission
    alert("Form submitted successfully!");
    form.reset(); // Optionally reset the form here
  }
});
