import React from 'react';
import './BentoGrid.css';

const BentoGrid = ({ children }) => {
  return <div className="bento">{children}</div>;
};

const BentoItem = ({ children, wide }) => {
  return <div className={`bento-item ${wide ? 'wider' : ''}`}>{children}</div>;
};

BentoGrid.Item = BentoItem;

export default BentoGrid;