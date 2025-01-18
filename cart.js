// Load cart from localStorage if available
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add product to cart
function addToCart(product) {
  // Check if the product is already in the cart
  const existingProductIndex = cart.findIndex(item => item.name === product.name);

  if (existingProductIndex !== -1) {
    // If product exists, increase the quantity
    cart[existingProductIndex].quantity += 1;
  } else {
    // If product does not exist, add it with quantity 1
    const productWithQuantity = { ...product, quantity: 1 };
    cart.push(productWithQuantity);
  }

  // Save updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();  // Ensure the cart is updated in the DOM
  updateCartCount();    // Update the cart count
}

// Update Cart Display with quantity
function updateCartDisplay() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = ''; // Clear current cart items

  let totalPrice = 0;

  // Group products by name and sum their quantities
  const groupedProducts = cart.reduce((acc, product) => {
    if (!acc[product.name]) {
      acc[product.name] = { ...product };  // Clone the product to avoid reference issues
    } else {
      acc[product.name].quantity += product.quantity;
    }
    return acc;
  }, {});

  // Loop through each grouped product and display it
  for (const productName in groupedProducts) {
    const product = groupedProducts[productName];

    const productDiv = document.createElement("div");
    productDiv.classList.add("cart-item");

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    img.style.width = "100px";
    img.style.height = "100px";
    img.style.objectFit = "contain";

    const name = document.createElement("div");
    name.classList.add("cart-item-name");
    name.textContent = `${product.name} (x${product.quantity})`;

    const price = document.createElement("div");
    price.classList.add("cart-item-price");
    price.textContent = `${product.price} x ${product.quantity}`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-from-cart");
    removeButton.onclick = () => removeFromCart(product);

    // Calculate total price for this product
    totalPrice += parseFloat(product.price.replace(" GBP", "")) * product.quantity;

    // Append elements to the productDiv
    productDiv.appendChild(img);
    productDiv.appendChild(name);
    productDiv.appendChild(price);
    productDiv.appendChild(removeButton);
    cartItemsContainer.appendChild(productDiv);
  }

  // Update total price
  document.getElementById("total-price").textContent = `${totalPrice.toFixed(2)} GBP`;
}

// Function to remove item from cart
function removeFromCart(productToRemove) {
  // Remove the product completely from the cart
  cart = cart.filter(product => product.name !== productToRemove.name);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay(); // Update the cart display
  updateCartCount();   // Update the cart count
}

// Update the cart item count
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = `(${cart.length} items)`;
}

// Initial display of cart items
document.addEventListener("DOMContentLoaded", () => {
  updateCartDisplay();
  updateCartCount();
});
