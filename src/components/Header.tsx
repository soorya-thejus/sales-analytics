import React, { useState } from 'react';
import './styles/ProductPerfomance.css';

export const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="header">
      <div className="profile-icon" onClick={toggleDropdown}>
        <img src="https://via.placeholder.com/40" alt="Profile" />
        {dropdownOpen && (
          <div className="dropdown">
            <ul>
              <li>Sign Out</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
