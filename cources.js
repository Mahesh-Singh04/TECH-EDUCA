// Add to cart functionality
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function addToCart(courseName, price) {
    let existingItem = cartItems.find(item => item.name === courseName);
    if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if the item already exists
    } else {
        cartItems.push({ name: courseName, price: price, quantity: 1 }); // Add new item
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCart(); // Update cart count in navigation
}

// Function to update cart count in the navigation bar
function updateCart() {
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    $('#cart-count').text(totalItems); // Update the cart count display
}

// Attach click event to add to cart buttons
$('.add-to-cart').click(function () {
    const courseName = $(this).data('course');
    const price = parseFloat($(this).data('price'));

    addToCart(courseName, price);
});

document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const course = this.getAttribute('data-course');
            alert(`${course} has been added to your cart!`);
        });
    });
});
