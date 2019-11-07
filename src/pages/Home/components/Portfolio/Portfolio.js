import React from 'react';
import PortfolioItem from './PortfolioItem';
import './portfolio.css';

function Portfolio({items, openProjectById}) {
  return (
    <div className="portfolio flex-container">
      {items.map(item => <PortfolioItem openProjectById={openProjectById} key={item._id} item={item} />)}
    </div>
  );
}

export default Portfolio;
