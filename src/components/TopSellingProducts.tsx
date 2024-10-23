import React from 'react';
import { Link } from 'react-router-dom';
import './styles/TopSellingProducts.css';

const topProducts = [
  { id: 1, name: 'Product A', sales: 1000 },
  { id: 2, name: 'Product B', sales: 850 },
  { id: 3, name: 'Product C', sales: 720 },
];

export const TopSellingProducts: React.FC = () => {
  return (
    <div className="top-products card">
      <h2>Top Selling Products</h2>
      <ul>
        {topProducts.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link> - {product.sales} units sold
          </li>
        ))}
      </ul>
    </div>
  );
};
