import React from 'react';
import './styles/Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li><a href="/overview">Overview</a></li>
        <li><a href="/products">Products</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
