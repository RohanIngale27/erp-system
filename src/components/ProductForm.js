import React from 'react';

const ProductForm = ({ onSubmit }) => {
  // Inline styles
  const formStyle = {
    marginTop: '20px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  // Placeholder handleSubmit function
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted"); // Placeholder action
  };

  return (
    <div style={formStyle}>
      <h2>Add/Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle} htmlFor="name">Name:</label>
        <input style={inputStyle} type="text" id="name" name="name" required />
        <label style={labelStyle} htmlFor="category">Category:</label>
        <input style={inputStyle} type="text" id="category" name="category" required />
        <label style={labelStyle} htmlFor="price">Price:</label>
        <input style={inputStyle} type="number" id="price" name="price" required />
        <label style={labelStyle} htmlFor="stockQuantity">Stock Quantity:</label>
        <input style={inputStyle} type="number" id="stockQuantity" name="stockQuantity" required />
        <button style={buttonStyle} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ProductForm;
