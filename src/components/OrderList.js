// OrderList.js

import React, { useState } from 'react';

const OrderList = ({ orders, onEdit, onDelete }) => {
  const [editingOrderId, setEditingOrderId] = useState(null);

  const listItemStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  };

  const buttonStyle = {
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
  };

  const handleEdit = (orderId) => {
    setEditingOrderId(orderId);
    onEdit(orderId);
  };

  const handleDelete = (orderId) => {
    onDelete(orderId);
  };

  return (
    <div>
      <h2>Order List</h2>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {orders.map(order => (
          <li key={order.id} style={listItemStyle}>
            <div>
              Order ID: {order.id} - Customer Name: {order.customerName} - Order Date: {order.orderDate} - Status: {order.status}
              {editingOrderId !== order.id && (
                <>
                  <button style={buttonStyle} onClick={() => handleEdit(order.id)}>Edit</button>
                  <button style={buttonStyle} onClick={() => handleDelete(order.id)}>Delete</button>
                </>
              )}
            </div>
            {editingOrderId === order.id && (
              <div>
                {/* Render edit form here */}
                <button style={buttonStyle} onClick={() => setEditingOrderId(null)}>Cancel</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;
