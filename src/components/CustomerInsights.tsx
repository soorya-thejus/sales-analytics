import React from 'react';
import './styles/CustomerInsights.css';

export const CustomerInsights: React.FC = () => {
  return (
    <div className="customer-insights card">
      <h2>Customer Insights</h2>
      <div className="insights-items">
        <div className="insight-item">
          <span>Top Customer</span>
          <h3>John Doe</h3>
        </div>
        <div className="insight-item">
          <span>Customer Acquisition Rate</span>
          <h3>25%</h3>
        </div>
        <div className="insight-item">
          <span>Average Purchase Frequency</span>
          <h3>3 purchases/month</h3>
        </div>
      </div>
    </div>
  );
};
