document.getElementById("submit").addEventListener("click", function() {
    // Get the input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const messageDiv = document.getElementById("message");

    // Basic validation
    if (name === "" || email === "" || phone === "") {
        messageDiv.innerHTML = "Please fill in all fields.";
        messageDiv.style.color = "red";
    } else {
        // Display a success message
        messageDiv.innerHTML = "Account created successfully!";
        messageDiv.style.color = "green";

        // Clear the form
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
    }
});


    // Navigation toggle
$('#menu-btn').click(function () {
    $('nav .Navigation ul').addClass('active')
});
$('#menu-close').click(function () {
    $('nav .Navigation ul').removeClass('active')
});