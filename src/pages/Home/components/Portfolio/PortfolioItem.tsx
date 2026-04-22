import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import type { PortfolioItem as PortfolioItemType } from "../../../../data/portfolioData";

type PortfolioItemProps = {
  item: PortfolioItemType;
  openProjectById: (projectId: string) => void;
};

function PortfolioItem({ item, openProjectById }: PortfolioItemProps) {
  const thumbnailStyle: CSSProperties | undefined = item.thumbnailUrl
    ? {
        backgroundImage: `url(${item.thumbnailUrl})`,
        backgroundPosition: item.thumbnailPosition || undefined,
      }
    : undefined;
  return (
    <motion.div
      className="portfolio__item flex-cell"
      onClick={() => openProjectById(item._id)}
      whileHover={{
        scale: 0.96,
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
