import React from "react";
import PortfolioItem from "./PortfolioItem";
import "./portfolio.css";
import { motion } from "framer-motion";

function Portfolio({ items, openProjectById }) {
  return (
    <motion.div className="portfolio flex-container">
      {items.map((item) => (
        <PortfolioItem
          openProjectById={openProjectById}
          key={item._id}
          item={item}
        />
      ))}
    </motion.div>
  );
}

export default Portfolio;
