import React from 'react';
import { useParams } from 'react-router-dom';
import './styles/ProductDetails.css';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Ensure `id` is not undefined before parsing it
  const productId = id ? parseInt(id, 10) : 0;

  // Mock product data based on `productId`
  const product = {
    id: productId,
    name: `Product ${productId}`,
    description: `This is the detailed information about Product ${productId}.`,
    price: 100 * productId,
  };

  if (productId === 0) {
    return <p>Invalid Product ID</p>;
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};
