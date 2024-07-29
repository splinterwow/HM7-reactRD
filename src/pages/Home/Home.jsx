import React, { useState, useEffect } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import Select from '../../components/Select/Select';
import './index.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(['средний', 'другой']);

  async function fetchProducts(category = '') {
    const url = category
      ? `https://cars-pagination.onrender.com/products/category?category=${category}`
      : 'https://cars-pagination.onrender.com/products';
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCategoryChange = (category) => {
    fetchProducts(category);
  };

  return (
    <div className="container">
      <h1>Our Products</h1>
      <Select categories={categories} onChange={handleCategoryChange} />
      <ProductList products={products} />
    </div>
  );
}

export default Home;
