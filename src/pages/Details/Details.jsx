// Details.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`https://cars-pagination.onrender.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    }
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p className="price">{product.newPrice} UZS</p>
      <p className="old-price">{product.oldPrice} UZS</p>
      <p>{product.star} Stars</p>
      <p>{product.comments} Comments</p>
      <p>{product.isExist ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
}

export default Details;
