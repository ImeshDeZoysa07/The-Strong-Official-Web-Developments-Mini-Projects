import React, { useState } from 'react';
import './App.css';

function App() {
  // State variables
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    // Add more products here
  ]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  // Function to calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="App">
      <h1>Point of Sale System</h1>
      <div className="products">
        <h2>Products</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price} 
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total: ${calculateTotal()}</p>
      </div>
    </div>
  );
}

export default App;
