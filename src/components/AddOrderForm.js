// AddOrderForm.js

import React, { useState } from 'react';

const AddOrderForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    id: '',
    customerName: '',
    orderDate: '',
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    // Clear form data
    setFormData({
      id: '',
      customerName: '',
      orderDate: '',
      status: ''
    });
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Add Order</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }}>Order ID:</label>
          <input type="text" name="id" value={formData.id} onChange={handleChange} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }}>Customer Name:</label>
          <input type="text" name="customerName" value={formData.customerName} onChange={handleChange} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }}>Order Date:</label>
          <input type="text" name="orderDate" value={formData.orderDate} onChange={handleChange} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }}>Status:</label>
          <input type="text" name="status" value={formData.status} onChange={handleChange} />
        </div>
        <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Add Order</button>
      </form>
    </div>
  );
}

export default AddOrderForm;
