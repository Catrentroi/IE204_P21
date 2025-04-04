import React from 'react';

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo">
        <a href="/">LOGO</a>
      </div>
      <div className="header-right">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <div className="user-actions">
          <a href="/cart">Cart (0)</a>
          <a href="/login">Login</a>
        </div>
      </div>
    </header>
  );
};

export default Header; 