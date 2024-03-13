import React, { useState } from 'react';
import CalendarView from '../components/CalendarView';

const CalendarPage = () => {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'Customer 1', orderDate: '2024-03-10', status: 'Pending' },
    { id: 2, customerName: 'Customer 2', orderDate: '2024-03-11', status: 'Shipped' },
    { id: 3, customerName: 'Customer 3', orderDate: '2024-03-12', status: 'Delivered' },
    { id: 10, customerName: 'Customer 10', orderDate: '2024-03-13', status: 'Pending' },
    { id: 20, customerName: 'Customer 20', orderDate: '2024-03-14', status: 'Shipped' },
    { id: 30, customerName: 'Customer 30', orderDate: '2024-03-15', status: 'Delivered' },
  ]);

  return (
    <div>
      <CalendarView orders={orders} />
    </div>
  );
}

export default CalendarPage;
