import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-subscribe container">
        <h2>Subscribe to<br/>our newsletter</h2>
        <svg className="foot-arrows" width="120" height="120" viewBox="0 0 100 100">
          <path d="M20 10 Q40 -10 60 20 T40 80" stroke="#FF5C5C" strokeWidth="3" fill="none"/>
          <path d="M35 70 L40 85 L55 75" stroke="#FF5C5C" strokeWidth="3" fill="none"/>
          <path d="M40 30 Q60 10 80 40 T60 90" stroke="#FF5C5C" strokeWidth="3" fill="none"/>
          <path d="M55 80 L60 95 L75 85" stroke="#FF5C5C" strokeWidth="3" fill="none"/>
        </svg>

        <p>To make your stay special and even more memorable</p>
        <button className="btn-dark">Subscribe Now</button>
        
        <div className="deco-footer-shape">
          <div className="yellow-box"></div>
          <div className="purple-half"></div>
        </div>
      </div>

      <div className="footer-bottom-grid container">
        <div className="f-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Studio</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="f-col">
          <h4>Terms & Policies</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>
        <div className="f-col">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Youtube</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
        <div className="f-col addr-col">
          <h4>Terms & Policies</h4>
          <p>1498w Flutonate, STE<br/>2D Chicago, IL 63867.</p>
          <p>(123) 456789000</p>
          <p>info@elementum.com</p>
        </div>
      </div>
      <div className="copyright">
        ©2023 Elementum. All rights reserved
      </div>
    </footer>
  );
};
export default Footer;
