import React from 'react';
import LogIn from '../Login';
import './index-header.css';

function Header() {
  return (
    <header>
      <div className="header-container">
        <LogIn />
      </div>
    </header>
  );
}

export default Header;
