// Registration function
function registerUser() {
    // Get user input values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple validation (you could add more)
    if (username && email && password) {
        alert("Registration successful!");
        document.getElementById("registrationForm").style.display = "none";
        document.getElementById("donationForm").style.display = "block";
    } else {
        alert("Please fill in all fields.");
    }
}

// Donation submission function
function submitDonation() {
    const foodType = document.getElementById("foodType").value;
    const foodQuantity = document.getElementById("foodQuantity").value;
    const foodLocation = document.getElementById("foodLocation").value;
    const nearbyAreas = document.getElementById("nearbyAreas").value;
    const contactInfo = document.getElementById("contactInfo").value;

    if (foodType && foodQuantity && foodLocation && nearbyAreas && contactInfo) {
        alert("Donation submitted successfully!");
        // Clear the form fields
        document.getElementById("donationForm").reset();
    } else {
        alert("Please fill in all fields.");
    }
}
