import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Link to={`/details/${product.id}`} className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p className="price">{product.newPrice} UZS</p>
      <p className="old-price">{product.oldPrice} UZS</p>
      <p>{product.star} Stars</p>
      <p>{product.comments} Comments</p>
      <p>{product.isExist ? 'In Stock' : 'Out of Stock'}</p>
    </Link>
  );
}

export default ProductCard;
