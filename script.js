let cart = [];
let totalPrice = 0;
let wishlist = [];

function addToCart(productName, productPrice) {
    // Add product to cart array
    cart.push({ name: productName, price: productPrice });

    // Update cart count
    document.getElementById("cart-count").innerText = cart.length;

    // Update cart total
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";  // Clear the current list

    totalPrice = 0;

    // Loop through the cart items and update the cart display
    cart.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    // Update the total price in the cart
    document.getElementById("total-price").innerText = totalPrice.toFixed(2);
}
document.getElementById('cart-button').addEventListener('click', function () {
    window.location.href = 'cart.html'; // Path to your cart page
});

function buyNow(productName, price) {
    alert(`You have purchased ${productName} for $${price}`);
    // Implement payment and order confirmation logic
}

function checkout() {
    if (cart.length > 0) {
        alert("Thank you for your purchase!");
        cart = [];  // Clear the cart after checkout
        updateCart();
        document.getElementById("cart-count").innerText = 0;
    } else {
        alert("Your cart is empty!");
    }
}

// Add product to wishlist
function addToWishlist(productName, productPrice) {
    // Check if the product is already in the wishlist
    const exists = wishlist.some(item => item.name === productName);
    if (!exists) {
        wishlist.push({ name: productName, price: productPrice });
        updateWishlist();
    } else {
        alert(`${productName} is already in your wishlist!`);
    }
}

// Update wishlist display
function updateWishlist() {
    let wishlistItems = document.getElementById("wishlist-items");
    wishlistItems.innerHTML = "";  // Clear the current list

    // Loop through the wishlist items and update the display
    wishlist.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        wishlistItems.appendChild(li);
    });
}

// Remove item from wishlist
function removeFromWishlist(productName) {
    wishlist = wishlist.filter(item => item.name !== productName);
    updateWishlist();
}

