// store.js

const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    { id: 3, name: 'Product 3', price: 20 },
    // Add more products as needed
  ];
  
  const store = {
    state: {
      products: [...products],
      cart: [],
    },
  
    // Function to add item to cart
    addToCart: (productId) => {
      const product = store.state.products.find(item => item.id === productId);
      if (product) {
        const cartItem = store.state.cart.find(item => item.id === productId);
        if (cartItem) {
          cartItem.quantity++;
        } else {
          store.state.cart.push({ ...product, quantity: 1 });
        }
      }
    },
  
    // Function to remove item from cart
    removeFromCart: (productId) => {
      const index = store.state.cart.findIndex(item => item.id === productId);
      if (index !== -1) {
        const cartItem = store.state.cart[index];
        if (cartItem.quantity > 1) {
          cartItem.quantity--;
        } else {
          store.state.cart.splice(index, 1);
        }
      }
    },
  
    // Function to calculate total price of items in cart
    calculateTotal: () => {
      let total = 0;
      for (const item of store.state.cart) {
        total += item.price * item.quantity;
      }
      return total;
    },
  
    // Function to reset the cart
    resetCart: () => {
      store.state.cart = [];
    }
  };
  
  export default store;
  