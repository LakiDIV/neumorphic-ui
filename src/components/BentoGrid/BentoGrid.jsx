import React from 'react';
import './BentoGrid.css';

const BentoGrid = ({ children }) => {
  return (
    <div className="bento-container"> {/* Added a container for centering */}
      <div className="bento">{children}</div>
    </div>
  );
};

const BentoItem = ({ children, wide, title }) => {
  return (
    <div className={`bento-item ${wide ? 'wider' : ''}`}>
      {title && <h2 className="bento-title">{title}</h2>} {/* Render title if provided */}
      {children}
    </div>
  );
};

BentoGrid.Item = BentoItem;

export default BentoGrid;