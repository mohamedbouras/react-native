import React from 'react';
import './NavBar.css'
function NavBar() {
  return (
    <div className="navbar">
      <div className="centered-content">
 
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
