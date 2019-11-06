import React from 'react';
import PortfolioItem from './PortfolioItem';
import './portfolio.css';

function Portfolio({items}) {
  return (
    <div className="portfolio flex-container">
      {items.map(item => <PortfolioItem key={item._id} item={item} />)}
    </div>
  );
}

export default Portfolio;
