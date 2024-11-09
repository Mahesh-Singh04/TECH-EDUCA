// Alert message
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !subject || !message) {
        showAlert("Please fill out all fields.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showAlert("Please enter a valid email address.");
        return;
    }

    showAlert("Thank you for your message! We'll get back to you soon.");
}

function showAlert(message) {
    document.getElementById("alertMessage").textContent = message;
    document.getElementById("alertBox").style.display = "block";
}

function closeAlert() {
    document.getElementById("alertBox").style.display = "none";
    
    // Clear all input fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
}
