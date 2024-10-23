import React from 'react';
import './styles/Dashboard.css';
import { CustomerInsights } from './CustomerInsights';
import { ProductPerformance } from './ProductPerfomance';
import {Header} from './Header';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Header />

      <div className="overview-container">
        <h2>Sales Overview</h2>
        <div className="overview-items">
          <div className="overview-item">
            <h3>Total Sales</h3>
            <span>$120,000</span>
          </div>
          <div className="overview-item">
            <h3>Total Customers</h3>
            <span>3000</span>
          </div>
          <div className="overview-item">
            <h3>Sales Growth</h3>
            <span>15%</span>
          </div>
        </div>
      </div>

      <div className="chart-container">
        <div className="sales-by-region">
          <ProductPerformance />
        </div>
        <div className="sales-performance">
          <ProductPerformance />
        </div>
      </div>

      <div className="top-products-container">
        <h2>Top Selling Products</h2>
        {/* Add content or product list here */}
      </div>

      <CustomerInsights />
    </div>
  );
};

export default Dashboard
