import React from "react";
import { motion } from "framer-motion";

function PortfolioItem({ item, openProjectById, motionVariants }) {
  const thumbnailStyle = item.thumbnailUrl
    ? {
        backgroundImage: `url(${item.thumbnailUrl})`,
        backgroundPosition: item.thumbnailPosition || undefined,
      }
    : null;
  return (
    <motion.div
      className="portfolio__item flex-cell"
      onClick={() => openProjectById(item._id)}
      whileHover={{
        scale: 0.97,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      }}
    >
      <div
        className="portfolio__item__thumbnail flex-item"
        style={thumbnailStyle}
      >
        <div className="portfolio__item__thumbnail__overlay"></div>
      </div>
      <div className="portfolio__item__text">{item.title}</div>
    </motion.div>
  );
}

export default PortfolioItem;
