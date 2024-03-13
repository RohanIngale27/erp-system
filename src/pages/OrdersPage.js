// OrdersPage.js

import React, { useState } from 'react';
import OrderList from '../components/OrderList';
import OrderManagement from '../components/OrderManagement'; // Import OrderManagement

const OrdersPage = () => {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'Customer 1', orderDate: '2024-03-10', status: 'Pending' },
    { id: 2, customerName: 'Customer 2', orderDate: '2024-03-11', status: 'Shipped' },
    // Add more orders as needed
  ]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <OrderManagement />
      <OrderList orders={orders} />
    </div>
  );
}

export default OrdersPage;
