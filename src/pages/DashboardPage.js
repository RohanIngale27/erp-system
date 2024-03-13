import React from 'react';
import backgroundImage from '../images/background.jpg'; // Import the image

const DashboardPage = () => {
  // Dummy data
  const totalProducts = 50;
  const totalOrders = 100;

  // Inline styles
  const containerStyle = {
    textAlign: 'center',
    backgroundImage: `url(${backgroundImage})`, // Use the imported image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    height: '100vh', // Set height to 100vh for full screen
    width: '100vw', // Set width to 100vw for full screen
    color: 'Black', // Set text color to white
    fontWeight: 'bold', // Make all text bold
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)' // Add text shadow for highlighted effect
    
  };

  const statsStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '30px',
    color: 'red', // Set text color of total products and total orders to red
    backgroundColor: 'black', // Set background color to black
    padding: '5px 5px', // Add padding for square box
    borderRadius: '10000px', // Add border radius for square box
  };

  const navStyle = {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-around',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white', // Set font color to white
    backgroundColor: 'black', // Set background color to black
    padding: '10px 20px', // Add padding for square box
    borderRadius: '5px', // Add border radius for square box
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

export default DashboardPage;
