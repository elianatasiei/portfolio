document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const emailInput = document.getElementById("email");
  const warningMessage = document.getElementById("warningMessage");

  let formSubmitted = false;

  emailjs.init("your_user_id"); // Replace with your EmailJS public key

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (formSubmitted) return;

    formSubmitted = true;
    warningMessage.style.display = "none";

    const name = document.getElementById("name").value;
    const email = emailInput.value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let formIsValid = true;

    if (!emailPattern.test(email)) {
      formIsValid = false;
      emailInput.setCustomValidity("Please enter a valid email address!");
    } else {
      emailInput.setCustomValidity("");
    }

    if (!name || !email || !subject || !message) {
      formIsValid = false;
      warningMessage.style.display = "block";
    }

    if (formIsValid) {
      sendMail({ name, email, subject, message });
    } else {
      formSubmitted = false;
    }
  });

  function sendMail(parms) {
    emailjs
      .send("service_0c4bae8", "template_ut5ui33", parms)
      .then(function () {
        alert("Email has been sent! I will get back to you shortly.");
        form.reset();
        warningMessage.style.display = "none";
        formSubmitted = false;
      })
      .catch(function (error) {
        alert("There was an error sending the email. Please try again.");
        console.error(error);
        formSubmitted = false;
      });
  }
});
