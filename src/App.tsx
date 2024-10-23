import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

export const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      <button className="toggle-button" onClick={toggleSidebar}>
        ☰
      </button>
      {isSidebarOpen && <Sidebar />}
      <div className={`content-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Dashboard />
      </div>
    </div>
  );
};
export default App;
