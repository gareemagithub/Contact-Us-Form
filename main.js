// main.js
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nameInput = document.getElementById("fullName").value.trim();
    const emailInput = document.getElementById("emailAddress").value.trim();
    const messageInput = document.getElementById("userMessage").value.trim();
    const statusDisplay = document.getElementById("submissionStatus");

    // Input validation
    if (!nameInput || !emailInput || !messageInput) {
        alert("Please fill out all fields.");
        return;
    }

    // Check email format using a regular expression
    const validEmailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
    if (!validEmailPattern.test(emailInput)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Display the success message
    statusDisplay.classList.remove("hidden-message");

    // Log form data to console
    console.log(`Name: ${nameInput}`);
    console.log(`Email: ${emailInput}`);
    console.log(`Message: ${messageInput}`);

    // Reset form fields
    document.getElementById("contactForm").reset();
});
