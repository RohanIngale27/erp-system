import React from 'react';

const Dashboard = ({ totalProducts, totalOrders }) => {
  // Inline styles
  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px'
  };

  const statsStyle = { 
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '30px'
  };

  const navStyle = {
    marginTop: '20px'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
    marginLeft: '10px'
  };

  return (
    <div style={containerStyle}>
      <h1>Dashboard</h1>
      <div style={statsStyle}>
        <p>Total Products: {totalProducts}</p>
        <p>Total Orders: {totalOrders}</p>
      </div>
      <nav style={navStyle}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ display: 'inline', marginRight: '20px' }}><a href="/products" style={linkStyle}>Product Management</a></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><a href="/orders" style={linkStyle}>Order Management</a></li>
          <li style={{ display: 'inline' }}><a href="/calendar" style={linkStyle}>Calendar View</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
