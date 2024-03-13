import React from 'react';

const ProductList = ({ products, onEdit, onDelete }) => {
  // Inline styles
  const listStyle = {
    listStyle: 'none',
    padding: '0'
  };

  const listItemStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const buttonStyle = {
    marginLeft: '10px',
    cursor: 'pointer',
    backgroundColor: '#007bff', // Blue color
    color: '#fff', // White text color
    border: 'none',
    padding: '5px 10px',
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul style={listStyle}>
        {products.map(product => (
          <li key={product.id} style={listItemStyle}>
            <div>
              <strong>{product.name}</strong> - {product.category} - ${product.price} - Stock: {product.stockQuantity}
            </div>
            <div>
              <button style={buttonStyle} onClick={() => onEdit(product.id)}>Edit</button>
              <button style={buttonStyle} onClick={() => onDelete(product.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
