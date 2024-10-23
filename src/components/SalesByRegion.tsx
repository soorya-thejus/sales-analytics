import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import './styles/SalesByRegion.css';

const data = [
  { name: 'Region A', value: 400 },
  { name: 'Region B', value: 300 },
  { name: 'Region C', value: 300 },
  { name: 'Region D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const SalesByRegion: React.FC = () => {
  return (
    <div className="sales-by-region card">
      <h2>Sales by Region</h2>
      <PieChart width={400} height={300}>
        <Pie data={data} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};
