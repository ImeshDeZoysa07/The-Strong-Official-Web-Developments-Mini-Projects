document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('checkout-form');
    const messageBox = document.getElementById('checkout-message');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting normally
      
      // Fetch form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const address = document.getElementById('address').value;
      const cardNumber = document.getElementById('card-number').value;
      const expiry = document.getElementById('expiry').value;
      const cvv = document.getElementById('cvv').value;
      
      // Simple validation (you can add more robust validation as needed)
      if (!name || !email || !address || !cardNumber || !expiry || !cvv) {
        showMessage('Please fill in all fields.', 'error');
        return;
      }
      
      // Simulate processing (replace with actual backend integration)
      setTimeout(function() {
        showMessage('Payment successful!', 'success');
        form.reset();
      }, 2000); // Simulate a 2-second processing delay
    });
    
    function showMessage(message, type) {
      messageBox.textContent = message;
      messageBox.className = type; // Add a class to style the message (e.g., error or success)
    }
  });
  