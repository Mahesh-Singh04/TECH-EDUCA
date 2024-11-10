$('#menu-btn').click(function () {
    $('nav .Navigation ul').addClass('active');
});
$('#menu-close').click(function () {
    $('nav .Navigation ul').removeClass('active');
});

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let cartTable = document.getElementById('cartTable');
let subtotalElement = document.getElementById('subtotal');
let taxElement = document.getElementById('tax');
let totalElement = document.getElementById('total');
let cartIconCountElement = document.getElementById('cart-count');

// Function to update the cart display
function updateCart() {
    cartTable.innerHTML = `
<tr>
    <th>Course Name</th>
    <th>Price</th>
    <th>Action</th>
</tr>
`;
    let subtotal = 0;

    cartItems.forEach((item, index) => {
        let total = item.price * item.quantity;
        subtotal += total;

        cartTable.innerHTML += `
    <tr>
        <td>${item.name}</td>
        <td>$${item.price}</td>
        <td><button class="remove-item" data-index="${index}">Remove</button></td>
    </tr>
`;
    });

    const taxRate = 0.05;  // 5% tax
    let tax = subtotal * taxRate;
    let total = subtotal + tax;

    subtotalElement.innerText = subtotal.toFixed(2);
    taxElement.innerText = tax.toFixed(2);
    totalElement.innerText = total.toFixed(2);

    updateCartIcon();
}

// Function to update cart icon count
function updateCartIcon() {
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    cartIconCountElement.innerText = cartCount;
}

// Event listeners for increment and decrement buttons
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('remove-item')) {
        let index = event.target.getAttribute('data-index');
        cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCart();
    }
});

// Initial cart display
updateCart();


// Payment section

function processPayment() {
    // Get values from input fields
    var cardNumber = document.getElementById('cardNumber').value;
    var expiryDate = document.getElementById('expiryDate').value;
    var cvv = document.getElementById('cvv').value;

    // Basic validation check
    if (!cardNumber || !expiryDate || !cvv) {
        alert("Please fill in all fields.");
        return;
    }

    // Simulating payment processing (for demonstration purposes)
    alert("Payment successful! Thank you for your purchase.");

    // Clear form after successful payment
    document.getElementById('paymentForm').reset();
}
