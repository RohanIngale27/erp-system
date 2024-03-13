import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const ProductsPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Category 1', price: 10, stockQuantity: 100 },
    { id: 2, name: 'Product 2', category: 'Category 2', price: 20, stockQuantity: 200 },
    // Assume more products here
  ]);

  const addProduct = (newProduct) => {
    // Assume logic to add new product to the list
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
  };

  return (
    <div>
      <ProductList products={products} />
      <ProductForm onSubmit={addProduct} />
    </div>
  );
}

export default ProductsPage;
