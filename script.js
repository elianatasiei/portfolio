const emailInput = document.getElementById("email");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  const emailValue = emailInput.value;

  // Simple validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailValue)) {
    e.preventDefault();
    alert("Please enter a valid email address!");
  }
});

emailInput.setCustomValidity(
  "Your email address must be valid and end with a domain."
);
