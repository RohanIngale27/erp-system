// CalendarView.js

import React from 'react';

const CalendarView = ({ orders }) => {
  // Grouping orders by date
  const ordersByDate = {};

  orders.forEach(order => {
    const date = new Date(order.orderDate).toLocaleDateString();
    if (!ordersByDate[date]) {
      ordersByDate[date] = [];
    }
    ordersByDate[date].push(order);
  });

  // Inline styles
  const containerStyle = {
    marginTop: '20px',
    textAlign: 'center',
    backgroundColor: '#f7f7f7',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
  };

  const dateStyle = {
    fontWeight: 'bold',
    marginBottom: '10px',
    cursor: 'pointer',
    color: '#007bff' // Blue color for clickable dates
  };

  const listItemStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px'
  };

  const handleClickDate = (date) => {
    // Handle click event to view orders for the selected date
    console.log("Orders due for delivery on", date);
    // You can implement logic to filter and display orders for the selected date
  };

  return (
    <div style={containerStyle}>
      <h2>Calendar View</h2>
      <div className="calendar">
        {Object.keys(ordersByDate).map(date => (
          <div key={date}>
            <h3 style={dateStyle} onClick={() => handleClickDate(date)}>{date}</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {ordersByDate[date].map(order => (
                <li key={order.id} style={listItemStyle}>
                  {order.customerName} - Order Date: {order.orderDate} - Status: {order.status}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarView;
