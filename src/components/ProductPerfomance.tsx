import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import './styles/ProductPerfomance.css';

const data = [
  { name: 'Product A', sales: 2400 },
  { name: 'Product B', sales: 1398 },
  { name: 'Product C', sales: 9800 },
  { name: 'Product D', sales: 3908 },
];

export const ProductPerformance: React.FC = () => {
  return (
    <div className="product-performance card">
      <h2>Product Performance</h2>
      <BarChart width={400} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sales" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};
