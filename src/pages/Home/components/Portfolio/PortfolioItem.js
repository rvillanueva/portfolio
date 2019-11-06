import React from 'react';
import {Link} from 'react-router-dom';

function PortfolioItem({item}) {
  const thumbnailStyle = item.thumbnailUrl ? {
    backgroundImage: `url(${item.thumbnailUrl})`,
    backgroundPosition: item.thumbnailPosition || undefined 
  } : null;
  return (
    <Link className="portfolio__item flex-cell" to={`/portfolio/${item._id}`}>
      <div className="portfolio__item__thumbnail flex-item" style={thumbnailStyle}>
        <div className="portfolio__item__thumbnail__overlay"></div>
      </div>
      <div className="portfolio__item__text">{item.title}</div>
    </Link>
  );
}

export default PortfolioItem;
