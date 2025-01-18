document.addEventListener("DOMContentLoaded", function () {
  const paymentOptions = document.getElementsByName("payment-method");
  const cardDetailsSection = document.getElementById("card-details");
  const placeOrderButton = document.getElementById("place-order");

  // Initially hide card details
  cardDetailsSection.style.display = "none";

  // Listen for changes in the selected payment method
  paymentOptions.forEach(option => {
    option.addEventListener("change", function () {
      if (this.value === "card") {
        cardDetailsSection.style.display = "block";
      } else {
        cardDetailsSection.style.display = "none";
      }
    });
  });

  // Handle place order button click
  placeOrderButton.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form submission

    const selectedPaymentMethod = [...paymentOptions].find(option => option.checked)?.value;

    if (!selectedPaymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    if (selectedPaymentMethod === "cash") {
      // Clear the cart after placing the order
      clearCart();
      // Redirect to confirmation page for Cash on Delivery
      window.location.href = "confirmation.html?method=cash";
    } else if (selectedPaymentMethod === "paypal") {
      // Clear the cart after placing the order
      clearCart();
      // Redirect to confirmation page for PayPal
      window.location.href = "confirmation.html?method=paypal";
    } else if (selectedPaymentMethod === "card") {
      // Validate card details
      const cardNumber = document.getElementById("card-number").value;
      const expiryDate = document.getElementById("expiry-date").value;
      const cvv = document.getElementById("cvv").value;

      if (!cardNumber || !expiryDate || !cvv) {
        alert("Please fill in all card details.");
        return;
      }

      // Clear the cart after placing the order
      clearCart();
      // Redirect to confirmation page for Card payment
      window.location.href = "confirmation.html?method=card";
    }
  });

  // Function to clear the cart
  function clearCart() {
    localStorage.removeItem('cart'); // Remove the cart from localStorage
  }
});
