import React from 'react';

function PortfolioItem({item, openProjectById}) {
  const thumbnailStyle = item.thumbnailUrl ? {
    backgroundImage: `url(${item.thumbnailUrl})`,
    backgroundPosition: item.thumbnailPosition || undefined
  } : null;
  return (
    <div className="portfolio__item flex-cell" onClick={() => openProjectById(item._id)}>
      <div className="portfolio__item__thumbnail flex-item" style={thumbnailStyle}>
        <div className="portfolio__item__thumbnail__overlay"></div>
      </div>
      <div className="portfolio__item__text">{item.title}</div>
    </div>
  );
}

export default PortfolioItem;
