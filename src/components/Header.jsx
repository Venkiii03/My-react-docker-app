import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ onOpenContact }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <header className="header container reveal">
      <div className="logo">Elementum</div>
      <nav className="nav-links">
        <ul>
          <li><a href="#home" className="clickable">Home</a></li>
          <li><a href="#studio" className="clickable">Studio</a></li>
          <li><a href="#services" className="clickable">Services</a></li>
          <li><a href="#contact" className="clickable" onClick={(e) => { e.preventDefault(); onOpenContact(); }}>Contact</a></li>
          <li><a href="#faqs" className="clickable">FAQs</a></li>
          <li>
            <button className="theme-toggle clickable" onClick={() => setIsDark(!isDark)}>
              {isDark ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </nav>
      <div className="menu-icon">
        <span></span><span></span>
      </div>
    </header>
  );
};
export default Header;
