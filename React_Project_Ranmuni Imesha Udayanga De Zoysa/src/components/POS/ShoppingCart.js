// Example usage of the ShoppingCart class

// Import the ShoppingCart module
const ShoppingCart = require('./ShoppingCart');

// Create a new instance of the ShoppingCart
const cart = new ShoppingCart();

// Define some sample items
const item1 = { name: "Book", price: 15 };
const item2 = { name: "Shirt", price: 25 };
const item3 = { name: "Phone", price: 300 };

// Add items to the cart
cart.addItem(item1);
cart.addItem(item2);
cart.addItem(item3);

// Display items in the cart
cart.displayItems();

// Calculate and display the total price
console.log("Total Price: $" + cart.calculateTotal());

// Remove an item from the cart
cart.removeItem(item2);

// Display items in the cart after removal
cart.displayItems();
