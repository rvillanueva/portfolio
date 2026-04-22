import { motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
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
    <motion.button
      type="button"
      className="portfolio__item"
      onClick={() => openProjectById(item._id)}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover="hover"
      aria-label={`View ${item.title}`}
    >
      <div className="portfolio__item__thumbnail" style={thumbnailStyle}>
        <motion.div
          className="portfolio__item__thumbnail__overlay"
          variants={{
            hover: { opacity: 1 },
          }}
        />
        <motion.div
          className="portfolio__item__thumbnail__icon"
          variants={{
            hover: { opacity: 1, scale: 1, y: 0 },
          }}
          initial={{ opacity: 0, scale: 0.85, y: 8 }}
        >
          <HiOutlineArrowUpRight />
        </motion.div>
      </div>
      <div className="portfolio__item__meta">
        <span className="portfolio__item__text">{item.title}</span>
      </div>
    </motion.button>
  );
}

export default PortfolioItem;
