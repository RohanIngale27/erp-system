// OrderManagement.js

import React, { useState } from 'react';
import OrderList from './OrderList';
import AddOrderForm from './AddOrderForm';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  const handleAddOrder = (newOrder) => {
    setOrders(prevOrders => [...prevOrders, newOrder]);
  };

  const handleEditOrder = (orderId) => {
    // Logic for editing order
  };

  const handleDeleteOrder = (orderId) => {
    // Logic for deleting order
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Order Management</h1>
      <div style={{ width: '50%', marginBottom: '20px' }}>
        <AddOrderForm onAdd={handleAddOrder} />
      </div>
      <div style={{ width: '50%' }}>
        <OrderList orders={orders} onEdit={handleEditOrder} onDelete={handleDeleteOrder} />
      </div>
    </div>
  );
}

export default OrderManagement;
