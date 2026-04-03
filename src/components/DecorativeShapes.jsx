import React from 'react';
import './DecorativeShapes.css';

export const DotsPattern = ({ top, left, right, bottom, color = 'var(--primary)' }) => (
  <svg 
    className="deco-dots pattern-float" 
    style={{ top, left, right, bottom, color }} 
    width="90" height="90" viewBox="0 0 80 80"
  >
    <defs>
      <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle fill="currentColor" cx="4" cy="4" r="4" opacity="0.4"></circle>
      </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"></rect>
  </svg>
);

export const SquigglyLine = ({ top, left, right, bottom, color='var(--highlight)', width="150" }) => (
  <svg 
    className="deco-squiggle"
    style={{ top, left, right, bottom }}
    width={width} viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 20C30 5 70 35 100 20C130 5 170 35 200 20" stroke={color} strokeWidth="8" strokeLinecap="round"/>
  </svg>
);

export const Ring = ({ top, left, right, bottom, color='var(--secondary)', size="100" }) => (
  <div 
    className="deco-ring pattern-float" 
    style={{ top, left, right, bottom, borderColor: color, width: size + 'px', height: size + 'px' }}
  />
);
