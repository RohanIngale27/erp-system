
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './pages/ProductsPage';
import OrdersPage from './pages/OrdersPage'; // Import OrdersPage
import CalendarPage from './pages/CalendarPage';

function App() {
  return (  
    <div className="App">
      <BrowserRouter basename="/erp-system">
        <Routes>
          <Route exact path="/erp-system" element={<DashboardPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/orders" element={<OrdersPage />} /> {/* Updated route for OrdersPage */}
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
