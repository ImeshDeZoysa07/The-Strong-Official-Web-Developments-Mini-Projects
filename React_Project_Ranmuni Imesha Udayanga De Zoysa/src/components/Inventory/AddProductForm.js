import React, { useState } from 'react';
import React from 'react';
import AddProductForm from './AddProductForm';

const App = () => {
    const handleSubmit = (product) => {
      // Here you can handle the submission of the product data
      console.log('Submitted Product:', product);
    };
  
    return (
      <div>
        <h1>Add Product</h1>
        <AddProductForm onSubmit={handleSubmit} />
      </div>
    );
  };
  

const AddProductForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form fields
    if (!name || !price || !description) {
      alert('Please fill in all fields');
      return;
    }
    // Submit the form data
    onSubmit({ name, price, description });
    // Reset form fields
    setName('');
    setPrice('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
