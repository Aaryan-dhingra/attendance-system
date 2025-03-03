// Function to validate the form before submission
function validateForm() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let dob = document.getElementById('dob').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let errorMessages = [];

    // First name validation
    if (firstName === "") {
        errorMessages.push("First name is required.");
    }

    // Last name validation
    if (lastName === "") {
        errorMessages.push("Last name is required.");
    }

    // Email validation (basic regex for proper email format)
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        errorMessages.push("Please enter a valid email.");
    }

    // Date of Birth validation (must be in the past)
    let dobDate = new Date(dob);
    if (dob === "") {
        errorMessages.push("Date of birth is required.");
    } else if (dobDate > new Date()) {
        errorMessages.push("Date of birth cannot be in the future.");
    }

    // Phone number validation (simple phone number pattern)
    let phonePattern = /^\d{10}$/;
    if (!phone.match(phonePattern)) {
        errorMessages.push("Please enter a valid 10-digit phone number.");
    }

    // Address validation
    if (address === "") {
        errorMessages.push("Address is required.");
    }

    // If there are errors, prevent form submission and display error messages
    if (errorMessages.length > 0) {
        let errorDiv = document.getElementById('errorMessages');
        errorDiv.innerHTML = errorMessages.join('<br>');
        return false;
    }

    // If no errors, allow the form to submit
    return true;
}
