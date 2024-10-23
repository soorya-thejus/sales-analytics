import React from 'react';
import './styles/SalesOverview.css';

export const SalesOverview: React.FC = () => {
  return (
    <div className="sales-overview card">
      <h2>Sales Overview</h2>
      <div className="overview-items">
        <div className="overview-item">
          <span>Total Sales</span>
          <h3>$50,000</h3>
        </div>
        <div className="overview-item">
          <span>Sales Growth</span>
          <h3>15%</h3>
        </div>
        <div className="overview-item">
          <span>Total Transactions</span>
          <h3>1,200</h3>
        </div>
      </div>
    </div>
  );
};
export default SalesOverview;

